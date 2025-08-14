import { Dispatch, SetStateAction } from "react";

interface GenerateCardButtonProps {
	hasBingo: boolean;
	setCard: (bingoCardText: string[]) => void;
	setHasBingo: Dispatch<SetStateAction<boolean>>;
	shuffle: () => string[];
}

const GenerateCardButton = ({
	hasBingo,
	setCard,
	setHasBingo,
	shuffle
}: GenerateCardButtonProps) => {
	return (
		<button
			className={`${
				hasBingo
					? "animate-pulse bg-emerald-600/70 hover:bg-emerald-600/80"
					: "bg-slate-800 hover:bg-slate-700"
			} cursor-pointer flex font-medium h-full items-center justify-center min-h-12 w-full p-4 rounded-lg text-slate-300 text-[8px] lg:text-xs transition-colors`}
			onClick={() => {
				setHasBingo(false);
				setCard(shuffle());
			}}
		>
			<p className="text-slate-300">Generate New Card</p>
		</button>
	);
};

export default GenerateCardButton;
