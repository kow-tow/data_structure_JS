// 快速排序
function quick_sort(list) {
    const l = list.length;
    if (l < 2) return list;
    const mid_value = list[0], left = [], right = [];
    for (let i = 1; i < l; i++) {
        const iv = list[i];
        iv >= mid_value && right.push(iv);
        iv < mid_value && left.push(iv);
    }
    return quick_sort(left).concat(mid_value, quick_sort(right))
}

// 测试用例
let nums = [12, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
console.log(quick_sort(nums));