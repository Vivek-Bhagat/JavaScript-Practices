function sayMyname() {
  console.log("u");
  console.log("s");
  console.log("e");
  console.log("r");
}
// sayMyname();

// function addTwoNum(num1, num2) {
//   console.log(num1 + num2);
// }

// // addTwoNum(3, 4);
// // addTwoNum(3, "4");

// const result = addTwoNum(3, 5);
// console.log("Result :", result);  // value of result is -- undefined

function addTwoNum(num1, num2) {
  // let result = num1 + num2
  // return result
  return num1 + num2;
}

const result = addTwoNum(3, 5);
// console.log(" Result = ", result);

function loginUserMessage(username = "user") {
  // default value
  if (!username) {
    console.log("Please enter the username");
    return;
  }
  //   if (username === undefined) {
  //     console.log("Please enter the username");
  //     return;
  //   }
  return `${username} just Logged in`;
}
// console.log(loginUserMessage("User"));
console.log(loginUserMessage()); // nothing is passed in the parameter then undefined come
