// Object.is() static method determines whether two values are the same value.

console.log(Object.is('1', 1))//false
console.log(Object.is(1, 1))//true


Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is('window', 'window'); // true
Object.is([], []); // false







// const foo= { a: 1 };
// const bar = { a: 1 };
// const sameFoo = foo;
// Object.is(foo, foo); // true
// Object.is(foo, bar); // false
// Object.is(foo, sameFoo); // true





// // Case 2: Signed zero
// Object.is(0, -0); // false
// Object.is(+0, -0); // false
// Object.is(-0, -0); // true





// // Case 3: NaN
// Object.is(NaN, 0 / 0); // true
// Object.is(NaN, Number.NaN); // true


var object1='bhargav'
var object2='jaykrishna'
var object3='bhargav'
var object4='jaykrishna'

console.log(Object.is(object1,object2))
console.log(Object.is(object2,object2))
console.log(Object.is(object3,object4))
console.log(Object.is(object1,object3))
console.log(Object.is(object2,object4))