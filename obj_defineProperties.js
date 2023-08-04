//object.defineprpertiesis used to modifies the exiting properties to directly in 
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {name:"bhargav"}
});

console.log(object1.property1);
console.log(object1.property2);


const person = {};

Object.defineProperties(person, {
  name: { value: "bhargav", writable: true, enumerable: true },
  age: { value: 24, writable: false, enumerable: true },
}
)

console.log(person.name); 
console.log(person.age);




const car = {
  brand: "benz",
  model: "gls 400"
};

Object.defineProperties(car, {
  price: {
    value: "1 cr",
    writable: false,
    enumerable: true,
    configurable: true
  }
});

for (const key in car) {
  console.log(key);
}
console.log(car)




const book = {};

Object.defineProperties(book, {
  title: { value: "JavaScript: The Good Parts", enumerable: true },
  author: { value: "Douglas Crockford", enumerable: true },
  pageCount: { value: 176, enumerable: true },

});

console.log(Object.keys(book));
console.log(book)
