// Singleton   -> koi v contructor se object banate h tab singleton banta hai
// Object.create()

//  literals se singleton nhi banta h


// Object Literals
const mySym = Symbol("Key1")
const JsUser = {
    name: "User",
    age:18,
    "full-name" : "Vivek Bhagat",
    location: "Ranchi",
    email: "user.gmail.com",
    isLoggedIN: false,
    lastLoginDays :["Monday" ,"Tuesday"],
    // mySym: "myKey1"
    [mySym] : "Key1" // Actual syntax for Symbol key
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // new way of the calling the object
// console.log(JsUser["full-name"]); // since full name cannot be accessed by the dot
// // console.log( typeof JsUser.mySym);   //  it is not accessing as the symbol ,, just used as the string
// console.log(JsUser[mySym]);

JsUser.email = "userChat.gmail.com"
// Object.freeze(JsUser)  // Object.freeze() is used to freeze the object value so that it cannot be changed by changing the values]

JsUser.email ="ChatGpt.gmail.com"  // this email is not assigned to the email bcz the Object was freezed
// console.log(JsUser);


JsUser.Greetings = function(){
    console.log("Hello JsUser");
}

JsUser.GreetingsTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
}
console.log(JsUser.Greetings());
console.log(JsUser.GreetingsTwo());