function isFlush(inputArr) {
	
	var count = [0, 0, 0, 0];
	var currCard;
	var flush = 0;
	
	for (i = 0; i < inputArr.length; i++) {
		currCard = inputArr[i];
		
		if (currCard == "Hearts") {
			count[0]++;
		}
		
		else if (currCard == "Diamonds") {
			count[1]++;
		}
		
		else if (currCard == "Clubs") {
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

function testFlush(testArr) {
	
	if(isFlush(testArr)){
    
		console.log("Found a flush in array: " + testArr);
  	} 
	
	else {
    	console.log("No flush found in array: " + testArr);
  	}
}

var test1 = ["Hearts", "Hearts", "Hearts", "Hearts", "Hearts"];
var test2 = ["Spades", "Clubs"];
var test3 = ["Spades", "Clubs", "Hearts", "Spades", "Spades", "Spades", "Spades"];

testFlush(test1);
testFlush(test2);
testFlush(test3);