/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let zeros = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) zeros++;
    }

    for (let i = n - 1; i >= 0; i--) {
        if (i + zeros < n) {
            arr[i + zeros] = arr[i];
        }

        if (arr[i] === 0) {
            zeros--;
            if (i + zeros < n) {
                arr[i + zeros] = 0;
            }
        }
    }
};