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

const userEmails = [];
if (userEmails.length === 0) {
  console.log("Array is empty");
}

const myObject = {};
if (Object.keys(myObject).length === 0) {
  console.log("Object is empty");
}
