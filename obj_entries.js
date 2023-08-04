//obj.entries is a method its returns a array of given  objects

var obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj));


const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(anObj));





console.log(Object.entries("bhargav"));





var obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`);
}