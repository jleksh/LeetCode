/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            // add '(' only if it's NOT an outermost one
            if (stack.length > 0) {
                ans += s[i];
            }
            stack.push('(');
        } else {
            stack.pop();
            // add ')' only if it's NOT an outermost one
            if (stack.length > 0) {
                ans += s[i];
            }
        }
    }
    return ans;
};
