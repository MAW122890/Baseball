var array = [4,7,9,3,0,4];

var bestHand = 0;
var currHand = 1;
var temp;


for (i = 0; i < array.length; i++) {
	
	if (array[bestHand] > array[currHand]) {
		array[currHand]++;
	}
	
	else if (array[bestHand] < array[currHand]) {
		temp = currHand;
		currHand = bestHand;
		bestHand = temp;
	}
		
			