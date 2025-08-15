import { NextRequest, NextResponse } from "next/server";
import Innertube, { YTNodes } from "youtubei.js";

export const GET = async (request: NextRequest) => {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get("query");
	const videoType = searchParams.get("videoType");

	console.log(query, videoType);

	if (!query) {
		return NextResponse.json(
			{ success: false, error: "Missing ?query" },
			{ status: 400 }
		);
	}

	try {
		const youTube = await Innertube.create();

		let search = await youTube.search(
			query,
			videoType === "old"
				? { type: "video" }
				: {
						sort_by: "upload_date",
						type: "video",
						upload_date: "today"
				  }
		);
		let videos = [...search.videos];

		if (search.has_continuation) {
			search = await search.getContinuation();

			videos = [...videos, ...search.videos];
		}

		const filteredVideos = videos
			.filter((video) => video.is(YTNodes.Video))
			.filter((video) => !video.is_watched);

		const parseViews = (video: YTNodes.Video) => {
			const potentialNumber = video.view_count?.text
				?.split(/\s+/)[0]
				.trim();

			if (potentialNumber === "No") {
				return 0;
			}

			return Number(potentialNumber?.replaceAll(",", ""));
		};

		if (!filteredVideos.length) {
			return NextResponse.json({
				success: false,
				videoID: null
			});
		}

		let upperBound = 1;

		for (let i = 0; i < 11; i++) {
			const lowViews = filteredVideos.filter(
				(video) => parseViews(video) < upperBound
			);

			if (!lowViews.length) {
				upperBound *= 10;
			} else {
				const video =
					lowViews[Math.floor(Math.random() * lowViews.length)];

				console.log(video);

				return NextResponse.json({
					success: true,
					viewCount: parseViews(video),
					videoID: video.video_id
				});
			}
		}
	} catch (error: unknown) {
		console.error("Error:", error);

		const message =
			error instanceof Error
				? error.message
				: typeof error === "string"
				? error
				: JSON.stringify(error);

		return NextResponse.json({ success: false, error: message });
	}
};
