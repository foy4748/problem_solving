// Thanks to
/*
	https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/solutions/3616117/javascript-solution/?envType=study-plan-v2&envId=30-days-of-javascript
*/
var promiseAll = async function (functions) {
	return new Promise((resolve, reject) => {
		const results = []
		let functionsSize = functions.length
		functions.forEach((func, idx) => {
			func().then(res => {
				results[idx] = res;

				if (--functionsSize === 0)
					resolve(results)

			})
				.catch(reject)
		})
	})

};

