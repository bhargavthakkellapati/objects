//create->obj.create is used to create a new object with specified prototype and properties


const person = {
    function () {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  const obj = Object.create(person);
  obj.name = "BHARGAV";
  obj.function();



  const animal = {
    makeSound: function() {
      console.log(this.sound);
    }
  };
  
  const cat = Object.create(animal, {
    sound: { value: "Meow" },
    colour: { value: "white" }
  });
  
  cat.makeSound(); 
  console.log(cat.colour);




  var vehicle = Object.create(null);
vehicle.type = "Car";
vehicle.color = "Red";

console.log(vehicle.type);
console.log(vehicle.color); 
