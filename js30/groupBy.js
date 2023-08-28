Array.prototype.groupBy = function (fn) {
	const cache = {}
	for (let item of this) {
		const key = fn(item);
		if (!cache[key] && key !== 0) {
			cache[key] = [item]
		} else {
			cache[key].push(item)
		}
	}
	return cache
};

const testArray = [
	{"id": "1"},
	{"id": "1"},
	{"id": "2"}
]
const testFn = function (item) {
	return item.id;
}

const result = testArray.groupBy(testFn)
console.log(result)
