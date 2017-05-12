/**
 * Сортировка выбором
 * @param {Array} arr
 * @returns {Array}
 */
function selectionSort(arr) {
    let i, j, min;

    for (i = 0; i < arr.length; i++) {
        // считаем i-ый элемент минимальным
        min = i;

        // обходим массив в поиске элемента меньшего, чем min
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // если меньший элемент был найден, меняем местами
        if (min !== i) {
            swap(arr, i, min);
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


let sorted = selectionSort([10, 5, 45, 2, 67, 1, 3, 34]);
console.log(sorted);