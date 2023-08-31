var flat = function (arr, n) {
	const cache = []
	for (let i = 0; i < n; i++) {
		const previousSize = arr.length
		arr.forEach((item, idx) => {
			if (Array.isArray(item)) {
				cache.push(idx)
			}
		})
		cache.forEach((item) => {
			const offSet = arr.length - previousSize
			const deleted = arr.splice(item + offSet, 1);
			arr.splice(item + offSet, 0, ...deleted[0])
		})
		cache.length = 0;
	}
	return arr;
};

const testCases = [
	{

		input: {
			arr: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
			n: 0
		},
		output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],

	},
	{

		input: {
			arr: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
			n: 1
		},
		output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

	},
	{

		input: {
			arr: [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
			n: 2
		},
		output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


	}
]
testCases.forEach(({input, output}, idx) => {
	console.log(`Case #${idx + 1}`)
	console.log("INPUT\n", input.arr, input.n)
	console.log("OUTPUT\n", flat(input.arr, input.n))
	console.log("EXPECTED\n", output)
})
