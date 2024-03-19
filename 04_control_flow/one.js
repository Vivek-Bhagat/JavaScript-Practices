//  if
const isUserLoggedIN = true;
if (isUserLoggedIN) {
  // ... somes sort of code to run the code
}
// < , > , <= ,>= , == , !=
//  === is used for the strict checking and type checking

const temperature = 41;
if (temperature < 50) {
  console.log("less than 50");
}

const score = 200;
if (score > 100) {
  let power = "fly";
  console.log(`User power :${power}`);
}

// console.log(`User power : ${power}`);
// gives the error bcz power is defined isnside the block " Scope Problem"

//short hand notation
const balance = 1000;
// if (balance > 100) console.log("test");
//not a good practice

// nested if
// if (balance < 100) {
//   console.log("less than 100");
// } else if (balance < 200) {
//   console.log("less than 200");
// } else {
//   console.log("less than 1000");
// }

// real life problem just like you created an acc. in e-commerce website
const isUserLoggedIn = true;
const debitCard = true;
const emailLoggedIn = true;
const gmailLoggedIn = true;
if (isUserLoggedIn && debitCard && 2 == 3) {
  console.log("Allow user to buy the course");
}
if (emailLoggedIn || gmailLoggedIn) {
  console.log("Allow the user to logged in");
}
