/**
 * Объединить 2 массива
 * @param {Array} left
 * @param {Array} right
 * @returns {Array}
 */
function merge(left, right) {
    let buffer = [],
        i = 0,
        j = 0;

    // проходимся по элементам массивов
    while (i < left.length && j < right.length) {
        // сравниваем элементы и наименьший помещаем в буффер
        if (left[i] < right[j]) {
            buffer.push(left[i]);
            i++;
        } else {
            buffer.push(right[j]);
            j++;
        }
    }

    // дописываем оставшиеся элементы из обоих массивов в буфер
    return buffer.concat(left.slice(i)).concat(right.slice(j));
}

/**
 * Сортировка слиянием
 * Построена на принципе "разделяй и властвуй"
 * @param {Array} arr
 */
function mergeSort(arr) {
    // деление массива заканчивается, когда останется 1 элемент. Такой массив можно считать упорядоченным
    if (arr.length < 2) {
        return arr;
    }

    // делим массив пополам
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    // рекурсивно выполнить сортировку длч каждой половины и результаты объединить в 1 массив
    return merge(mergeSort(left), mergeSort(right));
}

let sorted = mergeSort([10, 5, 45, 2, 67, 1, 3, 34]);
console.log(sorted);