var chunk = function (arr, size) {
	let newArr = []
	let numOfChunks = Math.ceil(arr.length / size);
	for (let i = 0; i < numOfChunks; i++) {
		newArr.push(arr.slice(i * size, i + size))
	}
	return newArr;
};

console.log(chunk([1, 9, 6, 3, 2], 3))
