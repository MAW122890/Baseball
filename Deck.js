var Card = require('./Card.js');

function Deck() {
 	this.deckCards = new Array();

 	this.makeDeck = cardsMakeDeck;
 	this.shuffle = deckShuffle;
 	this.deal = topCardDeal;

	function cardsMakeDeck() {

 		for (i = 0; i < 52; i++) {
  			if (i < 13) {
      			this.deckCards[i] = new Card(i+2, "H");       //first 13 cards are all the same suit
    		}

  			else if (i < 26) {
      			this.deckCards[i] = new Card(i-11, "D");      //next 13 are a new suit
    		}

  			else if (i < 39) {
      			this.deckCards[i] = new Card(i-24, "C");      //3rd suit
    		}

  			else {
      			this.deckCards[i] = new Card(i-37, "S");      //last suit
    		}
 		}
	}

	function deckShuffle(n) {
 		var i;
 		var j;
		var k;
 		var temp;

 		for (i = 0; i < n; i++) {
  			for (j = 0; j < this.deckCards.length; j++) {
   				k = Math.floor(Math.random() * this.deckCards.length);
   				temp = this.deckCards[j];
   				this.deckCards[j] = this.deckCards[k];
   				this.deckCards[k] = temp;
  			}
 		}
	}

	function topCardDeal() {
 		if (this.deckCards.length > 0) {
  			return this.deckCards.shift();
 		}

 		else {
  			return null;
 		}
	}
}

module.exports = Deck;