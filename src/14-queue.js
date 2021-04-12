const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.list = null;
    this.tail = null;
    this.count = 0;
  }
  get size() {
    return this.count;
  }

  enqueue(element) {
    if (this.list === null) {
      this.list = new ListNode(element);
      this.tail = this.list;
    } else {
      this.tail.next = new ListNode(element)
      this.tail = this.list.next;
    }
  }

  dequeue() {
    const element = this.list.value;
    this.list = this.list.next;
    return element;
  }
}

module.exports = Queue;
