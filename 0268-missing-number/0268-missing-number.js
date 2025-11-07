/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length;
    let totalSum = (n *(n + 1)) / 2;
    let partialSum = 0;


    for (let i = 0; i < n; i++) {
        partialSum = partialSum + nums[i];
    }


    return totalSum-partialSum;

}
    let nums = [ 1, 4, 2, 0, 5]; 
    let result = missingNumber(nums);
    console.log(result); 