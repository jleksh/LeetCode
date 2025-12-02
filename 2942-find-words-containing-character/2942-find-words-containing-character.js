/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    //add empty result array
    let res= [];
   // iterate through array& check if the target element
   //if present, return index to res array
    for(let i=0; i<words.length;i++){
        if(words[i].includes(x)){
            res.push(i);
        }
    }
    return res;
    
};