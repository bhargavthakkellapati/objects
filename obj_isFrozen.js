//object.isFrozen is a method to check the object is freeze are not

const object1 = {
    property1: 42,
  };
  
  console.log(Object.isFrozen(object1));//false

  Object.freeze(object1);

console.log(Object.isFrozen(object1));//true


const Frozen = Object.preventExtensions({});
console.log(Object.isFrozen(Frozen)); // true





const nonWritable = { e: "plep" };
Object.defineProperty(nonWritable, "e", {
    configurable: false,
}
)
console.log(Object.isFrozen(nonWritable))//false