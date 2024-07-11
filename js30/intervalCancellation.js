var cancellable = function (fn, args, t) {
	fn(...args);
	let trace = setInterval(() => {
		fn(...args)
	}, t)

	return function () {
		clearInterval(trace)
	}
};
