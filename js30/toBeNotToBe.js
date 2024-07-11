var expect = function (val) {
	return {
		toBe: (val2) => {
			if (val === val2) {
				return true
			} else {
				throw new Error('Not Equal')
			}
		},

		notToBe: (val3) => {
			if (val !== val3) {
				return true
			} else {
				throw new Error('Equal')
			}

		}
	}
};


