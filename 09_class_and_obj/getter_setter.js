class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //   if Getter is defined then setter must be defined
  // getter and setter name should be same
  // it can occur max stack size problem if contructor is calling the same name in the getter and the setter
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}chai`;
  }
  set password(value) {
    this._password = value;
  }
}

const chai = new User("chai@gmail.com", "abc");
console.log(chai.password);
console.log(chai.email);
