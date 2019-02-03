// 链表节点类
class Node {
    constructor(item) {
        this.elem = item;
        this.next = null;
        this.prev = null;
    }
}

// 双向链表类
class DoubleLinkList {
    constructor(node = null) {
        this.head = node;
        this.len = 0;
    }

    // 判断链表是否为空
    get is_empty() {
        return this.head === null
    }

    // 返回链表长度
    get size() {
        return this.len
    }

    // 遍历整个链表
    travel() {
        const list = [];
        let current = this.head;
        while (current !== null) {
            list.push(current.elem);
            current = current.next;
        }
        console.log(list);
    }

    // 头插
    add(item) {
        // 创建节点
        const node = new Node(item);
        // 判断是否为空链表
        if (this.is_empty) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
            node.next.prev = node;
        }
        this.len += 1;
    }

    // 尾插
    append(item) {
        // 创建节点
        const node = new Node(item);
        // 判断是否为空链表
        if (this.is_empty) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
        }
        this.len += 1;
    }

    // 任意位置插入节点
    insert(pos, item) {
        // 先判断插入的位置，小于零就头插，大于长度就尾插
        if (pos < 0) {
            this.add(item);
        } else if (pos > (this.size - 1)) {
            this.append(item);
        } else {
            // 创建节点
            const node = new Node(item);
            let current = this.head;
            let count = 0;
            while (count < pos) {
                count += 1;
                current = current.next;
            }
            node.next = current;
            node.prev = current.prev;
            current.prev.next = node;
            current.pre = node;
            this.len += 1;
        }
    }

    // 删除节点
    remove(item) {
        if (this.is_empty) {
            return
        }
        let current = this.head;
        // 移动指针并进行判断
        while (current !== null) {
            if (item === current.elem) {
                // 判断是否为头节点
                if (current === this.head) {
                    this.head = current.next;
                    if (current.next == null) { // 如果只有一个节点
                        current.next.prev = null;
                    }
                    break
                } else {
                    current.prev.next = current.next;
                    if (current.next) { //如果不是尾节点
                        current.next.prev = current.prev;
                    }
                    break
                }
            } else {
                current = current.next
            }
        }
        this.len -= 1;
    }

    // 搜索节点
    search(item) {
        let current = this.head;
        while (current !== null) {
            if (item === current.elem) {
                return true
            } else {
                current = current.next;
            }
        }
        return false
    }
}

// 测试用例
const dll = new DoubleLinkList();
dll.remove(0);
console.log(dll.size);
console.log(dll.is_empty);
dll.append(1);
dll.append(2);
dll.append(3);
dll.add(0);
dll.remove(2);
dll.insert(4, 4);
console.log(dll.search(0));
dll.travel();