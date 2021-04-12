/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function removeKFromList(l, k) {
  let list = null;
  let currentNode = null;
  let listPointer = l;
  do {
    if (listPointer.value !== k) {
      if (list === null) {
        list = new ListNode(listPointer.value);
        currentNode = list;
      } else {
        const node = new ListNode(listPointer.value);
        currentNode.next = node;
        currentNode = node;
      }
    }
    listPointer = listPointer.next;
  } while (listPointer !== null);
  return list;
}

module.exports = removeKFromList;
