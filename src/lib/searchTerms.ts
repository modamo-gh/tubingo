export const searchTerms = [
	{
		getKeyPhrase: () => "IMG",

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => "MVI",

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () =>
			`WIN ${new Date().getFullYear()}${String(
				new Date().getMonth() + 1
			).padStart(2, "0")}${String(new Date().getDate()).padStart(
				2,
				"0"
			)}`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () =>
			`${new Date().getFullYear()}${String(
				new Date().getMonth() + 1
			).padStart(2, "0")}${String(new Date().getDate()).padStart(
				2,
				"0"
			)}`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () =>
			`VID ${new Date().getFullYear()}${String(
				new Date().getMonth() + 1
			).padStart(2, "0")}${String(new Date().getDate()).padStart(
				2,
				"0"
			)}`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () =>
			`${String(new Date().getMonth() + 1).padStart(2, "0")}${String(
				new Date().getDate()
			).padStart(2, "0")}${new Date().getFullYear()}`,

		searchParameter: "CAISBAgCEAE=",
		toString: function () {
			return `${this.getKeyPhrase}() ${this.searchParameter}`;
		}
	},
	{
		getKeyPhrase: () =>
			`Capture ${new Date().getFullYear()}${String(
				new Date().getMonth() + 1
			).padStart(2, "0")}${String(new Date().getDate()).padStart(
				2,
				"0"
			)}`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () =>
			`${String(new Date().getDate()).padStart(2, "0")}${String(
				new Date().getMonth() + 1
			).padStart(2, "0")}${new Date().getFullYear()}`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => "My Movie",

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => "My Edited Video",

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => "/Storage/Emulated/",

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => "PXL",

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () =>
			`InShot ${new Date().getFullYear()}${String(
				new Date().getMonth() + 1
			).padStart(2, "0")}${String(new Date().getDate()).padStart(
				2,
				"0"
			)}`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `WhatsApp Video ${new Date().getFullYear()}`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `FullSizeRender`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `RPReplay`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `VTS 01`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `DVR`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `SWF`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `VLC Record`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `Robloxapp`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `.MP4`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `.3GP`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `.MOV`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `.AVI`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `.WMV`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `.MKV`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `.MPEG`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `.FLV`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `.FLAC`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () => `.WAV`,

		searchParameter: "CAISBAgCEAE="
	},
	{
		getKeyPhrase: () =>
			`IMG ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`MVI ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`MOV ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`100 ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`SAM ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`DSC ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`SDV ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`DSCF${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`DSCN${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`PICT${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`MAQ0${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`FILE${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`GOPR${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`GP01${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`GX01${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`DJI ${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`HNI 0${String(Math.floor(Math.random() * 101)).padStart(3, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`WA0${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`MOL0${Math.floor(Math.random() * 256)
				.toString(16)
				.toUpperCase()
				.padStart(2, "0")}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`MOL0${String(Math.floor(Math.random() * 101)).padStart(4, "0")}`,
		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`${String(Math.floor(Math.random() * 24)).padStart(2, "0")}${String(
				Math.floor(Math.random() * 60)
			).padStart(2, "0")}${String(
				Math.floor(Math.random() * 60)
			).padStart(2, "0")}`,

		searchParameter: "EgIQAQ=="
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

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`VTS ${String(Math.floor(Math.random() * 100)).padStart(
				2,
				"0"
			)} ${String(Math.floor(Math.random() * 10))}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`VTS ${String(Math.floor(Math.random() * 1000)).padStart(
				3,
				"0"
			)} 1`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`VTS 01 ${String(Math.floor(Math.random() * 1000)).padStart(
				3,
				"0"
			)}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () => "My Slideshow",

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`My Slideshow ${String(Math.floor(Math.random() * 100)).padStart(
				2,
				"0"
			)}`,

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () => "My Slideshow Video",

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () => "My Stupeflix Video",

		searchParameter: "EgIQAQ=="
	},
	{
		getKeyPhrase: () =>
			`My Stupeflix Video ${String(
				Math.floor(Math.random() * 1051)
			).padStart(4, "0")}`,

		searchParameter: "EgIQAQ=="
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

		searchParameter: "EgIQAQ=="
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

		searchParameter: "EgIQAQ=="
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

		searchParameter: "EgIQAQ=="
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

		searchParameter: "EgIQAQ=="
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

		searchParameter: "EgIQAQ=="
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

		searchParameter: "EgIQAQ=="
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

		searchParameter: "EgIQAQ=="
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

		searchParameter: "EgIQAQ=="
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

		searchParameter: "EgIQAQ=="
	}
];
