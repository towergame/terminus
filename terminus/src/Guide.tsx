import React from 'react';

class Guide extends React.Component {
	render() {
		return (
			<div>
				<div className="down"/>
				<div className="bg"/>
				<div className="overlay"/>
				<div className="up term-text tutorol">
					This is an idle game with a twist of randomness. You can play it like any other idle game. However, here are
					some explanations of some mechanics in the game:<br />
					Entropy Generator - generates bits of entropy<br />
					Recursive Generator - generates Entropy Generators<br />
					The cost scales with the formula of x * (1 + c)<sup>y/p</sup>, where:<br />
					x is the previous cost<br />
					c is a random number from 0 to 1<br />
					p is the amount of total entropic power + 1<br />
					y is the amount of purchased generators<br />
					<br />
					Don't worry if it jumps to infinity, because you'll be able to decrease the scaling of the cost by collecting
					more and more Entropic Power.
					<br />
					<b>Entropic Power</b> is the currency(?) used to combat the immense scaling of the cost for the Generators.
					However, the more Entropic Power you have, the harder it is to gain it.<br />
					The formula for entropic power gain is log(x / e<sup>y + 2</sup>), where:<br />
					x is bits generated this run<br />
					y is entropic power you have<br />
					e is Euler's number<br />
				</div>
			</div>
		);
	}
}

export default Guide;
