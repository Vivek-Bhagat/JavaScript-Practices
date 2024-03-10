const user = {
  username: "Vivek",
  price: 999,

  welcomeMessage: function () {
    // console.log(`${this.username} , welcome to the website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this)  // empty object

// 'this' can be used inside the object only

// function chai() {
//let username = "user"
//   console.log(this.username);  // cannot use this inside the function
// }

// chai();

// const chai = function () {
//   let username = "user";
//     console.log(this.username); // undefined
// }
// chai()

// const chai = () => {
//   let username = "user";
//     console.log(this.username); // undefined
// }
// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 5));

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(3, 5));
