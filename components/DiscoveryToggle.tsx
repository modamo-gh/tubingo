import { VideoType } from "../types/VideoType";
import DiscoveryButton from "./Buttons/DiscoveryButton";

interface DiscoveryToggleProps {
    setVideoType: (videoType: VideoType) => void;
    videoType: VideoType;
}

const DiscoveryToggle = ({videoType, setVideoType}: DiscoveryToggleProps) => {
    return <div className="bg-slate-800 flex gap-2 h-16 p-2 relative rounded-xl">
    <div
        className={`absolute bg-slate-900 duration-300 ease-in-out h-12 ${
            videoType === "old" ? "left-2" : "left-1/2"
        } rounded-lg transition-all w-[calc(50%-6px)]`}
    />
    <DiscoveryButton
        setVideoType={() => setVideoType("old")}
        text="Old Forgotten Video"
        videoType="old"
    />
    <DiscoveryButton
        setVideoType={() => setVideoType("new")}
        text="Brand New Video"
        videoType="new"
    />
</div>
}

export default DiscoveryToggle;