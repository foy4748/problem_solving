Array.prototype.last = function () {
	let lastIdx = this.length - 1;
	return lastIdx >= 0 ? this[lastIdx] : lastIdx;
};

const test = [1, 2, 2]
console.log(test.last())
