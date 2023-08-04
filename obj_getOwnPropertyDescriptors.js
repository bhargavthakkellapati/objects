//Object.getOwnPropertyDescriptors is used to get all property configutation of given object




const object1 = {
    property1: 42
  };
  
  const descriptors1 = Object.getOwnPropertyDescriptors(object1);
  
  console.log(descriptors1.property1);
  
  console.log(descriptors1.property1.value);
  
  
  
  
  
  var obj = {
    name: 'bhargav',
    age: 24,
 set (hobby) {
      this.hobby = reading;
    }
  };
  
  var descriptors = Object.getOwnPropertyDescriptors(obj);
  console.log(descriptors);





