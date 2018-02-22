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

function testHighCard(testArr) {
	
	if (highCard(testArr)) {
		console.log("You have a high card!");
	}
	
	else {
		console.log("You do not have a high card");
	}
}


var test1 = [1,2,3,4];
var test2 = [5];
var test3 = [2,2];
var test4 = [3,8,12];

testHighCard(test1);
testHighCard(test2);
testHighCard(test3);
testHighCard(test4);