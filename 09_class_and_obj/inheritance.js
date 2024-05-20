class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${(this, this.username)}`);
  }
}

const chai = new Teacher("chai", "chai@gmail.com", "123");

chai.logMe();
chai.addCourse();
