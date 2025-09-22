import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
function Products() {
	var products = [
		{
			title: "arqitel",
			description:
				"Arqu Excutive and its employees continerw afsddk jfi custnosdfk falk that ",
			live: true,
			cases: true,
		},
		{
			title: "TTR",
			description:
				"Arqu Excutive and its employees continerw afsddk jfi custnosdfk falk that ",
			live: true,
			cases: false,
		},
		{
			title: "YIR",
			description:
				"Arqu Excutive and its employees continerw afsddk jfi custnosdfk falk that ",
			live: true,
			cases: true,
		},
		{
			title: "Yahoo",
			description:
				"Arqu Excutive and its employees continerw afsddk jfi custnosdfk falk that ",
			live: true,
			cases: true,
		},
	];

	const [position, setPosition] = useState(0);
	const mover = (val) => {
		setPosition(val * 23);
	};

	return (
		<div className="bg-zinc-800 mt-32 relative">
			{products.map((elem, index) => (
				<Product val={elem} key={index} mover={mover} index={index} />
			))}
			<div className="w-full h-full absolute top-0 pointer-events-none">
				<motion.div
					initial={{ y: position, x: "-50%" }}
					animate={{ y: position + `rem` }}
					transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
					className="window w-[32rem] h-[23rem] absolute left-[44%] overflow-hidden">
					<motion.div
						animate={{ y: -position + `rem` }}
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
						className="w-full h-full bg-amber-100"></motion.div>
					<motion.div
						animate={{ y: -position + `rem` }}
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
						className="w-full h-full bg-amber-800"></motion.div>
					<motion.div
						animate={{ y: -position + `rem` }}
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
						className="w-full h-full bg-amber-300"></motion.div>
					<motion.div
						animate={{ y: -position + `rem` }}
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
						className="w-full h-full bg-amber-400"></motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default Products;

