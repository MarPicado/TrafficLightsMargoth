import React, { useState } from "react";

//include images into your bundle

//create your first component

export function Home() {
	const [color, setColor] = useState("red");
	const allColors = ["red", "yellow", "green"];
	return (
		<div className="trafficlight">
			{allColors.map(c => (
				<div
					className={`light ${c} ${color === c ? "glow" : ""}`}
					onClick={() => setColor(c)}>
					{c}
				</div>
			))}
		</div>
	);
}
