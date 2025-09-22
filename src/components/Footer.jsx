import React from "react";

function Footer() {
	return (
		<div className="w-full bg-zinc-900">
			<div className="max-w-screen-xl mx-auto py-10 flex gap-32">
				<div className="basis-1/2">
					<h1 className="text-[11.5rem] font-semibold leading-none tracking-tight ">
						refokus.
					</h1>
				</div>
				<div className="basis-1/2 flex gap-4">
					<div className="basis-1/3 ">
						<h4
							className="mb-10 text-zinc-500 capitalize
                        ">
							socials
						</h4>
						{["Instagram", "Twitter (x?)", "LinkedIn"].map(
							(item, index) => (
								<a className="block mt-3 capitalize text-zinc-600">
									{item}
								</a>
							)
						)}
					</div>
					<div className="basis-1/3 ">
						<h4
							className="mb-10 text-zinc-500 capitalize
                        ">
							socials
						</h4>
						{["Instagram", "Twitter (x?)", "LinkedIn"].map(
							(item, index) => (
								<a className="block mt-3 capitalize text-zinc-600">
									{item}
								</a>
							)
						)}
					</div>

					<div className="basis-1/2">
						<p className="text-right flex flex-col items-end">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</p>
						<img src="" alt="img" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
