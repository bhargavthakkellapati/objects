//obj_properyisEnumerable ia a method which is used to check the property of given object is enumerable or not

const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable('property1'));//true


console.log(array1.propertyIsEnumerable(0));//true

console.log(array1.propertyIsEnumerable('length'));//false

Object.defineProperty(object1,'property1', {
   value:'bhargav',
   enumerable:false,

})

console.log(Object.propertyIsEnumerable('property1'))//false



const obj = {
    enum: "is enumerable",
  };
  Object.defineProperty(obj, "enum", {
    value: "is non-enumerable",
    enumerable: false,
  });

  console.log(Object.propertyIsEnumerable('enum'))//false

