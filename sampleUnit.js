function returnMax(transactionList) {
	var maxValue = 0;
	var max = "";
	for (var i = 0; i < transactionList.length; i++) {
		var obj = transactionList[i];
		if (transactionList[i]["value"] > maxValue) {
			maxValue = transactionList[i]["value"];
			max = transactionListList[i]["id"]; 
		}
	}
	return max;
}