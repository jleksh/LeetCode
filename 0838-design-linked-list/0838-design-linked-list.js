function Node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) curr = curr.next;
    return curr.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.size++;
};

MyLinkedList.prototype.addAtTail = function(val) {
    const node = new Node(val);
    if (!this.head) {
        this.head = node;
    } else {
        let curr = this.head;
        while (curr.next) curr = curr.next;
        curr.next = node;
    }
    this.size++;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.size) return this.addAtTail(val);
    const node = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    node.next = curr.next;
    curr.next = node;
    this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    curr.next = curr.next.next;
    this.size--;
};
