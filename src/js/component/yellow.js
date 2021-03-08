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
		<div className="light">
			<button onClick={change2}>{yellowLight}</button>
		</div>
	);
}
