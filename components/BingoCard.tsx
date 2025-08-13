import { Dispatch, SetStateAction, useState } from "react";
import Confetti from "react-confetti";

interface BingoCardProps {
	bingoCard: boolean[][];
	bingoCardText: string[];
	hasBingo: boolean;
	onBingo: () => void;
	setBingoCard: Dispatch<SetStateAction<boolean[][]>>;
}

const BingoCard = ({
	bingoCard,
	bingoCardText,
	hasBingo,
	onBingo,
	setBingoCard
}: BingoCardProps) => {
	const [showConfetti, setShowConfetti] = useState(false);

	const checkForBingo = () => {
		let bingoDetected = false;

		for (const row of bingoCard) {
			if (row.every((cell) => cell)) {
				bingoDetected = true;
			}
		}

		for (let column = 0; column < bingoCard.length; column++) {
			if (bingoCard.every((_, index) => bingoCard[index][column])) {
				bingoDetected = true;
			}
		}

		if (bingoCard.every((row, index) => row[index])) {
			bingoDetected = true;
		}

		if (bingoCard.every((row, index) => row[4 - index])) {
			bingoDetected = true;
		}

		if (bingoDetected) {
			onBingo();
			setShowConfetti(true);
			setTimeout(() => setShowConfetti(false), 5000);
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
		<>
			{showConfetti && (
				<Confetti
					colors={["#10b981", "#34d399", "#6ee7b7"]}
					gravity={0.3}
					numberOfPieces={200}
					recycle={false}
				/>
			)}
			<div className="aspect-square bg-slate-950/60 border border-slate-800 grid grid-cols-5 gap-3 p-4 rounded-3xl w-full">
				{bingoCardText.map((text, index) => {
					return (
						<div
							className={`aspect-square border ${
								bingoCard[Math.floor(index / 5)][index % 5]
									? "bg-emerald-600/20 border-emerald-500"
									: "bg-slate-900/60 border-slate-800 hover:border-emerald-400"
							} ${
								hasBingo
									? "pointer-events-none"
									: "cursor-pointer"
							} flex focus-visible:outline-none focus-visible:ring-2 items-center justify-center p-2 rounded-2xl transition-colors`}
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
		</>
	);
};

export default BingoCard;
