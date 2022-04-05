import { useState } from "react";

export default function Canvas() {
	const [pixel, setPixel] = useState([]);
	return (
		<div className="grid overflow-auto relative">
			<div
				onClick={(e) => {
					console.log(e.clientX / 10, e.clientY / 10);
					setPixel([
						...pixel,
						{
							x: Math.floor(e.clientX / 10) * 10,
							y: Math.floor(e.clientY / 10) * 10,
							color: "bg-slate-700",
						},
					]);
				}}
				className="h-[1000px] w-[1000px] border m-10"
			>
				{pixel.map(({ x, y, color }) => (
					<div
						style={{
							top: y,
							left: x,
						}}
						className={`absolute ${color} h-[10px] w-[10px]`}
					></div>
				))}
			</div>
		</div>
	);
}
