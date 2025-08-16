export const searchTerms = [
	{
		getKeyPhrase: () => "IMG",
		videoType: "new"
	},
	{
		getKeyPhrase: () => "MVI",
		videoType: "new"
	},
	{
		getKeyPhrase: () =>
			`WIN ${new Date().getFullYear()}${String(
				new Date().getMonth() + 1
			).padStart(2, "0")}${String(new Date().getDate()).padStart(
				2,
				"0"
			)}`,
		videoType: "new"
	},
	{
		getKeyPhrase: () =>
			`${new Date().getFullYear()}${String(
				new Date().getMonth() + 1
			).padStart(2, "0")}${String(new Date().getDate()).padStart(
				2,
				"0"
			)}`,
		videoType: "new"
	},
	{
		getKeyPhrase: () =>
			`VID ${new Date().getFullYear()}${String(
				new Date().getMonth() + 1
			).padStart(2, "0")}${String(new Date().getDate()).padStart(
				2,
				"0"
			)}`,
		videoType: "new"
	},
	{
		getKeyPhrase: () =>
			`${String(new Date().getMonth() + 1).padStart(2, "0")}${String(
				new Date().getDate()
			).padStart(2, "0")}${new Date().getFullYear()}`,
		videoType: "new"
	},
	{
		getKeyPhrase: () =>
			`Capture ${new Date().getFullYear()}${String(
				new Date().getMonth() + 1
			).padStart(2, "0")}${String(new Date().getDate()).padStart(
				2,
				"0"
			)}`,
		videoType: "new"
	},
	{
		getKeyPhrase: () =>
			`${String(new Date().getDate()).padStart(2, "0")}${String(
				new Date().getMonth() + 1
			).padStart(2, "0")}${new Date().getFullYear()}`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => "My Movie",
		videoType: "new"
	},
	{
		getKeyPhrase: () => "My Edited Video",
		videoType: "new"
	},
	{
		getKeyPhrase: () => "/Storage/Emulated/",
		videoType: "new"
	},
	{
		getKeyPhrase: () => "PXL",
		videoType: "new"
	},
	{
		getKeyPhrase: () =>
			`InShot ${new Date().getFullYear()}${String(
				new Date().getMonth() + 1
			).padStart(2, "0")}${String(new Date().getDate()).padStart(
				2,
				"0"
			)}`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `WhatsApp Video ${new Date().getFullYear()}`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `FullSizeRender`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `RPReplay`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `VTS 01`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `DVR`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `SWF`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `VLC Record`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `Robloxapp`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `.MP4`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `.3GP`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `.MOV`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `.AVI`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `.WMV`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `.MKV`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `.MPEG`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `.FLV`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `.FLAC`,
		videoType: "new"
	},
	{
		getKeyPhrase: () => `.WAV`,
		videoType: "new"
	},
	{
		getKeyPhrase: () =>
			`IMG ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`MVI ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`MOV ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`100 ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`SAM ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`DSC ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`SDV ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`DSCF${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`DSCN${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`PICT${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`MAQ0${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`FILE${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`GOPR${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`GP01${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`GX01${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`DJI ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`HNI 0${String(Math.floor(Math.random() * 101)).padStart(3, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`WA0${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`MOL0${Math.floor(Math.random() * 256)
				.toString(16)
				.toUpperCase()
				.padStart(2, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`MOL0${String(Math.floor(Math.random() * 101)).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`${String(Math.floor(Math.random() * 24)).padStart(2, "0")}${String(
				Math.floor(Math.random() * 60)
			).padStart(2, "0")}${String(
				Math.floor(Math.random() * 60)
			).padStart(2, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`P10${
				Math.random() < 0.8
					? String(Math.floor(Math.random() * 20000)).padStart(5, "0")
					: String(
							Math.floor(Math.random() * 80000) + 20000
					  ).padStart(5, "0")
			}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`VTS ${String(Math.floor(Math.random() * 100)).padStart(
				2,
				"0"
			)} ${String(Math.floor(Math.random() * 10))}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`VTS ${String(Math.floor(Math.random() * 1000)).padStart(
				3,
				"0"
			)} 1`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`VTS 01 ${String(Math.floor(Math.random() * 1000)).padStart(
				3,
				"0"
			)}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () => "My Slideshow",
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`My Slideshow ${String(Math.floor(Math.random() * 100)).padStart(
				2,
				"0"
			)}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () => "My Slideshow Video",
		videoType: "old"
	},
	{
		getKeyPhrase: () => "My Stupeflix Video",
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`My Stupeflix Video ${String(
				Math.floor(Math.random() * 1051)
			).padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () => {
			const startYear = 2006;
			const start = new Date(startYear, 0, 1);
			const end = new Date();

			const randTime =
				start.getTime() +
				Math.random() * (end.getTime() - start.getTime());
			const randDate = new Date(randTime);

			return `${randDate.getFullYear()}${String(
				randDate.getMonth() + 1
			).padStart(2, "0")}${String(randDate.getDate()).padStart(2, "0")}`;
		},
		videoType: "old"
	},
	{
		getKeyPhrase: () => {
			const startYear = 2006;
			const start = new Date(startYear, 0, 1);
			const end = new Date();

			const randTime =
				start.getTime() +
				Math.random() * (end.getTime() - start.getTime());
			const randDate = new Date(randTime);

			return `${String(randDate.getMonth() + 1).padStart(2, "0")}${String(
				randDate.getDate()
			).padStart(2, "0")}${randDate.getFullYear()}`;
		},
		videoType: "old"
	},
	{
		getKeyPhrase: () => {
			const startYear = 2006;
			const start = new Date(startYear, 0, 1);
			const end = new Date();

			const randTime =
				start.getTime() +
				Math.random() * (end.getTime() - start.getTime());
			const randDate = new Date(randTime);

			return `${String(randDate.getDate()).padStart(2, "0")}${String(
				randDate.getMonth() + 1
			).padStart(2, "0")}${randDate.getFullYear()}`;
		},
		videoType: "old"
	},
	{
		getKeyPhrase: () => {
			const startYear = 2006;
			const start = new Date(startYear, 0, 1);
			const end = new Date();

			const randTime =
				start.getTime() +
				Math.random() * (end.getTime() - start.getTime());
			const randDate = new Date(randTime);

			return `WIN ${randDate.getFullYear()}${String(
				randDate.getMonth() + 1
			).padStart(2, "0")}${String(randDate.getDate()).padStart(2, "0")}`;
		},
		videoType: "old"
	},
	{
		getKeyPhrase: () => {
			const startYear = 2006;
			const start = new Date(startYear, 0, 1);
			const end = new Date();

			const randTime =
				start.getTime() +
				Math.random() * (end.getTime() - start.getTime());
			const randDate = new Date(randTime);

			return `VID ${randDate.getFullYear()}${String(
				randDate.getMonth() + 1
			).padStart(2, "0")}${String(randDate.getDate()).padStart(2, "0")}`;
		},
		videoType: "old"
	},
	{
		getKeyPhrase: () => {
			const startYear = 2006;
			const start = new Date(startYear, 0, 1);
			const end = new Date();

			const randTime =
				start.getTime() +
				Math.random() * (end.getTime() - start.getTime());
			const randDate = new Date(randTime);

			return `Capture ${randDate.getFullYear()}${String(
				randDate.getMonth() + 1
			).padStart(2, "0")}${String(randDate.getDate()).padStart(2, "0")}`;
		},
		videoType: "old"
	},
	{
		getKeyPhrase: () => {
			const startYear = 2017;
			const start = new Date(startYear, 0, 1);
			const end = new Date();

			const randTime =
				start.getTime() +
				Math.random() * (end.getTime() - start.getTime());
			const randDate = new Date(randTime);

			return `InShot ${randDate.getFullYear()}${String(
				randDate.getMonth() + 1
			).padStart(2, "0")}${String(randDate.getDate()).padStart(2, "0")}`;
		},
		videoType: "old"
	},
	{
		getKeyPhrase: () => {
			const startYear = 2018;
			const start = new Date(startYear, 0, 1);
			const end = new Date();

			const randTime =
				start.getTime() +
				Math.random() * (end.getTime() - start.getTime());
			const randDate = new Date(randTime);

			return `AUD-${randDate.getFullYear()}${String(
				randDate.getMonth() + 1
			).padStart(2, "0")}${String(randDate.getDate()).padStart(2, "0")}`;
		},
		videoType: "old"
	},
	{
		getKeyPhrase: () => {
			const startYear = 2021;
			const start = new Date(startYear, 0, 1);
			const end = new Date();

			const randTime =
				start.getTime() +
				Math.random() * (end.getTime() - start.getTime());
			const randDate = new Date(randTime);

			return `PXL ${randDate.getFullYear()}${String(
				randDate.getMonth() + 1
			).padStart(2, "0")}${String(randDate.getDate()).padStart(2, "0")}`;
		},
		videoType: "old"
	},
	{
		getKeyPhrase: () => "You have new Picture Mail! (video)",
		videoType: "old"
	},
	{
		getKeyPhrase: () => "Media1.3gp",
		videoType: "old"
	},
	{
		getKeyPhrase: () => "Media1.3g2",
		videoType: "old"
	},
	{
		getKeyPhrase: () => "Video.3g2",
		videoType: "old"
	},
	{
		getKeyPhrase: () => "New Multimedia Message",
		videoType: "old"
	},
	{
		getKeyPhrase: () => "Multimedia Message",
		videoType: "old"
	},
	{
		getKeyPhrase: () => "Video From My Phone",
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`Video${Math.floor(Math.random() * 11)
				.toString()
				.padStart(3, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`Vid${Math.floor(Math.random() * 11)
				.toString()
				.padStart(3, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () =>
			`MOV0${Math.floor(Math.random() * 11)
				.toString()
				.padStart(4, "0")}`,
		videoType: "old"
	},
	{
		getKeyPhrase: () => {
			const startYear = 2006;
			const start = new Date(startYear, 0, 1);
			const end = new Date();

			const randTime =
				start.getTime() +
				Math.random() * (end.getTime() - start.getTime());
			const randDate = new Date(randTime);

			return `For ${randDate.toLocaleDateString("en-US", {
				month: "long"
			})} ${String(randDate.getDate()).padStart(
				2,
				"0"
			)}, ${randDate.getFullYear()}`;
		},
		videoType: "old"
	}
];
