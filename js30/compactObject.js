var compactObject = function (obj) {
	if (Array.isArray(obj)) {
		return obj.filter((item, idx) => {
			if (Array.isArray(item)) {
				obj[idx] = compactObject(item);
				return true;
			}
			return !!(item);
		})
	}

	Object.keys(obj).forEach((key) => {
		if (!Boolean(obj[key])) {
			delete obj[key]
		}
		if (Array.isArray(obj[key]))
			obj[key] = compactObject(obj[key])
	})
	return obj;
};

const testCase = [null, 0, 5, [0], [false, 16]]
console.log(compactObject(testCase))
