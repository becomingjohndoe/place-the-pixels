import { useState, useRef, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import data from "../data/pixels";
import Color from "./Color";
import SelectBox from "./SelectBox";

export default function Canvas() {
	const [pixel, setPixel] = useState(data);
	const [selectedColor, setSelectedColor] = useState("black");
	const [scale, setScale] = useState(1.5);
	const [xy, setXY] = useState({ x: 0, y: 0, color: "black" });
	const canvasRef = useRef(null);

	const hw = 10;

	useEffect(() => {
		//Our first draw
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		pixel.forEach(({ x, y, color }) => {
			ctx.fillStyle = color;
			ctx.fillRect(x, y, hw, hw);
		});
		// fillCanvas();
		// console.log(pixel);
	}, [pixel]);

	const getMousePos = (event, color) => {
		const canvas = canvasRef.current;
		const rect = canvas.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		return {
			x: Math.floor(x / (hw * scale)) * hw,
			y: Math.ceil(y / (hw * scale)) * hw - hw,
			color,
		};
	};

	const fillCanvas = () => {
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
		const coords = [];
		for (let i = 0; i < 1000; i += 10) {
			for (let j = 0; j < 1000; j += 10) {
				coords.push({
					x: i,
					y: j,
					color: colors[Math.floor(Math.random() * colors.length)],
				});
			}
		}
		// console.log(coords);
	};
	// Ready, set, go
	return (
		<div
			onKeyDown={(e) => {
				console.log("keydown", e.key);

				// add pixel
				if (e.key === "Enter") {
					setPixel(() => {
						return [...pixel, xy];
					});
				}
				switch (e.key) {
					case "ArrowUp":
						setXY({
							...xy,
							y: xy.y - 10,
						});
						break;
					case "ArrowDown":
						setXY({
							...xy,
							y: xy.y + 10,
						});
						break;
					case "ArrowLeft":
						setXY({
							...xy,
							x: xy.x - 10,
						});
						break;
					case "ArrowRight":
						setXY({
							...xy,
							x: xy.x + 10,
						});

						break;

					default:
						break;
				}
			}}
			tabIndex={0}
			className="h-full"
		>
			<TransformWrapper
				doubleClick={{ disabled: true }}
				onZoom={(z) => {
					setScale(z.state.scale);
					// console.log(scale);
				}}
				initialScale={1.5}
				minScale={0.5}
				limitToBounds={false}
				wheel={{ step: 0.03 }}
				panning={{ velocityDisabled: true }}
				initialPositionX={-250}
				initialPositionY={-500}
			>
				<TransformComponent>
					<SelectBox getMousePos={getMousePos} xy={xy} />
					<canvas
						onClick={(e) => {
							setXY(getMousePos(e, selectedColor));
						}}
						className="border-4 m-10"
						ref={canvasRef}
						height="1000px"
						width="1000px"
						style={{ imageRendering: "pixelated" }}
					></canvas>
				</TransformComponent>
			</TransformWrapper>

			<Color setSelectedColor={setSelectedColor} />
		</div>
	);
}
