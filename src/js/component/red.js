import React, { useState } from "react";

export function Red() {
	let [redLight, setredLight] = useState("Off");
	function change1() {
		if (redLight === "On") {
			setredLight("Off");
		} else {
			setredLight("Off");
		}
	}
	return (
		<div className="light">
			<button onClick={change1}>{redLight}</button>
		</div>
	);
}
