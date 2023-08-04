//  object.keys is a method which returns the array with a enumerable key names of given object 
  
  
  var object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object1));//["a","b","c"]



  var arr = ["a", "b", "c"];
console.log(Object.keys(arr));//["0","1","2"]


var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']


var anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj));//["2","7","100"]



console.log(Object.keys("bhargav")); // [ '0', '1', '2','3', '4', '5','6']


console.log(Object.keys(2200))//[]