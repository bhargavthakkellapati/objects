//assign-> assign is used to merge different objects by overriding the same elments with the second element



const obj1={a:1,b:5}
const obj2={a:4,c:3}

const returned=Object.assign(obj1,obj2)

console.log(obj1)



const obj = { a: "bhargav" };
const copy = Object.assign({}, obj);
console.log(copy)





var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

const obje= Object.assign(o1, o2, o3);
console.log(obje); 
console.log(o1);



var oa = { a: "bhargav", b: 2, c: 1 };
var ob = { b: "bhargav", c: "bhargav" };
var oc = { c:3 };

const objec = Object.assign({}, oa, ob, oc);
console.log(objec); 




var object = {
    sno: 1,
    get age() {
      return 24;
    },
  };
  
  let returns = Object.assign({}, object);
  console.log(returns);



