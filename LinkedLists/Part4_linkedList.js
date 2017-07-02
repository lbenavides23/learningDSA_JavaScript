// linked list continue

// Linked List constructor function
function linkedList() {
	this.head = null;
	this.tail = null;
}

// Node constructor function
function Node(value, next, prev){
	this.value = value;
	this.next = next;
	this.prev = prev;
}


// add to head function or method through prototyping
linkedList.prototype.addToHead = function(value){
	var newNode = new Node(value, this.head, null); // first new node

	if(this.head) this.head.prev = newNode;
	else this.tail = newNode; // if empty, makes it tail node
	this.head = newNode; // makes it head node of Linked List

};

var ll = new linkedList();

/*** Testing addTohead ***/
// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);
// console.log(ll);


// add to tail functional or method through prototyping
linkedList.prototype.addToTail = function(value){
	var newNode = new Node(value, null, this.tail); // node added to tail

	if(this.tail) this.tail.next = newNode; // is the linklist empty, add tail
	else this.head = newNode; // if empty, then point it as head and tail
	this.tail = newNode;
};

var myLL = new linkedList();

/*** Testing addToTail ***/
// myLL.addToTail(10);
// myLL.addToTail(20);
// myLL.addToTail(30);

// console.log(myLL.tail.prev); // result 20
// console.log(myLL.tail.prev.prev); // result 10


LinkedList.prototype.removeHead = function() {
	if (!this.head) return null; // if list is empty
	var val = this.head.value; // 
	this.head = this.head.next; // new head equal to next head
	if (this.head) this.head.prev = null;
	else this.tail = null; // if empty
	return val;
};

/*** Testing removeHead ***/

// var ll = new LinkedList();
// ll.addToHead(1000);
// ll.addToHead(2000);
// ll.addToHead(3000);

// console.log(ll.removeHead()); // result 2000


LinkedList.prototype.removeTail = function() {
	if (!this.tail) return null; // if list is empty
	var val = this.tail.value; // 
	this.tail = this.tail.next; // new head equal to next head
	if (this.tail) this.tail.prev = null;
	else this.head = null; // if empty
	return val;
};


/*** Testing removeTail ***/

// var ll = new LinkedList();
// ll.addToTail("one");
// ll.addToTail("two");
// ll.addToTail("three");

// console.log(ll.removeTail()); // result one



LinkedList.prototype.search = function(searchValue){
	var currentNode = this.head;
	while(currentNode){
		if (currentNode.value ===searchValue) return currentNode.value;
		curentNode = currentNode.next;
	}
	return null;
};

/*** Testing Search ***/

//var myLL = new LinkedList();

// myLL = addToHead(123);
// myLL = addToHead(70);
// myLL = addToHead('hello');
// myLL = addToTail(19);

// console.log(myLL.search(10)); //null




LinkedList.prototype.indexOf = function(value){
	var indexed = [];
	var currentIndex = 0;
	var currentNode = this.head;
	while(currentNode) {
		if (curentNode.value === value){
			indexes.push(currentIndex);
		}
		currentNode = currentNode.next;
		curentIndex++;
	}
	return indexes;
};

/*** Testing Search ***/

// var myLL = new LinkedList();

// myLL.addToTail(1);
// myLL.addToTail(5);
// myLL.addToTail(3);
// myLL.addToTail(5);
// myLL.addToTail(8);
// myLL.addToTail(7)
// myLL.addToTail(5);

// console.log(myLL.indexOf(5));  //output [1,3,6]



