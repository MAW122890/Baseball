function isFullHouse(inputArr) {

	return ((isPair(inputArr)) && (isThreeOfAKind(inputArr)));

}

function testFullHouse(testArr) {
	
	if (isFullHouse(testArr)) {
		console.log("You have a Full House! " + testArr);
	}
	else {
		console.log("You do not have a Full House. " + testArr);
	}
}