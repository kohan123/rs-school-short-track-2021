/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const codeForAlLetter = 'A'.charCodeAt(0);
  const codeForFlLetter = 'F'.charCodeAt(0);
  const groups = n.split('-');
  if (groups.length !== 6) {
    return false;
  }

  return groups.every((group) => {
    if (group.length !== 2) {
      return false;
    }
    return group.split('').every((char) => {
      const isNumber = !Number.isNaN(Number(char));
      const code = char.charCodeAt(0);
      return isNumber || (code >= codeForAlLetter && code <= codeForFlLetter);
    });
  });
}

module.exports = isMAC48Address;
