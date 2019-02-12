// 二叉树

// 树节点类
class Node {
    constructor(item) {
        this.elem = item;
        this.left_child = null;
        this.right_child = null;
    }
}

// 二叉树类
class Tree {
    constructor() {
        this.root = null; // 根节点
    }

    // 添加节点，采用广度遍历，找到最末节点，然后添加
    add(item) {
        const node = new Node(item); // 创建节点
        if (!this.root) {
            this.root = node;
        } else {
            let queue = [this.root]; // 先把根节点添加进去
            while (queue) { // 只要队列不为空，就说明有节点，就继续往下找
                let cur_node = queue.shift(); // 队列弹出当前节点（当做根节点往下遍历）
                if (!cur_node.left_child) { // 如果当前根节点的左子节点不存在就添加节点为左子节点
                    cur_node.left_child = node;
                    return;
                } else { // 左子节点若存在就把当前节点的左子节点放入队列
                    queue.push(cur_node.left_child);
                }
                if (!cur_node.right_child) {
                    cur_node.right_child = node;
                    return;
                } else {
                    queue.push(cur_node.right_child);
                }
            }
        }
    }

    // 广度遍历
    get breadth_travel() {
        if (!this.root) {
            return [];
        } else {
            let ary = [];
            let queue = [this.root];
            while (queue.length) {
                let cur_node = queue.shift();
                ary.push(cur_node.elem);
                if (cur_node.left_child) {
                    queue.push(cur_node.left_child);
                }
                if (cur_node.right_child) {
                    queue.push(cur_node.right_child);
                }
            }
            return ary;
        }
    }

    // 先序遍历
    prevorder(node) {

    }

    // 中序遍历
    inorder(node) {

    }

    // 后序遍历
    postorder(node) {

    }
}

// 测试用例
let tree = new Tree();
tree.add(0);
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
tree.add(6);
tree.add(7);
tree.add(8);
tree.add(9);
console.log(tree.breadth_travel);