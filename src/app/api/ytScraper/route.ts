import { NextRequest, NextResponse } from "next/server";
import { chromium } from "playwright";

export const GET = async (request: NextRequest) => {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get("query");
	const sp = searchParams.get("sp");

	if (!query) {
		return NextResponse.json(
			{ success: false, error: "Missing ?query" },
			{ status: 400 }
		);
	}

	if (!sp) {
		return NextResponse.json(
			{ success: false, error: "Missing ?sp" },
			{ status: 400 }
		);
	}

	try {
		const browser = await chromium.launch({ headless: true });
		const page = await browser.newPage();
		const url = new URL("https://www.youtube.com/results");

		url.searchParams.set("search_query", query);
		url.searchParams.set("sp", sp);

		await page.goto(url.toString(), {
			waitUntil: "domcontentloaded",
			timeout: 60000
		});

		await page
			.locator("ytd-video-renderer")
			.first()
			.waitFor({ timeout: 15000 })
			.catch(() => {});

		const videos = await page.$$eval(
			"ytd-video-renderer",
			(elements: Element[]) => {
				return elements.map((element) => {
					const titleElement = element.querySelector(
						"#video-title"
					) as HTMLAnchorElement;
					const href = titleElement?.getAttribute("href");
					const videoID = href?.match(
						/(?:watch\?v=|shorts\/)([^&\n?#]+)/
					)?.[1];

					return videoID;
				});
			}
		);

		await browser.close();

		return NextResponse.json({
			success: true,
			message: `Successfully searched for: ${query}`,
			videos
		});
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
