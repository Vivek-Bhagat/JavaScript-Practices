let score = "33abc";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score); // converting string to number

console.log(typeof valueInNumber);
console.log(valueInNumber); // Not a Number (NaN)

/*
"33" => 33
"33abc" => NaN
true => 1; false => 0

*/

let isLoggedIn = "vivek";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// 1 => true ; 0 => false
// "" => true
// "vivek" => false

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
console.log("Hello");