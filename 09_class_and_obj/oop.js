const user = {
  username: "chai",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this; // implictely defined
}

// const userOne =  User("vivek", 12, true);
// const userTwo =  User("chai", 8, false);
// new create new instances
const userOne = new User("vivek", 12, true);
const userTwo = new User("chai", 8, false);

console.log(userOne);
console.log(userTwo);
