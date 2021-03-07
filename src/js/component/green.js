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
		<div className="text-center mt-5">
			<button onClick={change}>{greenLight}</button>
		</div>
	);
}
