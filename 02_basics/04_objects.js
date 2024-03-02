// const tinderUser = new Object()  // this is a SingleTon Object

const tinderUser = {}; // This is non-singleton object

tinderUser.Id = "123abc";
tinderUser.name = " Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Vivek",
      lastName: "Bhagat",
    },
  },
};
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = {obj1 , obj2}  // it doesnt merge the object , it just make the new abject of the objec inside
// const obj3 = Object.assign(obj1, obj2);
// const obj = Object.assing( target , source) // suntax of Object Assign
// const obj3 = Object.assign({}, obj1, obj2); // new way of assingning the objec if object contains empty

const obj3 = { ...obj1, ...obj2 }; // best way of doing the merge  and it is the latest
// console.log(obj3);

// in DB the objects were returned as the array

//let there be an array and object are inside the array
const user = [
  {
    Id: 1,
    email: "abc@gmail.com",
  },
  {
    Id: 1,
    email: "abc@gmail.com",
  },
  {
    Id: 1,
    email: "abc@gmail.com",
  },
  {
    Id: 1,
    email: "abc@gmail.com",
  },
];

user[0].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // output datatype is Array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// To check the value is available in the object or not ..... sometimes it might crash the source
// eg ..  'hasOwnProperty'
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// -------- Destructuring the Objects -----------------

const course = {
  name: "js",
  courseInstructor: " abc",
  price: "999",
};
// course.courseInstructor   // normal way just like we have to use it repeatedly and it makes syntax worse

// destructuring it
const { courseInstructor: instrctor } = course // can assign the new name if you want to make it change
// console.log(courseInstructor); 
console.log(instrctor);  // same value as courseInstructor