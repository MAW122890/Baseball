//when you stopped you were getting an infinite loop after making changes to the if/else in the while loop
//you're trying to get it to continue dealing cards to the next player once one player runs out of cards


var HandComputer = require('./HandComputer.js');
var Hand = require('./Hand.js');
var Deck = require('./Deck.js');
//var Game = require('./Game.js');

var deck = new Deck();
var computer = new HandComputer();
var bestHandDrewLast = true;
var playerIndex = 0;
var players;
var currentBet;
var bestHand = 0;
var currHand = 1;
var pot = 0;
var playerHands = [];
var visibleHands = [];

deck.makeDeck();
deck.shuffle(1);

	
var rl = require('readline');

var prompts = rl.createInterface(process.stdin, process.stdout);


function createHands(numPlayers) {
	players = numPlayers;
	
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
	turn();

}
	
function turn() {
	if (playerIndex == bestHand) {
		prompts.question("Player " + (playerIndex + 1) + ": Do you bet or fold? ", turnDecision);
	}
	
	else {
		prompts.question("Player " + (playerIndex + 1) + ": Do you call or fold? ", turnDecision);
	}
}

function continueTurn() {
	

	console.log("playerIndex is: " + playerIndex);
	console.log("best hand is: " + bestHand);
	
	if (playerIndex == bestHand) {
		cardFlip(); //if every player has made a decision it's time to determine who draws the next card
	}
	
	else {
		turn();
	}
}

function cardFlip() {
	while (bestHand != currHand) {
		
		console.log("best hand: " + bestHand + " has " + playerHands[bestHand].cards.length + " cards left");
		console.log("curr hand: " + currHand + " has " + playerHands[currHand].cards.length + " cards left");
		console.log("______________");
	
		if (playerHands[currHand].cards.length == 0) {
			
			console.log("player " + (currHand + 1) + " has no cards left");
			
			//break;   //I don't want it to break I want it to continue dealing the next players cards
			
			if (currHand < players -1) {
				currHand ++;
			}
			
			else {
				currHand = 0;
			}
			
			cardFlip();  //this does not seem to be working
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
			playerIndex = bestHand;
			
				
			/*if (currHand < players - 1) {
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
				
				else if (currHand < players - 1) {
					currHand++;
				}					
					
				else {
					currHand = 0;
				}
			}*/	
		}
	}	
	if (currHand < players - 1) {
		currHand++;
	}
	
	else {
		currHand = 0;
	}
	
	turn();  //going to have to figure how to increment which player starts the betting round
}  

function turnDecision(decision) {
	if (decision === 'bet') {
		bet();
	}
	
	else if (decision === 'call') {
		betTotal(currentBet);   //trying to make the "call" just repeat the same bet
		//continueTurn();
	}
	
	else if (decision === 'fold') {
		console.log("Player " + (playerIndex + 1) + " folds.");
		playerHands[playerIndex].cards = [];
		console.log(playerHands[playerIndex].cards.length);  
		console.log("________");
		console.log("Player " + (playerIndex + 1) + "'s hand is empty. " + playerHands[playerIndex - 1].cards);
		playerIndex++;
		continueTurn();
	}
	
	else {
		console.log("Not an option dickweed");
		turn();
	}
}

//function foldHands(){} might need to create a function to handle folding hands so that the array length is 0

function bet() {
	prompts.question("How much do you bet? ", betTotal);
}

function betTotal(bet) {
	
	currentBet = parseInt(bet);
	console.log("Player " + (playerIndex + 1) + " bets " + currentBet + ".");
	pot += currentBet;
	console.log(pot);
	
	if (playerIndex < players - 1) {
		playerIndex++;
	}
	
	else {
		playerIndex = 0;
	}
	
	continueTurn();
}


	

prompts.question("How many players? ", createHands);


