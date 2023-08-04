//Object.fromEntries-> this is the method is converts list of key value pairs into object

var arr = [
    ["0", "bhargav"],
    ["1", "jaykrishna"],
    ["2", "rajesh"],
  ];
  var obj = Object.fromEntries(arr);
  console.log(obj);







  var map = new Map([
    ["intial", "takkellapati"],
    ["numebr", 42],
  ]);
  var obj = Object.fromEntries(map);
  console.log(obj);



  const object1 = { a: 1, b: 2, c: 3 };

  const object2 = Object.fromEntries(
    Object.entries(object1).map(([key, val]) => [key, val * 2]),
  );
  
  console.log(object2);



 