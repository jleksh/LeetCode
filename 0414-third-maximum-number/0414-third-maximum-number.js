/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let unique = [];
    for (let i = 0; i < nums.length; i++) {
        if (!unique.includes(nums[i])) {
            unique.push(nums[i]);
        }
    }
    unique.sort((a, b) => b - a);
    if (unique.length >= 3) {
        return unique[2];
    } else {
        return unique[0];
    }
};