function valueToString(x) {
	
	var topValueTranslated;
	
	switch(x) {
		case 11:
			topValueTranslated = "Jack";
			break;
		case 12:
			topValueTranslated = "Queen";
			break;
		case 13:
			topValueTranslated = "King";
			break;
		case 14:
			topValueTranslated = "Ace";
			break;
		default:
			topValueTranslated = x;
			break;
	}
	
	return topValueTranslated;
}

