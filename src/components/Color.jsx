import React from "react";

const colors = [
	"#ff4500",
	"#ffa800",
	"#facc15",
	"#ffd635",
	"#00a268",
	"#7eed56",
	"#2450a4",
	"#3690ea",
	"#51e9f4",
	"#811e9f",
	"#b44ac0",
	"#ff99aa",
	"#9c6926",
	"#000000",
	"#898d90",
	"#d4d7d9",
	"#ffffff",
];

export default function Color({ setSelectedColor }) {
	return (
		<div className="flex justify-center w-screen h-12 bg-slate-50 shadow-2xl shadow-black  fixed bottom-0 left-0">
			<div className="flex justify-center items-center overflow-scroll">
				{colors.map((color) => (
					<button
						onClick={() => setSelectedColor(color)}
						style={{ backgroundColor: color }}
						className="border h-8 w-14 focus:border-5 focus:border-slate-700 focus:-translate-y-1"
					></button>
				))}
			</div>
		</div>
	);
}
