// object.extensible method is used to determine weather the object is extinsible i.e new properties are able to add or not


const object1 = {};

console.log(Object.isExtensible(object1));//true

Object.freeze(object1)
console.log(Object.isExtensible(object1))


const empty = {};
console.log(Object.isExtensible(empty)); // true

Object.preventExtensions(empty);
console.log(Object.isExtensible(empty));//false


