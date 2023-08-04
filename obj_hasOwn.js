//object.hasOwn is a method which is used to check weather the property is its own or not in the given object


 var object1 = {
    prop: 'exists',
  };
  
  console.log(Object.hasOwn(object1, 'prop'));


  var object={
    name :"bhargav",
    qual:"btech",
    year:2022
  }

  console.log(Object.hasOwn(object,"qual"))//ouput=true
  console.log(Object.hasOwn(object,"btech"))//ouput=false


  const example = {};
  example.prop = undefined;
Object.hasOwn(example, "prop");//output =true



var fruits = ["Apple", "Banana", "Watermelon", "Orange"];
console.log(Object.hasOwn(fruits, 3)); // true ('Orange')
console.log(Object.hasOwn(fruits, 4)); // false - not defined
console.log(Object.hasOwn(fruits, "1"))//true



const object = Object.create(null);
object.prop = "its present";
if (Object.hasOwn(object, "prop")) {
  console.log(object.prop); 
}