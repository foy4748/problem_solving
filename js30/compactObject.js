var compactObject = function (obj) {
	if (!obj) return;

	if (Array.isArray(obj)) {
		obj = obj.filter(Boolean)
	}


	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] == 'object') {
			if (Array.isArray(obj[key])) {
				obj[key] = compactObject(obj[key])
			} else {
				if (Object.keys(obj).length == 0)
					delete obj[key]
			}
		}

		if (!obj[key]) {
			delete obj[key]
		}

	})


	return obj;
};

//const testCase = {"a": null, "b": [false, 1]}
//const testCase = {"a": 1, "b": 1, "c": null, "d": "false", "e": 0}
const testCase = [[[0]], true, false, {}, [], "", 42, 232, 4242, 942]
console.log(compactObject(testCase))
