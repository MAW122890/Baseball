function Card(value, suit) {   //constructor for building cards
	this.value = value;
  	this.suit = suit;

 	this.toString = cardToString;

	//cardToString will take any card and print it's name/value as a string
 	function cardToString() {
  		var value;
  		var suit;

  		switch (this.value) {
   			case 2 :
    			value = "Two";
    			break;
  			case 3 :
   				value = "Three";
   				break;
 			case 4 :
   				value = "Four";
  				break;
  			case 5 :
   				value = "Five";
  				break;
  			case 6 :
   				value = "Six";
   				break;
  			case 7 :
   				value = "Seven";
   				break;
  			case 8 :
   				value = "Eight";
   				break;
  			case 9 :
   				value = "Nine";
   				break;
  			case 10 :
   				value = "Ten";
   				break;
  			case 11 :
   				value = "Jack";
   				break;
  			case 12 :
   				value = "Queen";
   				break;
  			case 13 :
   				value = "King";
   				break;
  			case 14 :
   				value = "Ace";
  				break;
  			default :
   				value = null;
  				break;
 		}

		switch (this.suit) {
 			case "H" :
   				suit = "Hearts";
   				break;
  			case "D" :
   				suit = "Diamonds";
   				break;
  			case "C" :
   				suit = "Clubs";
   				break;
  			case "S" :
   				suit = "Spades";
  				break;
  			default:
   				suit = null;
   				break;
 		}

 		if (value === null || suit === null) {
  			console.log("Not a valid card.");
 		}

 		else {
  			console.log (value + " of " + suit)
 		}
	}
}

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

function Hand() {
 	this.cards = new Array();
  	this.addCard = handAddCard;
  	this.sort = handSort;
	this.values = handToValues;


	function handAddCard(card) {
 		this.cards.push(card);
	}


	function handSort() {
		var temp;

		for (i = 0; i < this.cards.length - 1; i++) {
 			for (j = i+1; j < this.cards.length; j++) {
   				if (this.cards[i].value > this.cards[j].value) {
     				temp = this.cards[i];
		      		this.cards[i] = this.cards[j];
		      		this.cards[j] = temp;
    			}
  			}
		}

	}
	
	function handToValues() {
		var handValues = new Array();
		
		for (i = 0; i < this.cards.length; i++) {
			handValues[i] = this.cards[i].value;
		}
		
		return handValues;
	}
}

function valueToString(x) {
	
	var topValueTranslated;
	
	switch(x) {
		case 11:
			topValueTranslated = "Jack";
			break;
		case 12:
			topValueTranslated = "Queen";
			break;
		case 13:
			topValueTranslated = "King";
			break;
		case 14:
			topValueTranslated = "Ace";
			break;
		default:
			topValueTranslated = x;
			break;
	}
	
	return topValueTranslated;
}
	

function isPair(inputArr) {

	var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var currCard;
	var pair = 0;
	
	for (i = 0; i < inputArr.length; i++) {
		currCard = inputArr[i];
		//count[currCard-2]++;   way it was before
		
		if (currCard == 3 || currCard == 9) {     //3 and 9 are wild so if they are drawn just increase every part of the array
			for (j = 0; j < count.length; j++) {
				count[j]++;
			}
		}
		
		else {
			count[currCard-2]++;
		}
	}							
								
	/*console.log(count);			currCard can only take values 2 or greater
								so we subtract 2 from it so that the card "2" increments
								the first cell of the arry*/
	
	for (i = 0; i < count.length; i++) {
		if (count[i] == 2) {
			pair++;
		}
	}
	
	if (pair > 0) {
		return true;
	}
	
	return false;
}

function highestValuePair(inputArr) {
	
	var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var currCard;
	var pair = 0;
	var topValue;
	
	for (i = 0; i < inputArr.length; i++) {
		currCard = inputArr[i];
		//count[currCard-2]++;   way it was before
		
		if (currCard == 3 || currCard == 9) {     //3 and 9 are wild so if they are drawn just increase
			for (j = 0; j < count.length; j++) {
				count[j]++;
			}
		}
		
		else {
			count[currCard-2]++;
		}
	}							
	
	for (i = 0; i < count.length; i++) {
		if (count[i] == 2) {
			topValue = i + 2;
		}
	}
			
	var valueString = valueToString(topValue);
	return valueString;
}

