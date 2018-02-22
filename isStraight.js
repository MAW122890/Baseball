function isStraight(inputArr) {
  
	// starts at 1 since a single card is always in series with itself
  	var numInSeries = 1;
  	var prevCard = inputArr[0];
  	var currCard;
  
	for(var i = 1; i < inputArr.length; i++) {
    	
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

function testStraight(testArr) {
	
	if(isStraight(testArr)){
    
		console.log("Found a straight in array: " + testArr);
  	} 
	
	else {
    	console.log("No straight found in array: " + testArr);
  	}
}

var test1 = [2, 3, 4, 5, 6]; // straight
var test2 = [2, 4, 9, 10, 11]; // no straight
var test3 = [3, 4, 5, 6, 7, 10]; // more than 5 cards
var test4 = [3, 4, 5, 6]; // less than 5 cards
var test5 = [4, 5, 6, 7, 10]; // one less than straight
var test6 = [2, 3, 3, 4, 5, 6];
var test7 = [2, 3, 4, 5, 7, 8, 9];
var test8 = [];

testStraight(test1);
testStraight(test2);
testStraight(test3);
testStraight(test4);
testStraight(test5);
testStraight(test6);
testStraight(test7);
testStraight(test8);