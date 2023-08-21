var romanToInt = function (s) {
	const store = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	}

	let result = 0;

	for (let i = 0; i < s.length; i++) {
		const nextIdx = i + 1 > s.length - 1 ? NaN : i + 1;

		const logic1 = s[i] == 'I' && (s[nextIdx] == 'V' || s[nextIdx] == 'X');
		const logic2 = s[i] == 'X' && (s[nextIdx] == 'L' || s[nextIdx] == 'C');
		const logic3 = s[i] == 'C' && (s[nextIdx] == 'D' || s[nextIdx] == 'M');

		//console.log(logic1, logic2, logic3)
		if (logic1 || logic2 || logic3) {
			result += store[s[nextIdx]] - store[s[i]]
			i++;
			continue
		}
		result += store[s[i]]
	}

	return result;
};

const testCases = [
	{
		input: 'MCMXCIV',
		output: 1994
	},
	{
		input: 'LVIII',
		output: 58
	},
	{
		input: 'IX',
		output: 9
	},
	{
		input: 'III',
		output: 3
	},
	{
		input: 'XII',
		output: 12
	},
	{
		input: 'XXVII',
		output: 27
	},
]

testCases.forEach((item) => {
	console.log(item, romanToInt(item.input) == item.output, romanToInt(item.input))
})
