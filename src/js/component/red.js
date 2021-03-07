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
		<div className="text-center mt-5">
			<button onClick={change}>{redLight}</button>
		</div>
	);
}
