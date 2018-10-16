const Stack = require('./stack.js');

function isOperator(ch) {
    return '()+-*/'.includes(ch);
}
function getPrecedence(oper) {
    switch (oper) {
        case '(':
        case ')':
            return 3;
        case '*':
        case '/':
            return 2;
        case '+':
        case '-':
            return 1;
        default:
            return 0;
    }
}

// 中缀转后缀
function in2post(exp) {
    const operStack = new Stack();
    const ret = new Stack();

    for (let i = 0; i < exp.length;) {
        const ch = exp[i];
        if (isOperator(ch)) {
            if (ch === ')') {
                while (operStack.top() !== '(') {
                    ret.push(operStack.pop());
                }
                operStack.pop();
            } else if (operStack.isEmpty() || getPrecedence(ch) > getPrecedence(operStack.top()) || operStack.top() === '(') {
                operStack.push(ch);
            } else {
                ret.push(operStack.pop());
                continue;
            }
        } else {
            ret.push(ch);
        }
        i++;
    }
    while (!operStack.isEmpty()) {
        ret.push(operStack.pop());
    }
    return ret.output();
}
console.log(in2post('2+3*4')); // 2+3*4 => 2 3 4 * +
console.log(in2post('1*2+6/3')); // 1*2+6/3 => 1 2 * 6 3 / + 
console.log(in2post('1+(2-3)*4+5/5')); // 1+(2-3)*4+5/5 => 1 2 3 - 4 * + 5 5 / +

// 中缀转前缀
function in2prefix(exp) {
    const operStack = new Stack();
    const ret = new Stack();

    for (let i = exp.length - 1; i >= 0;) {
        const ch = exp[i];
        if (isOperator(ch)) {
            if (ch === '(') {
                while (operStack.top() !== ')') {
                    ret.push(operStack.pop());
                }
                operStack.pop();
            } else if (operStack.isEmpty() || getPrecedence(ch) >= getPrecedence(operStack.top()) || operStack.top() === ')') {
                operStack.push(ch);
            } else {
                ret.push(operStack.pop());
                continue;
            }
        } else {
            ret.push(ch);
        }
        i--;
    }
    while (!operStack.isEmpty()) {
        ret.push(operStack.pop());
    }
    return ret.output().reverse();
}
console.log(in2prefix('1+2+3')); // 1+2+3 => + + 1 2 3
console.log(in2prefix('1+(2-3)')); // 1+(2-3) => + 1 - 2 3 
console.log(in2prefix('1+(3-2)*4')); // 1+(3-2)*4 => + 1 * - 3 2 4
