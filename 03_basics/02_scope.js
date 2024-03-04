let c = 300;
let a = 200;

// if a function is withing the {} bracket then it is scope
if (true) {
  let a = 10;
  const b = 20;
  // var  c = 30;   // dont use var bcz it creates a problem
  //   console.log("Inner :", a);
}

// console.log("Outer :", a);
// console.log(b);
// console.log(c);

function one() {
  const username = "UserOne";

  function two() {
    const website = "Youtube";
    console.log(username);
  }
  //   console.log(website);  //outside the scope of the function
  // child function can access parent function values

  two();
}

// one();

if (true) {
  const username = "User";
  if (username === "User") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);  // outside the scope
}
// console.log(username);  // outside the scope

// ++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++

// console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

// addTwo(5)   // Hoisting effect since function is stored in the variable
const addTwo = function (num) {
  return num + 2;
};
// addTwo(5);

const addThree = function (num) {
  return num + 3;
};

console.log(addThree(3));

// ------- Hoisting ---------------

// Hoisting is a JavaScript mechanism that moves all variable and function declarations to the top of their scope before code execution. This means that variables and functions can be used before they are declared.
