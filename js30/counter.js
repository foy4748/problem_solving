var createCounter = function (n) {
	let count = n;
	return function () {
		return count++;
	};
};


let counter = createCounter(10)
console.log(counter())
console.log(counter())
