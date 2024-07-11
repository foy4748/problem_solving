var compose = function (functions) {

	return function (x) {
		let acc = null;
		const lastIdx = functions.length - 1

		for (let i = lastIdx; i >= 0; i--) {
			if (i == lastIdx) {
				acc = functions[i](x)
			} else {
				acc = functions[i](acc)
			}
		}

		return functions.length ? acc : x
	}
};

//const test = [x => x + 1, x => x * x, x => 2 * x]
const test = []
// const acc = (x) => test[0](test[1](test[2](x)))
// console.log(acc(4))

const fn = compose(test);
console.log(fn(4))
