import { VideoType } from "../types/VideoType";
import DiscoveryButton from "./Buttons/DiscoveryButton";

interface DiscoveryToggleProps {
	setVideoType: (videoType: VideoType) => void;
	videoType: VideoType;
}

const DiscoveryToggle = ({ videoType, setVideoType }: DiscoveryToggleProps) => {
	return (
		<div className="bg-slate-800 flex h-full items-center w-full relative rounded-xl">
			<div
				className={`absolute bg-slate-900 duration-300 ease-in-out h-12 ${
					videoType === "old" ? "left-0" : "left-1/2"
				} rounded-lg transition-all w-1/2`}
			/>
			<DiscoveryButton
				setVideoType={() => setVideoType("old")}
				text="🗃️"
				videoType="old"
			/>
			<DiscoveryButton
				setVideoType={() => setVideoType("new")}
				text="🆕"
				videoType="new"
			/>
		</div>
	);
};

export default DiscoveryToggle;
