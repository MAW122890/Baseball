var test = [5, 2, 8, 6, 13, 14, 32, 6, 5, 14, 100, 56];

console.log(test);

for (i = 0; i < test.length - 1; i++) {
	
	for (j = i + 1; j < test.length; j++) {
	
		if (test[i] > test[j]) {
			var temp = test[i];
            test[i] = test[j];
            test[j] = temp;
        }
	}
}

console.log(test);