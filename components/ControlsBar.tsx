import { Dispatch, SetStateAction } from "react";
import { VideoType } from "../types/VideoType";
import GenerateCardButton from "./Buttons/GenerateCardButton";
import GetVideoButton from "./Buttons/GetVideoButton";
import DiscoveryToggle from "./DiscoveryToggle";

interface ControlsBarProps {
	hasBingo: boolean;
	setCard: (bingoCardText: string[]) => void;
	setHasBingo: Dispatch<SetStateAction<boolean>>;
	setVideoType: (videoType: VideoType) => void;
	shuffle: () => string[];
	videoType: VideoType;
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setQuery: Dispatch<SetStateAction<string | null>>;
	setVideoID: Dispatch<SetStateAction<string | null>>;
	setViewCount: Dispatch<SetStateAction<number>>;
}

const ControlsBar = ({
	hasBingo,
	isLoading,
	setCard,
	setHasBingo,
	setIsLoading,
	setQuery,
	setVideoID,
	setVideoType,
	setViewCount,
	shuffle,
	videoType
}: ControlsBarProps) => {
	return (
		<div className="flex flex-1 gap-2 h-12 items-center justify-between max-w-[85vh]">
			<div className="flex flex-1 h-full items-center justify-center">
				<DiscoveryToggle
					setVideoType={setVideoType}
					videoType={videoType}
				/>
			</div>
			<div className="flex flex-1 h-full items-center justify-center">
				<GenerateCardButton
					hasBingo={hasBingo}
					setCard={setCard}
					setHasBingo={() => setHasBingo(false)}
					shuffle={shuffle}
				/>
			</div>
			<div className="flex flex-1 h-full items-center justify-center">
				<GetVideoButton
					isLoading={isLoading}
					setIsLoading={setIsLoading}
					setQuery={setQuery}
					setVideoID={setVideoID}
					setViewCount={setViewCount}
					videoType={videoType}
				/>
			</div>
		</div>
	);
};

export default ControlsBar;
