// 冒泡算法
function bubble(list) {
    for (let i = 0; i < list.length - 1; i++) {
        let flag = 0;
        for (let j = 0; j < list.length - 1 - i; j++) {
            if (list[j] > list[j + 1]) {
                list[j] = list[j] + list[j + 1];
                list[j + 1] = list[j] - list[j + 1];
                list[j] = list[j] - list[j + 1];
                flag++;
            }
        }
        if (flag === 0) {
            break
        }
    }
}

// 测试用例
let nums = [-12, -10, -10, -9, -8, -8, -7, -7, -6, -5, -4, -4, -4, -3, -1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10, 10];
bubble(nums);
console.log(nums);