var rl = require('readline');

var prompts = rl.createInterface(process.stdin, process.stdout);


var test;
var playerTurn = 0;

function onPlayersEntered(numPlayers) {
	test = numPlayers;
	turn();
}

function turn() {
	prompts.question("Please enter a number. ", enteredNumber);
}

function enteredNumber(number) {
	console.log("Player " + playerTurn + " entered number " + number);
	playerTurn++;
	
	if (playerTurn == test) {
		
	}
	
	else {
		turn();
	}
}


prompts.question("How many players? ", onPlayersEntered);

