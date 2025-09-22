import React from "react";
import { motion } from "framer-motion";

function Marue({ imageurls, direcetion }) {
	return (
		<div className="flex w-full overflow-hidden">
			<motion.div
				initial={{ x: direcetion === "left" ? "0%" : "-100%" }}
				animate={{ x: direcetion === "left" ? "-100%" : "0%" }}
				transition={{ ease: "linear", duration: 20, repeat: Infinity }}
				className="flex flex-shrink-0 gap-40 py-10 pr-40">
				{imageurls.map((url) => (
					<img src={url} className="w-[6vw] flex-shrink-0 " />
				))}
			</motion.div>
			<motion.div
				initial={{ x: direcetion === "left" ? "0%" : "-100%" }}
				animate={{ x: direcetion === "left" ? "-100%" : "0%" }}
				transition={{ ease: "linear", duration: 20, repeat: Infinity }}
				className="flex flex-shrink-0 gap-40 py-10 pr-40">
				{imageurls.map((url) => (
					<img src={url} className="w-[6vw] flex-shrink-0 " />
				))}
			</motion.div>
		</div>
	);
}

export default Marue;
