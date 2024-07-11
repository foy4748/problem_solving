const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

var addTwoPromises = async function (promise1, promise2) {
	let sum = 0;
	return Promise.all([promise1, promise2])
		.then(responses => {
			console.log(responses)
			responses.forEach((itm) => {
				sum += itm
			})
			return new Promise(resolve => resolve(sum))
		})

};

