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
		keyPhrase: string;
		searchParameter: string;
		toString: () => string;
	}>(searchTerms.old[Math.floor(Math.random() * searchTerms.old.length)]);

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

	return (
		<div className="bg-slate-800 flex flex-col md:flex-row h-screen gap-2 items-center justify-center p-2 w-screen">
			<div className="flex flex-col flex-1 gap-2 h-full items-center justify-center w-full">
				<div className="aspect-video w-full">
					<iframe
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="rounded"
						height="100%"
						src="https://www.youtube.com/embed/dQw4w9WgXcQ"
						width="100%"
					/>
				</div>
				<div className="flex justify-around w-full">
					<button
						className="bg-slate-300 hover:bg-slate-400 cursor-pointer font-medium p-4 rounded text-slate-800 transition-colors"
						onClick={() => {
							const sT =
								searchTerms.old[
									Math.floor(
										Math.random() * searchTerms.old.length
									)
								];
							setSearchTerm(sT);
							console.log(sT);
						}}
					>
						Brand New Video
					</button>
					<button
						className="bg-slate-300 hover:bg-slate-400 cursor-pointer font-medium p-4 rounded text-slate-800 transition-colors"
						onClick={() => {
							const sT =
								searchTerms.new[
									Math.floor(
										Math.random() * searchTerms.new.length
									)
								];
							setSearchTerm(sT);
							console.log(sT);
						}}
					>
						Old Forgotten Video
					</button>
				</div>
			</div>
			<div className="flex flex-col flex-1 gap-2 items-center justify-center">
				<div className="aspect-square grid grid-cols-5 gap-2 max-h-[90vh]">
					{bingoCardText.map((text, index) => {
						return (
							<div
								className={`aspect-square ${
									bingoCard[Math.floor(index / 5)][index % 5]
										? "bg-green-500 hover:bg-green-600"
										: "bg-slate-200 hover:bg-slate-300"
								} cursor-pointer flex items-center justify-center p-2 rounded`}
								key={index}
								onClick={() => {
									toggleCell(index);
									checkForBingo();
								}}
							>
								<p
									className={`leading-tight text-center text-slate-800 text-[6px] md:text-[8px] lg:text-xs xl:text-lg`}
								>
									{text}
								</p>
							</div>
						);
					})}
				</div>
				<button
					className="bg-slate-300 hover:bg-slate-400 cursor-pointer font-medium p-4 rounded text-slate-800 transition-colors"
					onClick={() => {
						setCard(shuffle());
					}}
				>
					Generate New Card
				</button>
			</div>
		</div>
	);
};

export default App;
