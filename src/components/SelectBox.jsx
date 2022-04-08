import { useRef, useEffect, useState } from "react";

export default function SelectBox({ getMousePos, xy }) {
	const ref = useRef(null);
	useEffect(() => {}, []);
	return (
		<div
			style={{ top: xy.y + 43, left: xy.x + 43 }}
			className="h-[4px] w-[4px] absolute border"
		></div>
	);
}
