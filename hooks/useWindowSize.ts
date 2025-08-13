import { useEffect, useState } from "react";

const useWindowSize = () => {
	const [size, setSize] = useState({ height: 0, width: 0 });

	useEffect(() => {
		const update = () => {
			requestAnimationFrame(() => {
				setSize({
					height: window.innerHeight,
					width: window.innerWidth
				});
			});
		};

		update();

		window.addEventListener("resize", update, { passive: true });

		return () => {
			return window.removeEventListener("resize", update);
		};
	}, []);

    return size;
};

export default useWindowSize;