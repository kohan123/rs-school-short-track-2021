/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function findMines(arr, i, j) {
  const fromI = i - 1 < 0 ? 0 : i - 1;
  const toI = i + 1 > arr.length - 1 ? i : i + 1;
  const fromJ = j - 1 < 0 ? 0 : j - 1;
  const toJ = j + 1 > arr[0].length - 1 ? j : j + 1;
  let count = 0;

  for (let iIndex = fromI; iIndex <= toI; iIndex++) {
    for (let jIndex = fromJ; jIndex <= toJ; jIndex++) {
      if (arr[iIndex][jIndex] === true && (iIndex !== i || jIndex !== j)) {
        count++;
      }
    }
  }
  return count;
}

function minesweeper(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    res[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      const minesCount = findMines(matrix, i, j);
      res[i].push(minesCount);
    }
  }
  return res;
}

module.exports = minesweeper;
