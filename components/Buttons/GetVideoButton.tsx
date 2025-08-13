import { searchTerms } from "@/lib/searchTerms";
import { Dispatch, SetStateAction } from "react";
import { VideoType } from "@/../types/VideoType";

interface GetVideoButtonProps {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>
    setVideoID: Dispatch<SetStateAction<string | null>>;
    videoType: VideoType;
}

const GetVideoButton = ({isLoading, setIsLoading, setVideoID, videoType}: GetVideoButtonProps) => {
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
		<button
			className={`bg-emerald-600/80 flex font-medium hover:bg-emerald-600 cursor-pointer h-16 items-center justify-center p-4 ${
				isLoading && "pointer-events-none"
			} rounded-lg transition-colors w-32`}
			onClick={() => {
				handleVideoButtonClick(
					videoType === "old" ? "EgIQAQ==" : "CAISBAgCEAE="
				);
			}}
		>
			{isLoading ? (
				<div className="animate-spin border-b-2 border-slate-300 h-4 rounded-full w-4" />
			) : (
				<p className="text-slate-300">Get Video</p>
			)}
		</button>
	);
};

export default GetVideoButton;
