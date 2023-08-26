var debounce = function (fn, t) {
	let tracer;
	return function (...args) {
		clearTimeout(tracer);
		tracer = setTimeout(() => {
			fn(...args)
		}, t)
	}
};
