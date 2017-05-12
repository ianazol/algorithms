/**
 * Сортировка вставками
 * Суть: на каждом шаге выбирается один из элементов входного массива и вставляется на нужную позицию в уже упорядоченном массиве,
 * до тех пор, пока элементы не будут исчерпаны
 * @param {Array} arr
 * @returns {Array}
 */
function insertionSort(arr) {
    let i, j, value;

    for (i = 0; i < arr.length; i++) {
        // запоминаем i-ый элемент, который в дальнейшем будем вставлять на нужную позицию
        value = arr[i];

        // делаем обход в уже упорядоченной последовательности от i-1 в обратном порядке,
        // пока значение элемента > value или не достигнуто начало массива
        for (j = i - 1; j >= 0 && arr[j] > value; j--) {
            // сдвигаем элементы вправо
            arr[j + 1] = arr[j];
        }

        // позиция найдена, вставляем элемент
        arr[j + 1] = value;
    }

    return arr;
}

let sorted = insertionSort([10, 5, 45, 2, 67, 1, 3, 34]);
console.log(sorted);