const person = {};
Object.defineProperty(person, "name", {
  value: "bhargav",
  writable: false,
  enumerable: true,
  configurable: true
});
console.log(person)


const persons = {};

let _age = 24;

Object.defineProperty(persons, "age", {
  get: function() {
    return _age;
  },
  enumerable: true
});

console.log(persons.age);



const book = {};

Object.defineProperty(book, "title", {
  value: "JavaScript: The Definitive Guide",
  enumerable: false
});

console.log(book.title);
console.log(Object.keys(book));



const car = {};

Object.defineProperty(car, "make", {
  value: "Toyota",
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(car.make); // Output: Toyota

car.make = "Honda"; // Changing the value of the property is allowed, as it is writable.
console.log(car.make); // Output: Honda

delete car.make; // The 'make' property can be deleted, as it is configurable.
console.log(car.make); // Output: undefined