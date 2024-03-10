//  Immediately Invoked Function Expression (IIFE)

//due to the pollution in the global scope  we use the IIFE function to reduce the pollution done by the global scope

// in IIFE function should end with semicolon ';' to invoke the another function

(function chai() {
    //named IIFE
  console.log("DB connected");
})();

((name) => {
  console.log(`DB connected two ${name}`);
})("Vivek"); // takes the parameter as argument
