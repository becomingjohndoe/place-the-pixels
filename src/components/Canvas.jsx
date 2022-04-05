import { useState } from "react";

export default function Canvas() {
	return (
		<div className="grid overflow-auto w-auto relative">
			<div className="h-[1000px] w-[1000px] border mx-10">
				<div className="absolute top-[100px] bg-slate-700 h-[5px] w-[5px]"></div>
			</div>
		</div>
	);
}
