var removeDuplicates = function (nums) {
	const store = {}
	let k = 0;
	for (let i = 0; i < nums.length; i++) {
		if (!store[i]) {
			store[i] = 1
		}
	}

	return Object.keys(store).length
};

const testCases = [
	{
		input: [1, 1, 2],
		output: 2
	}
]

testCases.forEach((item) => {
	const result = removeDuplicates(item.input);
	console.log(item, result == item.output, result)
})
