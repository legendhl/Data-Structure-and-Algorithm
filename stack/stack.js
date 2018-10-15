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
    peek() {
        const len = this.ret.length;
        if (len === 0) {
            return null;
        } else {
            return this.ret[len - 1];
        }
    }
}

module.exports = Stack;