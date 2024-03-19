// const userEmail = "@vivek";
// if (userEmail) {
//   console.log("got the user email");
// } else {
//   console.log("Dont'have the user email");
// }

// falsy values
// false, 0, -0, BigInt 0n , "", null , undefined , NaN

// trutty values
// true ,"0" , 'false ' , " ", {} , [] , function(){}

// const userEmails = [];
// if (userEmails.length === 0) {
//   console.log("Array is empty");
// }

// const myObject = {};
// if (Object.keys(myObject).length === 0) {
//   console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefinde
let val1;
// val1 = 5 ?? 10; // return thr first values if it have another values too
// val1 = null ?? 10; // return the '10' bcz nullish is used to remove the null values
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 15; // jo value pahle mill jaye usse return karta h
console.log(val1);

// Terniary Operator
//condition ? true : false
const iceTeaPrice = 80;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
