//object.getownpropertynames is  a method it returns a array of property names of given object

 var object1 = {
    a: 1,
    b: 2,
    c: 3
  };
  
  console.log(Object.getOwnPropertyNames(object1));


 
 
 
  var arr = [1, 2, 3];

var  propertyNames = Object.getOwnPropertyNames(arr);
console.log(propertyNames);





var person = {
    name: 'bhargav',
    age: 25
  };
  
  Object.defineProperty(person, 'email', {
    value: 'bhargav@gmail.com',
    writable: true,
    enumerable: false 
  });
  
  var propertyNames = Object.getOwnPropertyNames(person);
  console.log(propertyNames);



  function Persons(name, age) {
    this.name = name;
    this.age = age;
  }
  var  person1 = new Persons('bhargav', 24);
  
  var  propertyName = Object.getOwnPropertyNames(person1);
  console.log(propertyName);