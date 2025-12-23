/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];

        if (token === '+' || token === '-' || token === '*' || token === '/') {
            let b = Number(stack.pop());
            let a = Number(stack.pop());
            let ans;

            if (token === '+') ans = a + b;
            else if (token === '-') ans = a - b;
            else if (token === '*') ans = a * b;
            else ans = Math.trunc(a / b); // division rule

            stack.push(ans);
        } else {
            stack.push(+token);
        }
    }

    return stack.pop();
};