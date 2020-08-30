/*
!- ES6 class notation 
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    };
};

class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    };
};
*/

function LinkedList() {
    this.head = null;
    this.tail = null;
    // methods of the class
    this.addToHead = function(val) {
        const newNode = new Node(val, this.head, null);
        if(this.head){
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        };
        this.head = newNode;
    };

    this.addToTail = function(val) {
        const newNode = new Node(val, null, this.tail);
        if(this.tail){
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    };

    // this.getHead = function() {
    //     console.log("head: " + this.head)
    // }
};

function Node(val, next, prev) {
    this.value = val;
    this.next = next;
    this.prev = prev;
};

const ll = new LinkedList();
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
ll.addToTail(50);
console.log(ll);
/*
setting method to the prototype of the class
LinkedList.prototype.readHead = function() {
    console.log("from proto: " + this.head);
};
*/


