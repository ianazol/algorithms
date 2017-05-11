/**
 * Сортировка пузырьком
 * Идея: шаг сортировки состоит в проходе массива. По пути сравниваются пары соседних элементов.
 * Если элементы стоят в неправильном порядке, они меняются местами.
 * Неоднократно выполняя это действие, мы заставляем наибольший элемент "всплывать" к концу массива.
 * @param {Array} arr
 * @returns {Array}
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isSorted = true;

        for (let j = 0; j < arr.length - 1; j++) {
            // сравниваем пару соседних элементов
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                isSorted = false;
            }
        }

        // улучшение для сортировки: если за проход не произошло ни одного обмена,
        // значит все пары расположены в правильном порядке и продолжать процесс не имеет смысла
        if (isSorted) {
            break;
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

let sorted = bubbleSort([10, 5, 45, 2, 67, 1, 3, 34, 2, 7, 19]);
console.log(sorted);