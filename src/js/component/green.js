import React, { useState } from "react";

export function Green() {
	let [greenLight, setgreenLight] = useState("Off");

	function change3() {
		if (greenLight === "On") {
			setgreenLight("Off");
		} else {
			setgreenLight("Off");
		}
	}
	return (
		<div className="light">
			<button onClick={change3}>{greenLight}</button>
		</div>
	);
}
