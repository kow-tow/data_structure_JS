// 队列
class Queue {
    constructor() {
        this.list = []
    }

    // 入栈
    push(item) {
        this.list.push(item)
    }

    // 出栈
    pop() {
        return this.list.pop()
    }

    // 返回栈顶元素
    get peek() {
        return this.list[this.list.length - 1]
    }

    // 判空
    get is_empty() {
        return !this.list.length
    }

    // 长度
    get size() {
        return this.list.length
    }

    // 清栈
    clear() {
        this.list = []
    }

    // 输出栈
    print() {
        console.log(this.list.toString());
    }
}

// 测试用例
const q = new Queue()
q.push(1);
q.push(2);
q.push(3);
console.log(q.is_empty);
console.log(q.size);
q.print();
q.clear();
console.log(q.is_empty);
console.log(q.size);