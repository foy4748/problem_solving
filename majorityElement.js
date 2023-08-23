// https://leetcode.com/problems/majority-element/solutions/3109595/100-faster-c-with-explanation-o-1-space/
var majorityElement = function (nums) {
	// Populating Store 
	// Detecting > n / 2
	let count = 0
	let elm = nums[0]
	for (let num of nums) {
		if (num != elm) elm = num;

		count += elm == num ? 1 : -1;
	}

	return elm

};

const testCases = [
	{
		input: [2, 2, 1, 1, 1, 2, 2],
		output: 2
	},
	{
		input: [3, 2, 3],
		output: 3
	}
]

testCases.forEach((c, idx) => {
	console.log(`Case ${idx + 1}`)
	console.log(majorityElement(c.input))
})
