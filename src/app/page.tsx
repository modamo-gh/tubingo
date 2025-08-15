"use client";

import BingoCard from "@/../components/BingoCard";
import { VideoType } from "@/../types/VideoType";
import { useEffect, useState } from "react";
import ControlsBar from "@/../components/ControlsBar";
import useWindowSize from "@/../hooks/useWindowSize";
import SocialFooter from "@/../components/SocialFooter";

const App = () => {
	const [bingoCard, setBingoCard] = useState<boolean[][]>(
		Array.from({ length: 5 }, () => Array.from({ length: 5 }))
	);
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
	const [hasBingo, setHasBingo] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [query, setQuery] = useState<string | null>(null);
	const [videoID, setVideoID] = useState<string | null>(null);
	const [videoType, setVideoType] = useState<VideoType>("old");
	const [viewCount, setViewCount] = useState(0);

	const { width } = useWindowSize();

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

	return (
		<div className="bg-slate-950 flex flex-col gap-2 h-screen justify-center p-2 w-screen">
			<div className="flex gap-2 items-center w-full">
				<h1 className={`flex-1 font-light text-center text-4xl`}>
					T U B I N G O
				</h1>
				{width >= 768 && (
					<ControlsBar
						hasBingo={hasBingo}
						isLoading={isLoading}
						setCard={setCard}
						setHasBingo={setHasBingo}
						setIsLoading={setIsLoading}
						setQuery={setQuery}
						setVideoID={setVideoID}
						setVideoType={setVideoType}
						setViewCount={setViewCount}
						shuffle={shuffle}
						videoType={videoType}
					/>
				)}
			</div>
			<div className="flex flex-col gap-2 md:flex-row w-full">
				<div className="flex flex-col flex-1 h-full items-center justify-center w-full">
					<div className="bg-slate-900/60 border border-slate-800 p-3 rounded-3xl w-full">
						<div className="aspect-video">
							{videoID ? (
								<>
									<iframe
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										className="rounded-3xl"
										height="100%"
										src={`https://www.youtube.com/embed/${videoID}`}
										width="100%"
									/>
									<div className="flex items-center justify-around mt-2 w-full">
										<p>{`Query: ${query}`}</p>
										<p>{`View Count: ${viewCount}`}</p>
									</div>
								</>
							) : (
								<div className="bg-slate-900/60 flex items-center justify-center h-full rounded-3xl w-full">
									{isLoading ? (
										<div className="animate-spin border-b-2 border-slate-300 h-12 rounded-full w-12" />
									) : (
										<p>
											{!query
												? `Click "New Video" to get a random video`
												: `Wow, no videos found for ${query} 😔 Try again`}
										</p>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
				{width < 768 && (
					<ControlsBar
						hasBingo={hasBingo}
						isLoading={isLoading}
						setCard={setCard}
						setHasBingo={setHasBingo}
						setIsLoading={setIsLoading}
						setQuery={setQuery}
						setVideoID={setVideoID}
						setVideoType={setVideoType}
						setViewCount={setViewCount}
						shuffle={shuffle}
						videoType={videoType}
					/>
				)}
				<div className="flex flex-col flex-1 gap-2 items-center justify-center max-w-[85vh]">
					<BingoCard
						bingoCard={bingoCard}
						bingoCardText={bingoCardText}
						hasBingo={hasBingo}
						onBingo={() => setHasBingo(true)}
						setBingoCard={setBingoCard}
					/>
				</div>
			</div>
			<SocialFooter />
		</div>
	);
};

export default App;
