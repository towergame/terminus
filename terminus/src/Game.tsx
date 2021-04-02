import React from 'react';
import { Link } from "react-router-dom";

class Game extends React.Component {
	render() {
		return (
			<div className="up term-text">
				<br />
				<br />
				<br />
				<br />
				<div id="generateDiv"><button id="generate">Generate</button></div>
				<br />
				<br />
				<br />
				<div id="generatorDiv">
					<span id="keybd">Entropy Generator(0)</span> <button id="keyb">Generate (1 bits)</button> <br />
					<span id="recurd">Recursive Generator(0)</span> <button id="recurb">Generate (100 bits)</button> <br />
					<br />
					<br />
					<span>If you would empower now, you would gain <span id="pendPowNum">0</span> Entropic Power</span> <br />
					<button id="powerb">Empower.</button>
				</div>
			<br />
			<br />
			<div id="tabselect">
				<button className="tab" id="shopTab" disabled>Upgrades</button>
				<button className="tab" id="regulusTab" hidden>Regulus</button>
			</div>
			<div id="tabcontain">
				<div id="shop">
					<div id="unlockShop">
						<button id="unlock">Reverse Entropy.<br />
							3 Entropic Power</button>
					</div>
					<div id="unlocked" hidden>
						<button id="mult" className="shopItem">Production multiplier based on purchased Generators(xNaN &
							xNaN).<br />
							10 Entropic Power
						</button>
						<button id="exMult" className="shopItem">Production multiplier based on total Entropy
							Generators(xNaN).<br />
							15 Entropic Power</button>
						<br />
						<button id="entPow" className="shopItem">Production multiplier based on Entropic Power(xNaN).<br />
							18 Entropic Power</button>
						<button id="scalePow" className="shopItem">Increase the effect Entropic Power has on scaling.<br />
							30 Entropic Power</button>
						<button id="bitMult" className="shopItem">Production multiplier based on total Entropy Bits
							generated(xNaN).<br />
							30 Entropic Power</button>
						<br />
						<button id="initio" className="shopItem">Initio Regulus.<br />
							40 Entropic Power</button>
					</div>
				</div>
				<div id="regulus" hidden>
					<button id="form">
						Form a Regulus. <br />
						NaN Entropic Power
					</button>
				</div>
				<div id="entropic_order" hidden>
					<button id="eo11">
						Form a Regulus. <br />
						NaN Entropic Power
					</button>
				</div>
			</div>
			<br />
			<Link to="/tutorial">What is this?</Link>
			<br />
			<br />
			<button id="clear">Delete save.</button>
		</div>
		);
	}
}

export default Game;
