/**
 * Быстрая сортировка
 * Основывается на стратегии "разделяй и властвуй"
 * @param {Array} arr
 * @param {int} [begin]
 * @param {int} [end]
 * @returns {Array} the sorted array
 */
function quickSort(arr, begin, end) {
    let left, right;

    if (arr.length > 1) {
        begin = typeof begin === "number" ? begin : 0;
        end = typeof end === "number" ? end : arr.length - 1;

        left = begin;
        right = end;

        // выбираем опорный элелмент из массива
        let pivot = arr[Math.floor((left + right) / 2)];

        // запускаем процедуру разделения массива, которая перемещает все ключи,
        // меньшие, либо равные опорного, влево от него,
        // а все ключи, большие опорного - вправо.
        while (left <= right) {
            // находим элемент слева от опорного больше, либо равные ему
            while (arr[left] < pivot) {
                left++;
            }

            // находим элемент справа от опорного меньше, либо равные ему
            while (arr[right] > pivot) {
                right--;
            }

            // меняем местами
            if (left <= right) {
                swap(arr, left, right);

                right--;
                left++;
            }
        }

        // для обоих подмассивов рекурсивно запускаем ту же процедуру
        if (begin < left - 1) {
            quickSort(arr, begin, left - 1);
        }

        if (left < end) {
            quickSort(arr, left, end);
        }
    }

    return arr;
}

/**
 * Поменять местами значения в массиве
 * @param {Array} arr
 * @param {int} firstIndex
 * @param {int} secondIndex
 */
function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

let sorted = quickSort([10, 5, 45, 2, 67, 1, 3, 34]);
console.log(sorted);