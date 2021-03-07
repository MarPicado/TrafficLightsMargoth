import React from "react";

//include images into your bundle
import { Red } from "./red";
import { Yellow } from "./yellow";
import { Green } from "./green";

//create your first component
export function Home() {
	return (
		<div className="trafficlight">
			<div className="red">
				<Red />
			</div>
			<div className="yellow">
				<Yellow />
			</div>
			<div className="green">
				<Green />
			</div>
		</div>
	);
}