function isThreeOfAKind(inputArr) {
 	
	var count = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  	var currCard;
	var countOfThrees = 0;
  
  	for (i=0; i<inputArr.length; i++) {
   		currCard = inputArr[i];
    
		if (currCard == 3 || currCard == 9) {
			for (j = 0; j < count.length; j++) {
				count[j]++;
			}
		}
	
		else {
			count[currCard-2]++;
		}
  	}

	//console.log(count);

	for (i=0; i<count.length; i++) {
   		if (count[i] == 3) {
    		countOfThrees++;
    	}
  	}

	if (countOfThrees >= 1) {
		return true;
	}
	
 	return false;
}

function highestValueThree(inputArr) {
	
	var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var currCard;
	var pair = 0;
	var topValue;
	
	for (i = 0; i < inputArr.length; i++) {
		currCard = inputArr[i];
		//count[currCard-2]++;   way it was before
		
		if (currCard == 3 || currCard == 9) {     //3 and 9 are wild so if they are drawn just increase
			for (j = 0; j < count.length; j++) {
				count[j]++;
			}
		}
		
		else {
			count[currCard-2]++;
		}
	}							
	
	for (i = 0; i < count.length; i++) {
		if (count[i] == 3) {
			topValue = i + 2;
		}
	}
	var valueString = valueToString(topValue);
	return valueString;
}

function isFourOfAKind(inputArr) {
	var count = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  	var currCard;
  
	for (i=0; i<inputArr.length; i++) {
   		currCard = inputArr[i];

		if (currCard == 3 || currCard == 9) {
			for (j = 0; j < count.length; j++) {
				count[j]++;
			}
		}
	
		else {
    		count[currCard-2]++;
		}  
	}
	
	//console.log(count);

	for (i=0; i<count.length; i++) {
   		if (count[i] >= 4) {
     		return true;
    	}
  	}
 	
	return false;
}

function highestValueFour(inputArr) {
	
	var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var currCard;
	var pair = 0;
	var topValue;
	
	for (i = 0; i < inputArr.length; i++) {
		currCard = inputArr[i];
		//count[currCard-2]++;   way it was before
		
		if (currCard == 3 || currCard == 9) {     //3 and 9 are wild so if they are drawn just increase
			for (j = 0; j < count.length; j++) {
				count[j]++;
			}
		}
		
		else {
			count[currCard-2]++;
		}
	}							
	
	for (i = 0; i < count.length; i++) {
		if (count[i] >= 4) {
			topValue = i + 2;
		}
	}
	var valueString = valueToString(topValue);
	return valueString;
}


function bestPokerHand(testArr) {                                     	//bestPokerHand tests for multiple poker hands
	var topValue;														//and determines what your best hand is
																		//and only prints that hand
	if(isFourOfAKind(testArr)) {
		topValue = highestValueFour(testArr);
		console.log("You have four " + topValue + "s! " + testArr)
	}
	
	else if(isThreeOfAKind(testArr)) {
		topValue = highestValueThree(testArr);
   		console.log("You have three " + topValue + "s! " + testArr)
  	}

	else if(isPair(testArr)) {
		topValue = highestValuePair(testArr);
   		console.log("You have a pair of " + topValue + "s! ")
  	}
}
		


var deck = new Deck();
var hand = new Hand();

deck.makeDeck();
deck.shuffle(1);


for (i = 0; i < 7; i++) {
 	var drawnCard = deck.deal();
 	hand.addCard(drawnCard);
}

for(k = 0; k < hand.cards.length; k++) {
 	hand.cards[k].toString();
}

console.log("_____________");
hand.sort();

for(k = 0; k < hand.cards.length; k++) {
 	hand.cards[k].toString();
};

var numbers = hand.values();

console.log(numbers);

bestPokerHand(numbers);







