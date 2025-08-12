"use client";

import { searchTerms } from "@/lib/searchTerms";
import { useEffect, useState } from "react";

const App = () => {
	const [bingoCardText, setBingoCardText] = useState([
		"Rabbit-hole channel",
		"Wholesome content",
		"Foreign language (not English)",
		"Liminality",
		"Potential cult leader",
		"Rambler",
		'presented with no context and "doesn\'t make sense"',
		"Underrated video and/or creator",
		"Recurring / Established character",
		"Potential serial killer",
		'presented with no context but still "makes sense"',
		"Innovative idea / technology",
		"Distorted / Bass boosted",
		"I genuinely feel pity for this individual",
		"Crappy music",
		"Random animal spotted",
		"Channel has over 20,000 uploads",
		"FREE SPACE",
		"I learned something new from this vid / channel",
		"New lead discovery",
		"Randomly nsfw",
		"Angry human",
		"Channel has over 5,000 uploads",
		"Happy human",
		"Conspiracy Theory"
	]);

	const [searchTerm, setSearchTerm] = useState<{
		getKeyPhrase: () => string;
		searchParameter: string;
	}>();

	const [bingoCard, setBingoCard] = useState<boolean[][]>(
		Array.from({ length: 5 }, () => Array.from({ length: 5 }))
	);

	const setCard = (bingoCardText: string[]) => {
		const newBingoCard = [...bingoCard];

		for (let row = 0; row < newBingoCard.length; row++) {
			for (let column = 0; column < newBingoCard[row].length; column++) {
				newBingoCard[row][column] =
					bingoCardText[row * 5 + column] === "FREE SPACE";
			}
		}

		setBingoCard(newBingoCard);
	};

	const shuffle = () => {
		const newBingoCardText = [...bingoCardText];

		for (let i = newBingoCardText.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			[newBingoCardText[i], newBingoCardText[j]] = [
				newBingoCardText[j],
				newBingoCardText[i]
			];
		}

		setBingoCardText(newBingoCardText);

		return newBingoCardText;
	};

	useEffect(() => {
		setCard(shuffle());
	}, []);

	const checkForBingo = () => {
		for (const row of bingoCard) {
			if (row.every((cell) => cell)) {
				console.log("Bingo!");
			}
		}

		for (let column = 0; column < bingoCard.length; column++) {
			if (bingoCard.every((_, index) => bingoCard[index][column])) {
				console.log("Bingo!");
			}
		}

		if (bingoCard.every((row, index) => row[index])) {
			console.log("Bingo!");
		}

		if (bingoCard.every((row, index) => row[4 - index])) {
			console.log("Bingo!");
		}
	};

	const toggleCell = (index: number) => {
		if (bingoCardText[index] !== "FREE SPACE") {
			const newBingoCard = [...bingoCard];
			const row = Math.floor(index / 5);
			const column = index % 5;

			newBingoCard[row][column] = !newBingoCard[row][column];

			setBingoCard(newBingoCard);
		}
	};

	const [videoID, setVideoID] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const [videoType, setVideoType] = useState<"old" | "new">("old");

	const handleVideoButtonClick = async (sP: string) => {
		setIsLoading(true);
		setVideoID(null);

		const filteredSearchTerms = searchTerms.filter(
			(searchTerm) => searchTerm.searchParameter === sP
		);
		const sT =
			filteredSearchTerms[
				Math.floor(Math.random() * filteredSearchTerms.length)
			];

		setSearchTerm(sT);

		try {
			const params = new URLSearchParams({
				query: sT.getKeyPhrase(),
				sp: sT.searchParameter
			});
			const response = await fetch(
				`/api/ytScraper/?${params.toString()}`
			);
			const searchResults = await response.json();
			const videoIDs = await searchResults.videos;
			const videoID =
				videoIDs[Math.floor(Math.random() * videoIDs.length)];

			setVideoID(videoID);
		} catch (error) {
			console.error("Error fetching video:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="bg-slate-950 flex flex-col h-screen justify-center p-2 w-screen">
			<div className="flex items-center pl-4 w-full">
				<h1 className="flex-1 font-bold text-4xl">V I D G O</h1>
				<div className="flex flex-1 items-center justify-between max-w-[90vh] px-2">
					<div className="bg-slate-800 flex gap-2 h-16 p-2 relative rounded-xl">
						<div
							className={`absolute bg-slate-900 duration-300 ease-in-out h-12 ${
								videoType === "old" ? "left-2" : "left-1/2"
							} rounded-lg transition-all w-[calc(50%-6px)]`}
						/>
						<button
							className="cursor-pointer flex flex-1 items-center justify-center p-4  text-slate-300 text-sm z-10"
							onClick={() => {
								setVideoType("old");
							}}
						>
							Old Forgotten Video
						</button>
						<button
							className="cursor-pointer flex flex-1 items-center justify-center p-4 text-slate-300 z-10"
							onClick={() => {
								setVideoType("new");
							}}
						>
							Brand New Video
						</button>
					</div>
					<button
						className="bg-slate-800 hover:bg-slate-700 cursor-pointer flex font-medium h-16 items-center justify-center p-4 rounded-lg text-slate-300 transition-colors w-44"
						onClick={() => {
							setCard(shuffle());
						}}
					>
						<p className="text-slate-300">Generate New Card</p>
					</button>
					<button
						className={`bg-emerald-600/80 flex font-medium hover:bg-emerald-600 cursor-pointer h-16 items-center justify-center p-4 ${
							isLoading && "pointer-events-none"
						} rounded-lg transition-colors w-32`}
						onClick={() => {
							handleVideoButtonClick(
								videoType === "old"
									? "EgIQAQ=="
									: "CAISBAgCEAE="
							);
						}}
					>
						{isLoading ? (
							<div className="animate-spin border-b-2 border-slate-300 h-4 rounded-full w-4" />
						) : (
							<p className="text-slate-300">Get Video</p>
						)}
					</button>
				</div>
			</div>
			<div className="flex w-full">
				<div className="flex flex-col flex-1 h-full items-center justify-center w-full">
					<div className="bg-slate-900/60 border border-slate-800 p-3 rounded-3xl w-full">
						<div className="aspect-video">
							{videoID ? (
								<iframe
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="rounded-3xl"
									height="100%"
									src={`https://www.youtube.com/embed/${videoID}`}
									width="100%"
								/>
							) : (
								<div className="bg-slate-900/60 flex items-center justify-center h-full rounded-3xl w-full">
									{isLoading ? (
										<div className="animate-spin border-b-2 border-slate-300 h-12 rounded-full w-12" />
									) : (
										<p>
											Click below to get a new or old
											video
										</p>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="flex flex-col flex-1 gap-2 items-center justify-center p-2 max-w-[90vh]">
					<div className="aspect-square bg-slate-950/60 border border-slate-800 grid grid-cols-5 gap-3 p-4 rounded-3xl w-full">
						{bingoCardText.map((text, index) => {
							return (
								<div
									className={`aspect-square border ${
										bingoCard[Math.floor(index / 5)][
											index % 5
										]
											? "bg-emerald-600/20 border-emerald-500"
											: "bg-slate-900/60 border-slate-800 hover:border-emerald-400"
									} cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 items-center justify-center p-2 rounded-2xl transition-colors`}
									key={index}
									onClick={() => {
										toggleCell(index);
										checkForBingo();
									}}
								>
									<p
										className={`leading-tight text-center text-[6px] lg:text-xs xl:text-lg`}
									>
										{text}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
