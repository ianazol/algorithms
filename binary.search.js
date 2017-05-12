/**
 * Бинарный поиск
 * Поиск элемента value в отсортированном массиве arr
 * @param {Array} arr Массив, в котором нужно проивести поиск
 * @param value Значение, которое будем искать
 * @returns {int} Индекс найденного элемента
 */
function binarySearch(arr, value) {
    let firstIndex = 0,
        lastIndex = arr.length - 1,
        middle;

    while (firstIndex <= lastIndex) {
        // находим средний индекс между firstIndex и lastIndex
        middle = Math.floor((firstIndex + lastIndex) / 2);

        // если значение среднего элемента равно искомому, возвращаем индекс среднего элемента
        if (arr[middle] === value) {
            return middle;
        } else if (value < arr[middle]) {
            // если значение среднего элемента больше искомого значения,
            // продолжаем поиск в левой части
            lastIndex = middle - 1;
        } else {
            // иначе - в правой части
            firstIndex = middle + 1;
        }
    }

    return -1;
}

console.log(binarySearch([1,4,7,9], 7));
console.log(binarySearch([1,4,7,9], 10));