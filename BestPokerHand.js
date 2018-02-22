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