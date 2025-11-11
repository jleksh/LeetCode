/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = num.toString();
    let newNumber = 0;
    for (let i = 0; i < num.length; i++) {
        newNumber += Number(num[i]);
    }
    if (newNumber.toString().length === 1) {
        return newNumber;
    }
    return addDigits(newNumber);
};