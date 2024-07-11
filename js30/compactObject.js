var compactObject = function (obj) {
	if (!obj) return;

	if (Array.isArray(obj)) {
		obj = obj.filter(Boolean)
	}


	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] == 'object') {
			if (Array.isArray(obj[key]) && !Object.is(obj[key], null)) {
				obj[key] = compactObject(obj[key])
			} else {
				if (Object.keys(obj).length == 0) {
					delete obj[key]
				} else {
					compactObject(obj[key])
				}
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
//const testCase = [[[0]], true, false, {}, [], "", 42, 232, 4242, 942]
const testCase = {"o": 11, "a": 68, "m": 18, "v": true, "b": false, "h": null, "r": false, "p": 93, "l": true, "k": "", "n": 79, "f": 18, "u": null, "j": null, "e": null, "z": {"d": true, "t": null, "o": 21, "w": null, "m": 82, "k": 35, "l": 26, "r": 45, "b": false, "z": 0, "i": null, "c": 33, "p": 69, "j": 27, "e": 53, "q": 97, "h": true, "a": true, "n": true, "f": 73, "u": null}, "w": 12, "y": 0, "q": "", "t": null, "s": true, "x": false, "c": true, "i": false, "g": 29}
console.log(compactObject(testCase))
