import { VideoType } from "@/../types/VideoType";

interface DiscoveryButtonProps {
	setVideoType: (videoType: VideoType) => void;
	text: string;
	videoType: VideoType;
}

const DiscoveryButton = ({
	setVideoType,
	text,
	videoType
}: DiscoveryButtonProps) => {
	return (
		<button
			className="cursor-pointer flex flex-1 items-center justify-center p-4 text-slate-300 z-10"
			onClick={() => {
				setVideoType(videoType);
			}}
		>
			{text}
		</button>
	);
};

export default DiscoveryButton;
