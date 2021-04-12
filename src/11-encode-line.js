/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const map = [];
  str.split('').forEach((char) => {
    const PrevVal = map.length === 0 ? null : map[map.length - 1];
    if (!PrevVal) {
      map.push({ value: char, count: 1 });
    } else if (PrevVal.value === char) {
      map[map.length - 1].count++;
    } else {
      map.push({ value: char, count: 1 });
    }
  });
  return map.reduce((acc, charInfo) => {
    if (charInfo.count === 1) {
      return acc + charInfo.value;
    }
    return `${acc}${charInfo.count}${charInfo.value}`;
  }, '');
}

module.exports = encodeLine;
