var HandComputer = require('./HandComputer.js');
var Hand = require('./Hand.js');
var Deck = require('./Deck.js');
//var Game = require('./Game.js');

var deck = new Deck();
var computer = new HandComputer();
var bestHandDrewLast = true;
var bestHand = 0;
var currHand = 1;

deck.makeDeck();
deck.shuffle(1);

	
var rl = require('readline');

var prompts = rl.createInterface(process.stdin, process.stdout);


function createHands(numPlayers) {
		
	var playerHands = [];
	var visibleHands = [];
	
	for (i = 0; i < numPlayers; i++) {
		playerHands[i] = new Hand();
	}
	
	for (i = 0; i < numPlayers; i++) {
		visibleHands[i] = new Hand();
	}
	
	for (i = 0; i < 7; i++) {
 		for (j = 0; j < numPlayers; j++) {
	
			var drawnCard = deck.deal();
 			playerHands[j].addCard(drawnCard);
		}
	}

	for (i = 0; i < numPlayers; i ++) {
		playerHands[i].toString();
		console.log("__________");
	}
	
	
	var topCard = playerHands[bestHand].handFlip();
	visibleHands[bestHand].addCard(topCard);
	visibleHands[bestHand].toString();
	visibleHands[bestHand].sort();
	visibleHands[bestHand].bestPokerHand();
	console.log("_____________");
	
	
	
	while (bestHand != currHand) {
		
		console.log("best hand: " + bestHand + " has " + playerHands[bestHand].cards.length + " cards left");
		console.log("curr hand: " + currHand + " has " + playerHands[currHand].cards.length + " cards left");
		console.log("______________");
		
		if (playerHands[currHand].cards.length == 0) {
			
			console.log("player " + currHand + " has no cards left");
			
			if (currHand < numPlayers -1) {
				currHand ++;
			}
			
			else {
				currHand = 0;
			}
		}
		
		else if (computer.betterHand(visibleHands[bestHand], visibleHands[currHand], bestHandDrewLast)) {
			
			console.log("hand " + bestHand + " is better than hand " + currHand);
			
			var topCard = playerHands[currHand].handFlip();
					
			console.log("made it past the break");
			visibleHands[currHand].addCard(topCard);
			visibleHands[currHand].toString();
			visibleHands[currHand].sort();
			visibleHands[currHand].bestPokerHand();
			console.log("_____________");
			bestHandDrewLast = false;
		}
		
		else {
			console.log("switching hands");
			bestHand = currHand;
				
			if (currHand < numPlayers - 1) {
				currHand++;
			}
			
			else {
				currHand = 0;
			}
			
			while (playerHands[currHand].length == 0) {
				
				console.log("no cards left2");
				
				if (currHand == bestHand) {
					break;
				}
				
				else if (currHand < numPlayers - 1) {
					currHand++;
				}					
					
				else {
					currHand = 0;
				}
			}		
		}
	}
	
	console.log("game over");
	
	process.exit();	// gonna have to move this
}

prompts.question("How many players? ", createHands);