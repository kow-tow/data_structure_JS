// 希尔排序：尽量把步长分割的，转化为二维的平面，可以看看思想文档里对其进行的描述，我们使用二维面想通原理，但实际上，数组是不进行分割的
// 我们是在一个数组上进行了心理的分组（列），然后每列各自排序，再之后，减小步长（列更长了），每列再排序，
// 排序比对的是相差步长位的元素，实际上就是每列相邻元素的比对
function shell_sort(list) {
    const n = list.length;
    let gap = Math.floor(n / 2); //通过减半法获取步长
    console.log(gap);
    while (gap >= 1) { // 在gap变成0之前始终控制列的插入算法
        for (let j = gap; j < n; j++) { // 插入排序的i从gap开始，抽象到列上，就是保证是从每个列首开始进行插入排序
            let i = j;
            while (i > 0) { // 进行插入排序，一个循环可以应用多次多列的插入排序
                if (list[i] < list[i - gap]) { // 差落是gap，抽象到二维的平面，保证了是每列的元素交换
                    list[i] = list[i] + list[i - gap];
                    list[i - gap] = list[i] - list[i - gap];
                    list[i] = list[i] - list[i - gap];
                    i -= gap;
                } else {
                    break;
                }
            }
        }
        gap = Math.floor(gap / 2); // 一次所有列的插入排序完成后，步长再减半，然后分列，每列再进行插入排序。
    }
    return list;
}

// 测试用例
let nums = [-12, -10, -10, -9, -8, -8, -7, -7, -6, -5, -4, -4, -4, -3, -1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10, 10];
console.log(shell_sort(nums));