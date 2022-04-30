 class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    // if there is no head, make newNode the head and tail
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    // if there is a head, make newNode the tail and point the tail to the newNode
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    // if no nodes then return undefined
    if(!this.head) return undefined;

    let current = this.head;
    let prev = this.head;
    while(current.next){
      prev = current;
      current = current.next;
    }
    this.tail = prev
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(){
    // if no nodes then return undefined
    if(!this.head) return;
    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return oldHead;
  }

  unShift(value){
    const newNode = new Node(value);
    // if there is not new head then, set head & tail to newly created node
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    // if there is head, set new nodes next property to current head and head to new node
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  } 

  get(index){
    if(index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while(counter !== index){
      current = current.next;
      index--;
    }
    return current;
  }

  set(index, value){
    const foundNode = this.get(index)
    if(foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value){
    if(index <0 || index > this.length) return false;
    if(index === this.length) return !!this.push(value);
    if(index === 0) return !!this.unShift(value);
    const aft = this.get(index);
    const pre = this.get(index-1);
    const newNode = new Node(value);
    newNode.next = aft;
    pre.next = newNode
    this.length++
    return true;
  }

  remove(index){
    if(index<0 || index > this.length) return undefined;
    if(index === this.length-1) return this.pop();
    if(index === 0) return this.shift();
    const prev = this.get(index-1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse(){
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var prev = null;
    var next = null;

    for(let i = 0; i<this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  traverse() {
    let  current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }
  }

  toArray() {
    let  current = this.head;
    let bag = []
    while(current){
      bag.push(current.value);
      current = current.next;
    }
    console.log(bag);
  }


}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);

// console.log(list.pop())
// console.log(list.unShift(100));
// console.log(list.insert(4, 'abc'));
// console.log(list.remove(2))

console.log(list.reverse());
list.toArray(); 