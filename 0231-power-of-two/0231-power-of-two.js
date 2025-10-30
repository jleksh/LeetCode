/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;     
    while (n > 1) {               
        if (n % 2 !== 0) return false; // If remainder ≠ 0 → not power of 2
        n = n / 2;                // Divide by 2
    }
    return true;
};
