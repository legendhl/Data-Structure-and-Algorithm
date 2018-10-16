class Stack {
    constructor() {
        this.ret = [];
    }
    push(item) {
        this.ret.push(item);
    }
    pop() {
        return this.ret.pop();
    }
    top() {
        const len = this.ret.length;
        if (len === 0) {
            return null;
        } else {
            return this.ret[len - 1];
        }
    }
    isEmpty() {
        return this.ret.length === 0;
    }
    output() {
        return this.ret.slice();
    }
}

module.exports = Stack;