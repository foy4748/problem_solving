var isPalindrome = function (x) {
	const input = x.toString();
	let leftPointer = 0;
	let rightPointer = input.length - 1;
	console.log(leftPointer, rightPointer)

	while (leftPointer < rightPointer) {
		if (input[leftPointer] == input[rightPointer]) {
			leftPointer++;
			rightPointer--;
		} else {
			return false;
		}
	}

	return true;
};

console.log(isPalindrome(10))
