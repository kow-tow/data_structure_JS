// 队列
class Queue {
    constructor() {
        this.list = []
    }

    // 入队
    enqueue(item) {
        this.list.push(item);
    }

    // 出队
    dequeue() {
        return this.list.shift();
    }

    // 返回队头元素
    front() {
        return this.list[0]
    }

    // 队列长度
    get size() {
        return this.list.length
    }

    // 清空队列
    clear() {
        this.list = []
    }

    // 队列判空
    get is_empty() {
        return !this.list.length
    }

    // 打印队列
    print() {
        console.log(this.list.toString());
    }
}

const queue = new Queue();
console.log(queue.is_empty); // true

queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');
console.log(queue.size); // 3
console.log(queue.is_empty); // false
queue.dequeue();
queue.dequeue();
queue.print(); // 'Camila'