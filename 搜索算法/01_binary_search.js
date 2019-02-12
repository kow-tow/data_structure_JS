// 二分查找法
function binary_search(list, first, last, item) {
    const mid = Math.floor((first + last) / 2);
    if (first > last) { // 递归退出条件
        return false;
    }
    if (list[mid] > item) {
        return binary_search(list, first, mid - 1, item);
    }
    if (list[mid] < item) {
        return binary_search(list, mid + 1, last, item);
    }
    return mid;
}

// 测试用例
let list = [10, 12, 14, 23, 25, 25, 27, 33, 39, 45, 59, 65, 73, 82, 94, 94];
console.log(binary_search(list, 0, list.length - 1, 27));
console.log(binary_search(list, 0, list.length - 1, 100));

function binary_search2(list, first, last, item) {
    let mid = Math.floor((first + last) / 2);
    while (first <= last) {
        if (list[mid] > item) {
            last = mid - 1;
            mid = Math.floor((first + last) / 2);
        } else if (list[mid] < item) {
            first = mid + 1;
            mid = Math.floor((first + last) / 2);
        } else {
            return mid;
        }
    }
    return false;
}

let li = [10, 12, 14, 23, 25, 25, 27, 33, 39, 45, 59, 65, 73, 82, 94, 94];
console.log(binary_search2(li, 0, li.length - 1, 27));
console.log(binary_search2(li, 0, li.length - 1, 100));