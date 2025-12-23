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

            let ans = eval(`${a} ${token} ${b}`);

            if (token === '/') {
                ans = Math.trunc(ans);
            }

            stack.push(ans);
        } else {
            stack.push(+tokens[i]);
        }
    }

    return stack.pop();
};