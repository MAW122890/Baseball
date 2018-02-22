function isPair(inputArr) {

	var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var currCard;
	var pair = 0;
	
	for (i = 0; i < inputArr.length; i++) {
		currCard = inputArr[i];
		//count[currCard-2]++;   way it was before
		
		if (currCard == 3 || currCard == 9) {     //3 and 9 are wild so if they are drawn just increase every part of the array
			for (j = 0; j < count.length; j++) {
				count[j]++;
			}
		}
		
		else {
			count[currCard-2]++;
		}
	}							
								
	/*console.log(count);			currCard can only take values 2 or greater
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
		if (count[i] == 2) {
			topValue = i + 2;
		}
	}
			
	var valueString = valueToString(topValue);
	return valueString;
}