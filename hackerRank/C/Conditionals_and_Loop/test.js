let n = 7;
for (let i = 1; i <= 2 * n - 1; i++) {
	console.log(n % (i <= 7 ? i : i - 7));
}
