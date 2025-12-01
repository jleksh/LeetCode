/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n= s.length - 1;
    let count=0;
    while (n>=0){
        if(s[n]!=0){
            ++count;
        }
        else if(count>0){
            break;
        }
        --n;
    }
    return count;  
};