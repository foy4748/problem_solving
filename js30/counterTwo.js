var createCounter = function (n) {
	let initial = n;
	let count = n;
	return {

		increament: () => {
			return ++count;
		},
		decreament: () => {
			return --count;
		},
		reset: () => {
			count = initial
			return count;
		}
	}
};

const counter = createCounter(5)
console.log(counter.increament())
console.log(counter.reset())
console.log(counter.decreament())
