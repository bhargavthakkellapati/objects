// object.isSealed is used to check weather the object is selaeed or not


const object1 = {
    property1: 42
  };
  
  console.log(Object.isSealed(object1));//false

  Object.seal(object1)
  console.log(Object.isSealed(object1));//true


  const empty = {};
console.log(Object.isSealed(empty));//false

Object.preventExtensions(empty);
console.log(Object.isSealed(empty)); // true

const hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
console.log(Object.isSealed(hasProp)); // false


Object.defineProperty(hasProp, "fee", {
  configurable: false,
});
console.log(Object.isSealed(hasProp)); // true

