// let myName = "chai  ";
// let channem ="  chai   "

// console.log(myName.trim().length);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidey power is ${this.spiderman}`);
  },
};

Object.prototype.chai = function () {
  console.log(`chai is present in all the object`);
};

Array.prototype.heyChai = function () {
  console.log("Chai says hello");
};
// heroPower.chai();
// myHeroes.chai();
// myHeroes.heyChai();
// heroPower.heyChai();  ' array prototype is null'

//  Prototype Inheritance --->>>

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: "JS assignment",
  fullTime: true,

  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "ChaiAurCode    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is ${this.trim().length}`);
};

anotherUserName.trueLength();

"chaiAurCoffeee".trueLength();
"IceTea".trueLength();
