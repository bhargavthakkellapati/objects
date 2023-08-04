// object.values it is returns an  array of given objects own enumerable property values


const object1 = {
    a: 'bhragav',
    b: 42,
    c: false,
  };
  
  console.log(Object.values(object1));// ["somestring", 42, false]


const Obj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(Obj1)); // ['a', 'b', 'c']


const Obj2 = { 231: "a", 45: "b",67: "c" };
console.log(Object.values(Obj2)); // ['b', 'c', 'a']

  