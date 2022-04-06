import React from "react";

export default function Color({ setSelectedColor }) {
	return (
		<div className="flex justify-center w-screen h-12 bg-slate-50 shadow-2xl shadow-black overflow-hidden fixed bottom-0 row-span-1">
			<div className="flex justify-center items-center ">
				<button
					onClick={() => setSelectedColor("#4ade80")}
					className="bg-green-400 border h-8 w-14 focus:border-5 focus:border-slate-700 focus:-translate-y-1"
				></button>
				<button
					onClick={() => setSelectedColor("black")}
					className="bg-slate-700 border h-8 w-14 focus:border-5 focus:border-slate-700 focus:-translate-y-1 "
				></button>
				<button
					onClick={() => setSelectedColor("yellow")}
					className="bg-yellow-400 border h-8 w-14 focus:border-5 focus:border-slate-700 focus:-translate-y-1"
				></button>
				<button
					onClick={() => setSelectedColor("red")}
					className="bg-red-400 border h-8 w-14 focus:border-5 focus:border-slate-700 focus:-translate-y-1"
				></button>
				<button
					onClick={() => setSelectedColor("blue")}
					className="bg-blue-400 border h-8 w-14 focus:border-5 focus:border-slate-700 focus:-translate-y-1"
				></button>
			</div>
		</div>
	);
}
