import { useState, useRef, useEffect } from "react";
import data from "../data/pixels";
import Color from "./Color";

export default function Canvas() {
	const [pixel, setPixel] = useState(data);
	const [selectedColor, setSelectedColor] = useState("black");
	const canvasRef = useRef(null);

	const hw = 5;

	useEffect(() => {
		//Our first draw
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		pixel.forEach(({ x, y, color }) => {
			ctx.fillStyle = color;
			ctx.fillRect(x, y, hw, hw);
		});

		console.log(pixel);
	}, [pixel]);

	const getMousePos = (event, color) => {
		const canvas = canvasRef.current;
		const rect = canvas.getBoundingClientRect();
		const x = event.clientX - rect.left - hw * 2;
		const y = event.clientY - rect.top - hw * 2;
		return { x: Math.ceil(x / hw) * hw, y: Math.ceil(y / hw) * hw, color };
	};

	// Ready, set, go
	return (
		<div className="h-screen overflow-hidden">
			<canvas
				onClick={(e) => {
					setPixel(() => {
						return [...pixel, getMousePos(e, selectedColor)];
					});
				}}
				className="border-4"
				ref={canvasRef}
				height="1000px"
				width="1000px"
			></canvas>
			<Color setSelectedColor={setSelectedColor} />
		</div>
	);
}
