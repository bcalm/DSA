/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];

    for (const token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            const b = stack.pop();
            const a = stack.pop();
            if (token === "+") {
                stack.push(a + b);
            }
            if (token === "-") {
                stack.push(a - b);
            }
            if (token === "*") {
                stack.push(a * b);
            }
            if (token === "/") {
                stack.push(Math.trunc(a / b));
            }
        } else {
            stack.push(+token);
        }
    }
    return stack.pop();
};
