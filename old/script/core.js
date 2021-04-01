class Gen {
	generators = 0;
	purchasedGenerators = 0;
	cost;

	constructor(cost) {
		this.cost = cost;
	}

	purchase(bits, totBits) {
		if (bits < this.cost)
			return 0;
		let oldCost = this.cost;
		this.generators++;
		this.purchasedGenerators++;
		this.cost = this.cost * Math.pow(1 + Math.random()),(this.purchasedGenerators/(1 + entropicPower));
		return oldCost;
	}

	getOutput() {
		return this.generators;
	}

	add(num) {
		this.generators += num;
	}
}

class Game {
	///=========[Core]==================
	tickspeed = 20;
	///=========[Bit Counter]===========
	bits = 0;
	totBits = 0;
	///=========[Entropy Gen]===========
	generator = new Gen(5);
	///=========[Recursive Gen]=========
	recursor = new Gen(100);
	///=========[Entropic Power]========
	entropicPower = 0;

	click() {
		this.bits++;
		this.totBits++;
	}

	update() {
		this.bits += this.generator.getOutput() * (1 / game.tickspeed);
		this.generator.add(this.recursor.getOutput() * (1 / game.tickspeed));
	}


}
let game = new Game();
function render() {
	game.update();
	document.getElementById("num").innerText = game.bits.toFixed(0);
	document.getElementById("keyb").innerText = "Generate (" + game.generator.cost.toFixed(0) + " bits)";
	document.getElementById("keybd").innerText = "Entropy Generator(" + game.generator.generators.toFixed(0) + ")";
	document.getElementById("recurb").innerText = "Generate (" + game.recursor.cost.toFixed(0) + " bits)";
	document.getElementById("recurd").innerText = "Recursive Generator(" + game.recursor.generators.toFixed(0) + ")";
}
function initialise() { //I bind the buttons here since using onclick in html can occasionally be unrealiable
	document.getElementById("generate").onclick = function () { game.click() };
	document.getElementById("keyb").onclick = function () { game.bits -= game.generator.purchase(game.bits, game.totBits) }; //not the most elegant, but certainly more maintainable
	document.getElementById("recurb").onclick = function () { game.bit -= game.recursor.purchase(game.bits, game.totBits) };
}
let interval = setInterval(render, 1000 / game.tickspeed);