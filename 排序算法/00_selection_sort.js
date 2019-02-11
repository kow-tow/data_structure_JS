// 选择排序
function selection_sort(list) {
    let i, j, min;
    let temp;
    for (i = 0; i < list.length; i++) {
        min = i;
        for (j = i + 1; j < list.length; j++) {
            if (list[min] > list[j]) {
                min = j;
            }
            temp = list[min];
            list[min] = list[i];
            list[i] = temp;
        }
    }
    return list;
}

let nums = [12, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
console.log(selection_sort(nums));