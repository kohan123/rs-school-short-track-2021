/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString(10).split('').map(Number);
  const srt = arr.sort();
  const numb = srt.shift(0);
  let res = String(n).replace(numb, '');
  res = Number(res);
  return res;
}

module.exports = deleteDigit;
