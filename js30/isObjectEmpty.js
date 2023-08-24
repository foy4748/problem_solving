var isEmpty = function (obj) {
	const isArr = Array.isArray(obj);
	const logic1 = !isArr && Object.keys(obj).length == 0;
	const logic2 = isArr && obj.length == 0;
	console.log(logic1, logic2)
	return logic1 || logic2;
};

const testCase = {"": ""}

console.log(isEmpty(testCase))
