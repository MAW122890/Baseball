var ValueToString = require('./ValueToString.js');

function Hand() {
 	this.cards = new Array();
	this.visibleCards = new Array();
  	this.addCard = handAddCard;
	this.handFlip = handFlip;
  	this.sort = handSort;
	this.values = handToValues;
	this.suits = handToSuits;
	this.string = valueToString;
	this.toString = toString;
	this.isPair = isPair;
	this.highestValuePair = highestValuePair;
	this.isThreeOfAKind = isThreeOfAKind;
	this.highestValueThree = highestValueThree;
	
	//WHY IN THE WORLD WILL THIS TEST FOR FOUR OF A KIND WHEN I HAVEN'T ACTUALLY ADDED THOSE METHODS UP HERE
	this.bestPokerHand = bestPokerHand;
	this.bestPokerHandValue = bestPokerHandValue;
	this.bestTopCard = bestTopCard;

	function handAddCard(card) {
 		this.cards.push(card);
	}
	
	function handFlip() {
		if (this.cards.length > 0) {
			return this.cards.shift();
		}
		
		else {
			return null;
		}
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
	
	function handToSuits() {
		var handSuits = new Array();
		for (i = 0; i < this.cards.length; i++) {
				handSuits[i] = this.cards[i].suit;
		}
		
		return handSuits;
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
	
	function toString() {
		var stringOfCards = "";  //added because we need return values to use res.send for the server
		
		for(k = 0; k < this.cards.length; k++) {
 			this.cards[k].toString();
			stringOfCards = stringOfCards + this.cards[k].toString() + "\n";  // \n special character that enters a new line
		};
		
		return stringOfCards;   //added because same reason
	}
	
	function highCard(inputArr) {
		
		var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var currCard;
		var highCard = 0;
		
		for (i = 0; i < inputArr.length; i++) {
			currCard = inputArr[i];
			count[currCard-2]++;
		}
		
		for (i = 0; i < count.length; i++) {
			if (count[i] == 1) {
				highCard++;
			}
		}
		
		if (highCard > 0) {
			return true;
		}
		
		return false;
	}
	
	function highCardValue(inputArr) {
		
		var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var currCard;
		var topValue;
		
		for (i = 0; i < inputArr.length; i++) {
			currCard = inputArr[i];
			count[currCard-2]++;
		}
		
		for (i = 0; i < count.length; i++) {
			if (count[i] == 1) {
				topValue = i + 2;
			}
		}
		
		return topValue;
	}
	
	function isPair(inputArr) {

		var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var currCard;
		var pair = 0;
	
		for (i = 0; i < inputArr.length; i++) {
			currCard = inputArr[i];
			count[currCard-2]++;   
			
			/*if (currCard == 3 || currCard == 9) {     //3 and 9 are wild so if they are drawn just increase every part of the array
				for (j = 0; j < count.length; j++) {
					count[j]++;
				}
			}
		
			else {
				count[currCard-2]++;
			}*/
		}							
								
		/*console.log(count);	currCard can only take values 2 or greater
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
			count[currCard-2]++;
		
			/*if (currCard == 3 || currCard == 9) {     //3 and 9 are wild so if they are drawn just increase
				for (j = 0; j < count.length; j++) {
					count[j]++;
				}
			}
		
			else {
				count[currCard-2]++;
			}*/
		}							
	
		for (i = 0; i < count.length; i++) {
			if (count[i] == 2) {
				topValue = i + 2;
			}
		}
			
		return topValue;
	}
	
	function isTwoPair(inputArr) {

		var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var currCard;
		var pair = 0;
	
		for (i = 0; i < inputArr.length; i++) {
			currCard = inputArr[i];
			count[currCard-2]++;
		
			/*if (currCard == 3 || currCard == 9) {
			
				for (j = 0; j < inputArr.length; j++) {
					count[j]++;
				}
			}
		
			else {
				count[currCard-2]++; //currCard can't be less than 2
			}*/
		}							 //so we need to subtract 2 so that the "card" 2
								 //increments the first element of array count
	
		for (i = 0; i < count.length; i++) {
			if (count[i] >= 2) {
				pair++;
			}
		}
	
		if (pair >= 2) {
			return true;
		}
	
		return false;
	}
	
	function isThreeOfAKind(inputArr) {
 	
		var count = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  		var currCard;
		var countOfThrees = 0;
  
  		for (i=0; i<inputArr.length; i++) {
   			currCard = inputArr[i];
			count[currCard-2]++;
    
			/*if (currCard == 3 || currCard == 9) {
				for (j = 0; j < count.length; j++) {
					count[j]++;
				}
			}
	
			else {
				count[currCard-2]++;
			}*/
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
			count[currCard-2]++;  
		
			/*if (currCard == 3 || currCard == 9) {     //3 and 9 are wild so if they are drawn just increase
				for (j = 0; j < count.length; j++) {
					count[j]++;
				}
			}
		
			else {
				count[currCard-2]++;
			}*/
		}							
	
		for (i = 0; i < count.length; i++) {
			if (count[i] == 3) {
				topValue = i + 2;
			}
		}
		
		return topValue;
	}
	
	function isStraight(inputArr) {
  
		// starts at 1 since a single card is always in series with itself
  		var numInSeries = 1;
  		var prevCard = inputArr[0];
  		var currCard;
  
		for (var i = 1; i < inputArr.length; i++) {
    	
			// we are starting at 2nd card since first card is preloaded into prevCard
    		currCard = inputArr[i];
    
			if(currCard == prevCard + 1) {
      
				numInSeries++;
      			if(numInSeries == 5) {
        			return true;
      			}
    		}
    
			else if (currCard == prevCard) {
    		}
    	
			else {
			numInSeries = 1;
			}
    		prevCard = currCard;
  		}
  
		return false;
	}
	
	function isFlush(inputArr) {
	
		var count = [0, 0, 0, 0];
		var currCard;
		var flush = 0;
	
		for (i = 0; i < inputArr.length; i++) {
			currCard = inputArr[i];
		
			if (currCard == "H") {
				count[0]++;
			}
		
			else if (currCard == "D") {
				count[1]++;
			}
		
			else if (currCard == "C") {
				count[2]++;
			}
		
			else {
				count[3]++;
			}
		}
	
		for (i = 0; i < count.length; i++) {
			if (count[i] == 5) {
				flush++;
			}
		}
	
		if (flush >= 1) {
			return true;
		}
	
		return false;
	}
	
	function isFourOfAKind(inputArr) {
		var count = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  		var currCard;
  
		for (i=0; i<inputArr.length; i++) {
   			currCard = inputArr[i];
			count[currCard-2]++;

			/*if (currCard == 3 || currCard == 9) {
				for (j = 0; j < count.length; j++) {
					count[j]++;
				}
			}
	
			else {
    			count[currCard-2]++;
			}*/  
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
			count[currCard-2]++;
		
			/*if (currCard == 3 || currCard == 9) {     //3 and 9 are wild so if they are drawn just increase
				for (j = 0; j < count.length; j++) {
					count[j]++;
				}
			}
		
			else {
				count[currCard-2]++;
			}*/
		}							
	
		for (i = 0; i < count.length; i++) {
			if (count[i] >= 4) {
				topValue = i + 2;
			}
		}
		
		return topValue;
	}
	
	function bestPokerHand() {												//bestPokerHand tests for multiple poker hands
		var testArr = this.values();
		var testArr2 = this.suits();
		var topValue;														//and determines what your best hand is
																			//and only prints that hand
		if(isFourOfAKind(testArr)) {
			topValue = highestValueFour(testArr);
			console.log("You have four " + topValue + "s! " + testArr);
			return 8;
		}
		
		else if(isFlush(testArr2)) {
			console.log("You have a flush! " + testArr);
			return 6;
		}
		
		else if(isStraight(testArr)) {
			console.log("You have a straight! " + testArr);
			return 5;
		}
	
		else if(isThreeOfAKind(testArr)) {
			topValue = highestValueThree(testArr);
   			console.log("You have three " + topValue + "s! " + testArr);
			return 4;
  		}

		else if(isTwoPair(testArr)) {
			//topValue =
			console.log("You have two pair! " + testArr);
			return 3;
		}

		else if(isPair(testArr)) {
			topValue = highestValuePair(testArr);
   			console.log("You have a pair of " + topValue + "s! " + testArr);
			return 2;
  		}

		else if(highCard(testArr)) {
			topValue = highCardValue(testArr);
			console.log("You have " + topValue + " high! " + testArr);
			return 1;
		}
		
		else {
			return 0;
		}
	}
	
	function bestPokerHandValue() {											//bestPokerHandValue tests for multiple poker hands
		var testArr = this.values();										//and just returns a value associated to each hand
		var testArr2 = this.suits();										//it does not print anything
		var topValue;														
																			
		if(isFourOfAKind(testArr)) {
			topValue = highestValueFour(testArr);
			return 8;
		}
		
		else if(isFlush(testArr2)) {
			//topValue =
			return 6;
		}
		
		else if(isStraight(testArr)) {
			//topValue =
			return 5;
		}
	
		else if(isThreeOfAKind(testArr)) {
			topValue = highestValueThree(testArr);
			return 4;
  		}

		else if(isTwoPair(testArr)) {
			//topValue = 
			return 3;
		}

		else if(isPair(testArr)) {
			topValue = highestValuePair(testArr);
			return 2;
  		}

		else if(highCard(testArr)) {
			topValue = highCardValue(testArr);
			return 1;
		}
		
		else {
			return 0;
		}
	}
	
	function bestTopCard() {												//bestPokerHand tests for multiple poker hands
		var testArr = this.values();
		var testArr2 = this.suits();
		var topValue;														//and determines what your best hand is
																			//and only prints that hand
		if(isFourOfAKind(testArr)) {
			topValue = highestValueFour(testArr);
		}
		
		/*else if(isFlush(testArr2)) {
		}
		
		else if(isStraight(testArr)) {
		}*/
	
		else if(isThreeOfAKind(testArr)) {
			topValue = highestValueThree(testArr);
  		}

		/*else if(isTwoPair(testArr)) {
			//topValue =
		}*/

		else if(isPair(testArr)) {
			topValue = highestValuePair(testArr);
  		}

		else if(highCard(testArr)) {
			topValue = highCardValue(testArr);
		}
		
		else {
			return 0;
		}
		
		return topValue;
	}
}

module.exports = Hand;