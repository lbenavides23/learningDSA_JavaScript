/*****

Linked List - list of elements called nodes
that are connected together in a single file
line. There are two types of Linked List
1) singlely - reference to the next node
2) doublely - reference to next node (tail) and previous node (head)

*****/

/***** Example

LinkedList will have tw0 properties
	1) head (previous)
	2) tail (next)
*****/

// Linked List constructor function
// No nodes to start or pointers
function LinkedList() {
	this.head = null;
	this.tail = null;
}


/****
 Node constructor function:
 	Each node will have three parameters
	1) value: 7
	2) next: nextNode
	3) previous: preNode
*****/


function Node(value, next, previous){
	this.value = value;
	this.next = next;
	this.previous = previous;
}

// example of LL with a head and tail pointer
var LL = new LinkedList();
var userList = new LinkedList();
var toDoList = new LinkedList();

// console.log(LL);

// create a object is an instance of node const.
var node1 = new Node(100, 'node2', null);
console.log(node1);

