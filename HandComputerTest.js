function HandComputer() {
	
	this.betterHand = betterHand;
	this.betterHandLog = betterHandLog;
	
	function betterHand(hand1, hand2, handOneDrewLast) {
		var handOneValue = hand1.bestPokerHandValue();
		var handTwoValue = hand2.bestPokerHandValue();
		var handOneTopCard = hand1.bestTopCard();
		var handTwoTopCard = hand2.bestTopCard();
			
		if (handOneValue > handTwoValue) {
			return true;
		}
		
		else if (handOneValue < handTwoValue) {
			return false;
		}
		
		else {
			if (handOneTopCard >= handTwoTopCard) {
				return true;
			}
			
			else {
				return false;
			}
		}			
	}
	
	function betterHandLog(hand1, hand2) {
		var handOneValue = hand1.bestPokerHandValue();
		var handTwoValue = hand2.bestPokerHandValue();
	
		if (handOneValue > handTwoValue) {
			console.log("Player 1 wins");
			//return true;
		}
	
		else if (handTwoValue > handOneValue) {
			console.log("Player 2 wins.");
			//return false;
		}
		
		else {
			console.log("You have tied!");
		}
	}
}

module.exports = HandComputer;