/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const position = [];
  const sortedArray = arr.filter((el, index) => {
    if (el === -1) {
      position.push(index);
    }
    return el !== -1;
  });
  sortedArray.sort((a, b) => (a > b ? 1 : -1));

  let resArray = [...sortedArray];
  for (let i = 0; i < position.length; i++) {
    resArray = [...resArray.slice(0, position[i]), -1, ...resArray.slice(position[i])];
  }
  return resArray;
}

module.exports = sortByHeight;
