function memoize(fn) {
	const memo = new Map();
	memo.set('Count', 0);
	return function (...args) {
		if (args.length < 1) {
			return memo.get('Count');
		}
		const key = JSON.stringify(args);
		const val = memo.get(key);

		if (val !== 0 || !val) {
			const newVal = fn(...args);
			memo.set(key, newVal);
			return newVal;
		}
		memo.set('Count', memo.get('Count') + 1)
		return val;
	}
}

