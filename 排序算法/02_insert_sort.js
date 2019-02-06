// 插入排序
function insert(list) {
    for (let j = 1; j < list.length; j++) {
        let i = j;
        while (i > 0) {
            if (list[i] < list[i - 1]) {
                list[i] = list[i] + list[i + 1];
                list[i + 1] = list[i] - list[i + 1];
                list[i] = list[i] - list[i + 1]
            } else {
                break
            }
        }
    }
    return list
}

// 测试用例
let nums = [-12, -10, -10, -9, -8, -8, -7, -7, -6, -5, -4, -4, -4, -3, -1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10, 10];
console.log(insert(nums));