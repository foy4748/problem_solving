var join = function (arr1, arr2) {
	const joined = [...arr1, ...arr2];
	const cache = {};
	for (let i = 0; i < joined.length; i++) {
		let item = joined[i]
		//console.log(item)
		//console.log(i, cache[item.id])
		if (!cache[item.id] && cache[item.id] !== 0) {
			cache[item.id] = i;
		} else {
			joined[i] = {...joined[cache[item.id]], ...item}
			joined.splice(cache[item.id], 1)
			continue
		}
	}
	return joined.sort((a, b) => a.id - b.id > 0 ? 1 : -1);
};


const arr1 = [{"id": 1, "r": 67, "h": 83, "d": 2}, {"id": 2, "f": 84, "o": 46, "l": 7}]
const arr2 = [{"id": 1, "c": 70, "w": 1}]

console.log(join(arr1, arr2))
