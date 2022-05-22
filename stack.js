/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let currentFirst = this.first;
    let newFirstNode = new Node(val);
    // for an empty list ->
    if (currentFirst === null) {
      this.first = newFirstNode;
      this.last = newFirstNode;
      this.size ++;
    } else {
      // for a list with 1 or more items ->
      newFirstNode.next = currentFirst;
      this.first = newFirstNode;
      this.size ++;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // if (this.size === 0) {
    //   // stack is empty. throw error
    //   throw Error();
    // } else {
    //   let lastItem = this.last;
    //   // set this.last to previous item
    //   this.size --;
    //   return lastItem.val;
    // }
    if (!this.first) {
      // the list is empty
      throw Error();
    }
   
    if (!this.first.next) {
      // there is only one item in the list
      let returnVal = this.first.val;
      this.size --;
      this.first = null;
      this.last = null;
      return returnVal;
    }
   
    let previous = this.first;
    let node = this.first.next;
   
    this.first = node;
    this.size --;
    
   return previous.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else{
      return false;
    }
  }
}

module.exports = Stack;
