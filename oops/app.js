const student = {
  name: "avi",
  age: 16,

  printmarks: function () {
    console.log(this.age); // this is refering to student
  },
  printmarks1() {
    console.log("this is the new tax");
  },
};

const calculate = {
  age: 100,
  printmarks1() {
    console.log("this is the calculate tax");
  },
};

calculate.__proto__ = student; // making student as the prototype

//  here the object 'calculate' and protoype 'student' have the same method, then object method will be used.

// Class  - used for creating objects , prebuilt template for creating object

// class Car {
//   constructor() {
//     console.log("creating new object");
//   }
//   color() {
//     console.log("red");
//   }

//   engine() {
//     console.log("v12");
//   }

//   brand(brand) {
//     this.brand = brand;
//   }
// }

// let car1 = new Car(); // new keyword is used to create new object of same class
// car1.brand("Lexux");

// class Car {
//     constructor(brand, milage) {
//       console.log("creating new object");

//       this.brand = brand; // passing argument inside constructor
//       this.range = milage;
//   }
//   color() {
//     console.log("red");
//   }

//   engine() {
//     console.log("v12");
//   }
// }

// let car1 = new Car("lexux", 10); //constructor
// console.log(car1);

// let car2 = new Car("BMW", 10); // constructo
// console.log(car2);

//* 4 pillars of the class
//? i) Inheritance - passing doen the properties and the method from parent class to child class
//* extends - keyword is used to inherit the parent class methods

/* 
class Parent {

}
  -- enhering the methods of the parent class inside the child class
class Child extends Parent {

}

Note* - if parent and the child class have same methods , then childs methods will be used. [Methods overriding]
*/

class Person {
  constructor(names) {
    //   console.log("parent constructor is called");

    this.species = "Homo Sepians";
    this.names = names;
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("Sleep");
  }
}

class Engineer extends Person {
  constructor(names) {
    // console.log("child constructor is called");

    super(names); // to invoke the parent class cosntructor , if not invoke then it throws the error
    // this.name = "Engineer";
    // console.log("child constructor is exit.");
  }
  work() {
    super.eat();
    console.log("Can work");
  }
}
let newOb = new Engineer("vivek");
// the above code gives the order of the constructor is called.
// to pass the parameter from child to parent , pass the argument in the super("argument") also and use the argument in the parent constructor
