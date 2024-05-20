function Setusername(username) {
  // complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  Setusername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "abc.gmail.com", 123);

console.log(chai);
