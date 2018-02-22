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

function testTwoPair(inputArr) {
	
	if (isTwoPair(inputArr)) {
		console.log("You have two pair! " + inputArr);
	}
	
	else {
		console.log("You do not have two pair.");
	}
}


function highestValueTwoPair(inputArr) {
	
	var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var currCard;
	var pair = 0;
	var topValue;
	
	for (i = 0; i < inputArr.length; i++) {
		currCard = inputArr[i];
		count[currCard-2]++;   //way it was before
		
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
		if (count[i] >= 2) {
			topValue = i + 2;
		}
	}
	var valueString = valueToString(topValue);
	return valueString;
}

function nextValueTwoPair(inputArr) {
	
	var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var currCard;
	var pair = 0;
	var topValue;
	
	for (i = 0; i < inputArr.length; i++) {
		currCard = inputArr[i];
		count[currCard-2]++;
		
		/*if(currCard == 3 || currCard == 9) {
			for (j = 0; j < count.length; j++) {
				count[j]++;
			}
		}
		
		else {
			count[currCard-2]++;
		}*/
	}
	
	for (i = 0; i < count.length; i++) {
		if (count[i] >= 2) {
			topValue = i + 2;
		}
	}
	
	var valueString = valueToString(topValue);
	return valueString;
}


var test1 = [2,2,3,3];
var test2 = [2,2,5,6];
var test3 = [2,2,2,3,3];
var test4 = [1,2,3,4,5];

testTwoPair(test1);
testTwoPair(test2);
testTwoPair(test3);
testTwoPair(test4);
//you copied the function again...you're trying to make it recognize the highest pair and then use that
//to find the next highest pair...this can be used in your testTwoPair function.