// Function
const myFunction = function(param) {
    return arguments
  }
  
  console.log(myFunction('Something'))
  // { '0': 'Something' }
  
  
  // Arrow function
  const myArrowFunction = (param) => arguments
  console.log("*********************************")
  
  console.log(myArrowFunction('Something'))
  // ReferenceError: arguments is not defined