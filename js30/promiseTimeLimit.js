var timeLimit = function (fn, t) {
	return async function (...args) {
		return new Promise((resolve, reject) => {
			let trace = setTimeout(() => {
				reject("Time Limit Exceeded");
			}, t);

			fn(...args).then((res) => {
				clearTimeout(trace);
				resolve(res);
			}).catch(reject);
		});
	};
};

const testCases = [
	{
		input: {
			fn: async (n) => {
				await new Promise(res => setTimeout(res, 100));
				return n * n;
			},
			fnInput: 5,
			t: 50
		}
	},
	{
		input: {
			fn: async (n) => {
				await new Promise(res => setTimeout(res, 100));
				return n * n;
			},
			fnInput: 5,
			t: 150
		}
	},
	{
		input: {
			fn: async (n) => {
				await new Promise(res => setTimeout(res, 100));
				return n * n;
			},
			fnInput: 6,
			t: 170
		}
	},
	{

		input: {
			fn: async () => {throw "Error";},
			fnInput: null,
			t: 1000
		}
	}
]

testCases.forEach(({input}, idx) => {
	const trace = timeLimit(input.fn, input.t);
	trace(input.fnInput).then((res) => {
		console.log(res)
	}).catch((err) => {
		console.log(err)
	})
})
