import React from "react";
import Marue from "./Marue";

function Maruees() {
	var images = [
		[
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
		],
		[
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
			"https://picsum.photos/200/300",
		],
	];
	return (
		<div className="w-full py-20 bg-zinc-900 relative overflow-hidden ">
			{images.map((item, index) => (
				<Marue
					imageurls={item}
					direcetion={index === 0 ? "left" : "right"}
				/>
			))}
		</div>
	);
}

export default Maruees;
