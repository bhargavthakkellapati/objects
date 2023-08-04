//object.seal is a methoed which is used to seal the object i.e  extendeble is not done to those objects


const object1 = {
    property1: 42,
  };
  
  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1);//33
  
  delete object1.property1; // Cannot delete when sealed
  console.log(object1.property1);// 33



  const person = {
    name: "bhargav",
    age: 24,
  };
  
  console.log("Before sealing:", person);//name:"bhargav",age:24
  
  Object.seal(person);
  
  person.location = "hyd";
  
  person.age = 25;
  
  console.log("After sealing:", person);//name:"bhargav",age:25



  const car = {
    make: "benz",
    model: "gls 400",
  };
  
  console.log("Before sealing:", car);
  
  Object.seal(car);
  
  delete car.model;
  
  console.log("After sealing:", car);

