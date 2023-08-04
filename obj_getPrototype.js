//object.getPrototypeof is a method which is used to get the prototype of the given object


var prototype1 = {1:2,2:3};
var  object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1)===prototype1);
// output= true



var  person = {
    firstName: 'bhargav',
    lastName: 'takkellapti',
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  var newobj = Object.create(person);
  newobj.age = 30;
  
  var  prototypeOfJohn = Object.getPrototypeOf(newobj);
  console.log(prototypeOfJohn ==person); //output=true
 



  const person = {
    name: 'John',
    age: 30,
  };
  
  const john = Object.create(person);
  
  console.log(Object.getPrototypeOf(john) === person); // Output: true
  console.log(Object.getPrototypeOf(john) === Object.prototype); // Output: false
  console.log(Object.getPrototypeOf(person) === Object.prototype); // Output: true