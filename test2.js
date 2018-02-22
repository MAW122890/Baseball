var HandComputer = require('./HandComputerTest.js');
var Hand = require('./Hand.js');
var Deck = require('./Deck.js');

var numPlayers = 2;

/*var input = 5;
var playerHands = [];

for (i = 0; i < input; i++) {
	playerHands[i] = new Hand();*/

var deck = new Deck();
var hand = new Hand();
var pokerHand = new Hand();
var hand2 = new Hand();
var pokerHand2 = new Hand();
var computer = new HandComputer();
var playerOneDrewLast = true;

deck.makeDeck();
deck.shuffle(1);

for (i = 0; i < 7; i++) {
 	var drawnCard = deck.deal();
 	hand.addCard(drawnCard);
	drawnCard = deck.deal();
	hand2.addCard(drawnCard);
}

hand.toString();
console.log("__________");
hand2.toString();

var topCard = hand.handFlip();
pokerHand.addCard(topCard);

console.log("____________");

pokerHand.toString();
pokerHand.bestPokerHand();

console.log("____________");

while (hand.cards.length > 0 || hand2.cards.length > 0) {
	
	if (hand.cards.length == 0) {
		var topCard = hand2.handFlip();
		
		if (topCard == null) {
			break;
		}
		
		pokerHand2.addCard(topCard);
		pokerHand2.toString();
		pokerHand2.sort();
		pokerHand2.bestPokerHand();
		console.log("_____________");
	}
	
	else if (hand2.cards.length == 0) {
		var topCard = hand.handFlip();
		
		if (topCard == null) {
			break;
		}
		
		pokerHand.addCard(topCard);
		pokerHand.toString();
		pokerHand.sort();
		pokerHand.bestPokerHand();
		console.log("_____________");
	}
		
	else {	
		if (computer.betterHand(pokerHand, pokerHand2, playerOneDrewLast)) {
			var topCard = hand2.handFlip();
	
			if (topCard == null) {
				break;
			}
	
			pokerHand2.addCard(topCard);
			pokerHand2.toString();
			pokerHand2.sort();
			pokerHand2.bestPokerHand();
			console.log("_____________");
			playerOneDrewLast = false;
			
		}

		/*else if (computer.betterHand(pokerHand2, pokerHand)) {
			var topCard = hand.handFlip();
			
			if (topCard == null) {
				break;
			}
			
			pokerHand.addCard(topCard);
			pokerHand.toString();
			pokerHand.sort();
			pokerHand.bestPokerHand();
			console.log("_____________");
			playerSwitch = 1;
		}*/
		
		else {
			var topCard = hand.handFlip();
				
			if (topCard == null) {
				break;
			}
				
			pokerHand.addCard(topCard);
			pokerHand.toString();
			pokerHand.sort();
			pokerHand.bestPokerHand();
			console.log("_____________");
			playerOneDrewLast = true;
		}
	}
}

computer.betterHandLog(pokerHand, pokerHand2);