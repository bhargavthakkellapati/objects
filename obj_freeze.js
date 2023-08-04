// Object.freeze is a method to freeze the object by this method  no changes will be done in given object 


const obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // it is not possible 
  
  console.log(obj.prop);

  var details={
    name:"bharagv",
    age:24,
    address:"ameerpet"

  }

   Object.freeze(details)
   details.pincode=500060;
   console.log(details)





   const employee = {
    name: "bhargav",
    designation: "trainee",
    address: {
      street: "ameerpet",
      city: "hyd",
    },
  };
  
  Object.freeze(employee);
  
  employee.name = "btakkellapati"; 
  employee.address.city = "hyderabad";
  
  console.log(employee)