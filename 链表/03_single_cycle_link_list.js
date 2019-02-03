// 链表节点类
class Node {
    constructor(item) {
        this.next = null;
        this.elem = item;
    }
}

// 循环单链表
class SingleCycleLinkList {
    constructor(node = null) {
        this.head = node;
        this.len = 0;
        if (node) {
            node.next = node
        }
    }

    // 判断链表是否为空
    get is_empty() {
        return this.head === null;
    }

    // 返回链表长度
    get size() {
        return this.len;
    }

    // 头插
    add(item) {
        // 创建节点
        const node = new Node(item);
        // 判空
        if (this.is_empty) {
            this.head = node;
            node.next = node;
        } else { // 否者进行头插，其实就是
            node.next = this.head;
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            this.head = node;
            current.next = this.head;
        }
        this.len++;
    }

    // 尾插
    append(item) {
        // 创建节点
        const node = new Node(item);
        // 判空
        if (this.is_empty) {
            this.head = node;
            node.next = node;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            node.next = this.head;
            current.next = node;
        }
        this.len++;
    }

    // 任意位置插入
    insert(pos, item) {
        if (pos < 0) {
            this.add(item);
        } else if (pos > (this.size - 1)) {
            this.append(item)
        } else {
            const node = new Node(item);
            let pre = this.head;
            let count = 0;
            while (count < (pos - 1)) {
                pre = pre.next;
                count++;
            }
            node.next = pre.next;
            pre.next = node;
            this.len++;
        }
    }

    // 删除元素
    remove(item) {
        if (this.is_empty) {
            return
        }
        let current = this.head;
        let pre = null;
        while (current.next !== null) {
            if (item === current.elem) {
                if (pre === null) { // 判断是否头节点
                    let rear = this.head;
                    while (rear.next !== this.head) {
                        rear = rear.next;
                    }
                    rear.next = current.next;
                    this.head = current.next;
                    return
                } else {
                    pre.next = current.next;
                    return
                }
            } else {
                pre = current;
                current = current.next;
            }
        }
        if (current.elem === item) {
            if (pre === null) { //  避免只有一个节点的情况
                this.head = null;
            } else {
                pre.next = current.next;
            }
        }
        this.len--;
    }

    // 搜索元素
    search(item) {
        if (this.is_empty) {
            return false;
        }
        let current = this.head;
        while (current.next !== this.head) {
            if (item === current.elem) {
                return true;
            } else {
                current = current.next;
            }
        }
        return item === current.elem;
    }

    // 打印链表
    travel() {
        const list = [];
        if (this.is_empty) {
            console.log(list);
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                list.push(current.elem);
                current = current.next;
            }
            // 退出循环时，会漏掉尾节点，这里追加进去
            list.push(current.elem);
            console.log(list);
        }
    }
}

// 测试用例
const cll = new SingleCycleLinkList();
console.log(cll.is_empty);
console.log(cll.size);
cll.add(1);
cll.add(2);
cll.add(3);
cll.add(4);
cll.travel();
cll.remove(4);
cll.travel();
console.log(cll.search(3));
console.log(cll.search(4));
cll.insert(2, 3);
cll.travel();