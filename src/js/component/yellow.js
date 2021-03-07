import React, { useState } from "react";

export function Yellow() {
	let [yellowLight, setyellowLight] = useState("Off");
	function change2() {
		if (yellowLight === "On") {
			setyellowLight("Off");
		} else {
			setyellowLight("Off");
		}
	}
	return (
		<div className="text-center mt-5">
			<button onClick={change}>{yellowLight}</button>
		</div>
	);
}
