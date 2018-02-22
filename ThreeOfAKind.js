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