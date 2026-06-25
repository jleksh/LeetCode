/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {

    const helper = (arr, val) => {
        const len = arr.length;
        let result = 0;
        let balance = len + 1;

        const freq = new Array(2 * len + 2).fill(0);
        const prefix = new Array(2 * len + 2).fill(0);

        freq[balance] = 1;
        prefix[balance] = 1;

        for (const x of arr) {
            balance += (x === val ? 1 : -1);

            freq[balance]++;
            prefix[balance] = prefix[balance - 1] + freq[balance];

            result += prefix[balance - 1];
        }

        return result;
    };

    return helper(nums, target);
};