
/* 
var - function or global scope 
- can be re-decleared
- can be re-assigned
- can be declared without initialization

*/
var num = 1;
console.log(num)
num = 2
console.log(num)
var num
console.log(num = 5);

/* 
let - block scpoe
- cannot be redeclared
- can be reassigned
- can be declared without initialization
*/
let str = 'num';
console.log(str);
str = 4;
console.log(str);
let newStr;
console.log(newStr = 'New');

/* 
const - block scope
- can't be re-declared
- can't be re-assigned
- can't be declared without initialization
*/
const num2 = 5;
console.log(num2);
// num2 = 5; // throws error since it is constant and values cannot be changed
// console.log(num2);
// const num3; // throws error , since it is not initialized
// console.log(num3)