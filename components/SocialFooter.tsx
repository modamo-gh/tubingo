import { FaGithub } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";

const SocialFooter = () => {
	return (
		<footer className="bg-slate-900/60 border border-slate-800 p-2 rounded-2xl w-full grid grid-cols-3 place-items-center">
			<a
				href="https://bsky.app/profile/modamo.xyz"
				rel="noopener noreferrer"
				target="_blank"
			>
				<SiBluesky
					className="text-emerald-500"
					size={24}
				/>
			</a>
			<a
				href="https://github.com/modamo-gh/tubingo"
				rel="noopener noreferrer"
				target="_blank"
			>
				<FaGithub
					className="text-emerald-500"
					size={24}
				/>
			</a>
			<p className="text-center text-emerald-500 text-lg">
				Inspired By{" "}
				<a
					className="underline"
					href="https://www.youtube.com/@KVNAUST"
					rel="noopener noreferrer"
					target="_blank"
				>
					KVN AUST
				</a>
			</p>
		</footer>
	);
};

export default SocialFooter;
