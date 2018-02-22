function Card(value, suit) {  //constructor for building cards
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
		
		return (value + " of " + suit);
	}
}

module.exports = Card;


