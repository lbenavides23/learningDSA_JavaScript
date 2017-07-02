
// 1. Constructor Function
// - a function that creates an object class and allows you to create multiple incidences of that class very easily.
// - same properties and functionalities because they are all part of the same class.



function User(firstName, lastName, age, gender){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.gender = gender;
};

// example 1 - User object or incidence 
var user1 = new User('John','Smith', 26, 'male');

// call user1
user1

// ouput: User {firstName: "John", lastName: "Smith", age: 26, gender: "male"}
// user1 is an object of the class User


// example user200 - User object or incidence
var user200 = new User('Jill', 'Robinson', 25, 'female');

// call user 200
user200


// 2. Prototype Object

User.prototype.emailDomain = '@facebook.com';
user200.emailDomain

// getEmailAddress Method
User.prototype.getEmailAddress = function(){
	return this.firstName + this.lastName + this.emailDomain;
}

user200.getEmailAddress();
