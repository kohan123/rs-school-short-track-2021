/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value, from = 0, to) {
  const min = from;
  const max = to !== undefined ? to : array.length - 1;
  const middleElementIndex = Math.floor(min + ((max - min) / 2));
  const middleElement = array[middleElementIndex];
  if (value === middleElement) {
    return middleElementIndex;
  }
  if (max - min === 2) {
    if (array[max] === value) {
      return max;
    }
    if (array[min] === value) {
      return min;
    }
  }
  if (value < middleElement) {
    return findIndex(array, value, min, middleElementIndex);
  }

  return findIndex(array, value, middleElementIndex, max);
}

module.exports = findIndex;
