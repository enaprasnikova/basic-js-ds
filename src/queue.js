const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head = null;
  tail = null;

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
   let node = new ListNode(value);
   if (this.head === null) {
     this.head = node;
   } else if (this.head !== null && this.tail === null){
     this.head.next = node;
     this.tail = this.head.next;
   } else {
     this.tail.next = node;
     this.tail = node;
   }
  }

  dequeue() {
    let temp = this.head;
    this.head = this.head.next;
    return temp.value;
  }
}

module.exports = {
  Queue
};
