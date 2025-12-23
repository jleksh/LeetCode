/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let i=0; i<tokens.length;i++){
        if(tokens[i]==='+'||tokens[i]==='-'||tokens[i]==='*'||tokens[i]==='/'){
            let b=stack.pop();
            let a=stack.pop();
            let ans=eval(`${a} ${tokens[i]} ${b}`);
            stack.push(Math.trunc(ans));
            }else{
                stack.push(tokens[i])
            }
        }
    return Number(stack.pop());

};