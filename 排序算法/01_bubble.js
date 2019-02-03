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
let ary = [3,1,4,2,5,2,1];
bubble(ary);
console.log(ary);