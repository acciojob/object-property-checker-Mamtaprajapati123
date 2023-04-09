var sampleObject = {
      name: "John",
      age: 30,
      city: "New York"
    };
    
    // Define the hasKey function
    function hasKey(key) {
      return key in window.sampleObject;
    }
    
    // Test the hasKey function
    console.log(hasKey("name")); // true
    console.log(hasKey("address")); // false
alert(hasKey(key));
