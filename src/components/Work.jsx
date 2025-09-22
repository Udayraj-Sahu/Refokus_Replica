import React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
	const [images, setImages] = React.useState([
		{
			url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6792867f19f728bf3062fb63_thumbnail-4_3.png",
			top: "35%",
			left: "52%",
			isActive: false,
		},
		{
			url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67ac97539b2b1323a3eb7a01_arqitel-thumbnail_B-4_3.webp",
			top: "37%",
			left: "58%",
			isActive: false,
		},
		{
			url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8ccb75f918dc861c6c3_Layout%20Land%20-%204%203.webp",
			top: "32%",
			left: "56%",
			isActive: false,
		},
		{
			url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67ac97034a827d356105bca8_RainfallV1-thumbnail_B-4_3.webp",
			top: "40%",
			left: "53%",
			isActive: false,
		},
		{
			url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67ac971777c1fa627f9e24b8_Yahoo-thumbnail_B-4_3.webp",
			top: "43%",
			left: "50%",
			isActive: false,
		},
		{
			url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67ac9738fd6b15f11de57f3b_Weglot-thumbnail_B-4_3.webp",
			top: "45%",
			left: "55%",
			isActive: false,
		},
	]);

	const { scrollYProgress } = useScroll();

	scrollYProgress.on("change", (data) => {
		function imagesShow(arr) {
			setImages((prev) =>
				prev.map((item, index) =>
					arr.indexOf(index) == -1
						? { ...item, isActive: false }
						: { ...item, isActive: true }
				)
			);
		}

		switch (Math.floor(data * 100)) {
			case 0:
				imagesShow([]);
				break;
			case 1:
				imagesShow([0]);
				break;
			case 2:
				imagesShow([0, 1]);
				break;
			case 3:
				imagesShow([0, 1, 2]);
				break;
			case 4:
				imagesShow([0, 1, 2, 3]);
				break;
			case 5:
				imagesShow([0, 1, 2, 3, 4]);
				break;
			case 6:
				imagesShow([0, 1, 2, 3, 4, 5]);
				break;
		}
	});

	return (
		<div className="w-full mt-20">
			<div className="relative max-w-screen-xl mx-auto text-center">
				<h1 className="text-[23vw] leading-none font-medium select-none tracking-tight">
					Work
				</h1>
			</div>
			<div className="absolute top-0 w-full h-full">
				{images.map(
					(elem, index) =>
						elem.isActive && (
							<img
								className="w-60 absolute rounded-lg -translate-y-[50%] -translate-x-[50%]  "
								style={{ top: elem.top, left: elem.left }}
								src={elem.url}
								key={index}
							/>
						)
				)}
			</div>
		</div>
	);
}

export default Work;
