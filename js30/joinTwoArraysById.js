// Binary Search ----------------------------
//-----------------------------------------
var binarySearch = function (arr, target) {
	return function bs(arr, target, left = 0, right = arr.length - 1) {
		let mid = Math.floor(((right + left) / 2));

		if (left > right) {
			return -1;
		}

		if (arr[mid].id == target) {
			return mid;
		}

		if (arr[mid].id > target) {
			return bs(arr, target, left, mid - 1);
		} else {
			return bs(arr, target, mid + 1, right);
		}

	}(arr, target)

}

// Merge Sort ----------------------------
//-----------------------------------------
function merge(arr, l, m, r) {
	var n1 = m - l + 1;
	var n2 = r - m;

	// Create temp arrays
	var L = new Array(n1);
	var R = new Array(n2);

	// Copy data to temp arrays L[] and R[]
	for (var i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (var j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	// Merge the temp arrays back into arr[l..r]

	// Initial index of first subarray
	var i = 0;

	// Initial index of second subarray
	var j = 0;

	// Initial index of merged subarray
	var k = l;

	while (i < n1 && j < n2) {
		if (L[i].id <= R[j].id) {
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	// Copy the remaining elements of
	// L[], if there are any
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}

	// Copy the remaining elements of
	// R[], if there are any
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted
function mergeSort(arr) {
	function mS(arr, l, r) {
		if (l >= r) {
			return;
		}
		let m = l + parseInt((r - l) / 2);
		mS(arr, l, m);
		mS(arr, m + 1, r);
		merge(arr, l, m, r);
	}

	mS(arr, 0, arr.length - 1)
}
//-----------------------------------------

var join = function (arr1, arr2) {
	const filtered_arr2 = arr2.filter((item) => {
		let foundInArr1 = binarySearch(arr1, item.id)
		if (foundInArr1 !== -1) {
			arr1[foundInArr1] = {...arr1[foundInArr1], ...item}
			return false;
		}
		return true;
	})

	const result = [...arr1, ...filtered_arr2]
	mergeSort(result)
	return result
};


const arr1 = [{"id": 1, "x": 36, "d": 26, "f": 35}, {"id": 3, "c": 20, "z": 75}]
const arr2 = [{"id": 2, "o": 48, "z": 84, "y": 61}]

const expected_output = ''

console.log(JSON.stringify(join(arr1, arr2)))
