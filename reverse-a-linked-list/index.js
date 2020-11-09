class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(item) {
    let node = new Node(item);
    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  reverse() {
    if (!this.head || !this.head.next) return this.head;
    let pivot = this.head;
    let prev = null;
    let tailX = this.head;
    while (pivot !== null) {
      let temp = pivot.next;
      pivot.next = prev;
      prev = pivot;
      pivot = temp;
    }
    this.head = this.tail;
    this.tail = tailX;
  }

  traverse() {
    if (!this.head) return 0;
    let pivot = this.head;
    while (pivot !== null) {
      console.log(pivot.data);
      pivot = pivot.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.append("mohsen");
linkedList.append("jeff");
linkedList.append("ali");
linkedList.append("ahmad");
linkedList.append("akbar");
linkedList.reverse();
linkedList.traverse();
