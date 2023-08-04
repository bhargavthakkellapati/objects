// object1.preventions is a method which is uesd  to stop the extensitions of a given object


const empty = {};
console.log(Object.isExtensible(empty)); // true

Object.preventExtensions(empty);
console.log(Object.isExtensible(empty)); // false



var nonExtensible = {  };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", {
  value: 8675309,
}); // throws a TypeError