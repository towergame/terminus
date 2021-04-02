import React from "react";

export default class Counter extends React.Component {
	render() {
		return (
			<div id="counter">
				<div id="num">0</div>
				<div id="sub">bits of entropy</div>
				<div id="pow">You currently have 0 Entropic Power.</div>
				<div id="reg"></div>
			</div>
		);
	}
}