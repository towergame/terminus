import Game from "./Game";
import React from "react";

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<div className="down"/>
				<div className="bg"/>
				<div className="overlay"/>
				<Game />
			</div>
		)
	}
}