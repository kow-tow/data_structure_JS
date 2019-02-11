// 归并排序
function merge_sort(list) {
    let n = list.length;
    if (n <= 1) {
        return list;
    }
    let mid = Math.floor(n / 2);
    let left_li = merge_sort(list.slice(0, mid));
    let right_li = merge_sort(list.slice(mid));
    let left_pointer = 0, right_pointer = 0;
    let result = [];
    while (left_pointer < left_li.length && right_pointer < right_li.length) {
        if (left_li[left_pointer] < right_li[right_pointer]) {
            result.push(left_li[left_pointer]);
            left_pointer += 1;
        } else {
            result.push(right_li[right_pointer]);
            right_pointer += 1;
        }
    }
    result = result.concat(left_li.slice(left_pointer));
    result = result.concat(right_li.slice(right_pointer));
    return result;
}

let nums = [12, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
console.log(merge_sort(nums));