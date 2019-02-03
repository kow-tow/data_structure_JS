// 双端队列
class Deque {
    constructor() {
        this.list = []
    }

    // 队头添加元素
    add_front(item) {
        this.list.push(item);
    }

    // 队尾添加元素
    add_rear(item) {
        this.list.unshift(item);
    }

    // 队头删除元素
    remove_front() {
        return this.list.shift();
    }

    // 队尾删除元素
    remove_rear() {
        return this.list.pop();
    }

    // 判空
    get is_empty() {
        return !this.list.length;
    }

    // 长度
    get size() {
        return this.list.length;
    }

    // 清空
    clear() {
        this.list = [];
    }

    // 打印队列
    print() {
        console.log(this.list.toString());
    }
}