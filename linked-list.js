class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length++;
      return;
    }
    this.tail.nextNode = new Node(value);
    this.tail = this.tail.nextNode;
    this.length++;
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length++;
      return;
    }
    this.head = new Node(value, this.head);
    this.length++;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head.value;
  }

  getTail() {
    return this.tail.value;
  }

  at(index) {
    let pointer = this.head;
    let counter = 0;
    if (index > this.length - 1) {
      return null;
    }
    while (counter != index) {
      pointer = pointer.nextNode;
      counter++;
    }
    return pointer.value;
  }

  pop() {
    if (this.length === 0) return null;

    let pre;
    let cur = this.head;
    if (cur.nextNode === null) {
      this.head = this.head.nextNode;
      return;
    }
    while (cur.nextNode != null) {
      pre = cur;
      cur = cur.nextNode;
    }
    pre.nextNode = null;
  }

  contains(value) {
    let pointer = this.head;
    let isContain;
    do {
      if (pointer.value === value) {
        isContain = true;
        return isContain;
      } else {
        isContain = false;
      }
      pointer = pointer.nextNode;
    } while (pointer != null);

    return isContain;
  }
  find(value) {
    let pointer = this.head;
    let index = 0;
    while (pointer != null) {
      if (pointer.value === value) {
        return index;
      }
      pointer = pointer.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let pointer = this.head;
    let listString = "";
    while (pointer != null) {
      listString = listString + `(${pointer.value}) -> `;
      pointer = pointer.nextNode;
    }
    listString = listString + `${pointer}`;
    return listString;
  }

  insertAt(value, index) {
    let pre;
    let cur = this.head;
    let post;
    let i = 0;
    while (cur != null) {
      if (i === index) {
        this.length++;
        if (i === 0) {
          this.prepend(value);
          return;
        } else {
          post = cur;
          cur = new Node(value, post);
          pre.nextNode = cur;
          return;
        }
      }
      i++;
      pre = cur;
      cur = cur.nextNode;
    }
  }

  removeAt(index) {
    let pre;
    let cur = this.head;
    let post;
    let i = 0;
    while (cur != null) {
      if (i === index) {
        this.length--;
        if (i === 0) {
          this.head = cur.nextNode;
          return;
        } else {
          post = cur.nextNode;
          pre.nextNode = post;
          return;
        }
      }
      i++;
      pre = cur;
      cur = cur.nextNode;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// test
const list = new LinkedList();
list.prepend(3);
list.prepend(4);
list.append(10);
list.insertAt(20, 2);
list.removeAt(0);

console.log(list.head);
console.log(list.toString());
console.log(list.size());
