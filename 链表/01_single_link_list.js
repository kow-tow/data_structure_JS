// 链表节点类
class Node {
    constructor(elem) {
        this.elem = elem;
        this.next = null;
    }
}

// 单链表类
class SingleLinkList {
    constructor() {
        this.head = null;
        this.len = 0;
    }

    // 判断链表是否为空
    is_empty() {
        return this.head === null
    }

    // 链表的长度
    length() {
        return this.len
    }

    // 遍历整个链表
    travel() {
        let current = this.head;
        let ary = [];
        while (current !== null) { // 游标向后移动，直到尾节点
            ary.push(current.elem);
            current = current.next;
        }
        return ary;
    }

    // 链表的头插
    add(item) {
        // 创建节点
        const node = new Node(item);
        // 修改指针，插入节点
        node.next = this.head;
        this.head = node;
        this.len++;
    }

    // 链表的尾插
    append(item) {
        // 创建节点
        const node = new Node(item);
        // 修改指针，插入节点
        if (this.is_empty()) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.len++;
    }

    // 链表的任意节点插入
    insert(pos, item) {
        // 若传入pos小于0就认为进行头插
        if (pos < 0) {
            this.add(item);
        }
        // 若传入pos大于最大长度就认为进行尾插
        else if (pos < (this.length() - 1)) {
            this.append(item);
        } else {
            // 创建节点
            const node = new Node(item);
            let pre = this.head;
            let count = 0;
            while (count < (pos - 1)) {
                pre = pre.next;
                count++;
            }
            node.next = pre.next;
            pre.next = node;
        }
        this.len++;
    }

    // 链表的删除
    remove(item) {
        // 两个游标，一个在前一个在后以定位删除的元素
        let current = this.head;
        let pre = null;
        while (current !== null) {
            if (current.elem === item) {
                // 判断是否头节点
                if (pre === null) {
                    this.head = current.next;
                    break
                } else {
                    pre.next = current.next;
                    break
                }
            } else {
                pre = current;
                current = current.next;
            }
        }
        this.len--;
    }

    // 链表的搜索，若存在该元素，返回true，不存在返回false
    search(item) {
        let current = this.head;
        while (current !== null) {
            if (current.elem === item) {
                return true
            } else {
                current = current.next;
            }
        }
        return false
    }
}


// 创建链表
let ll = new SingleLinkList();
ll.append(1);
ll.append(3);
console.log(ll.length());
ll.insert(1, 2);
ll.remove(3);
console.log(ll.is_empty());
console.log(ll.length());
console.log(ll.travel());
console.log(ll.length());
console.log(ll.search(1));
console.log(ll.search(4));