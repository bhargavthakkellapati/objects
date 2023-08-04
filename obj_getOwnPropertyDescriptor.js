//object.getOwnPropertyDescriptor is a method which is used to get configuration of secific object


var object1 = {
    name:"bhargav"
  };
  
  var descriptor1 = Object.getOwnPropertyDescriptor(object1, 'name');
  
  console.log(descriptor1.configurable);
  //output=true

  
  console.log(descriptor1.value);
  //output=bhargav


 

  o = { age: 42 };
d = Object.getOwnPropertyDescriptor(o, "age");
console.log(d);





object = {};
Object.defineProperty(object, "qux", {
  value: 8675309,
  writable: false,
  enumerable: false,
});
own= Object.getOwnPropertyDescriptor(object, "qux");
console.log(own);