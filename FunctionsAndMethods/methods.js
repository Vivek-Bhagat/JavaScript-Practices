
//  forEach Loops in Array
// * callback - a function is passed as  parameter in the functions

//!  forEach  - it uses callback functions , it executes for every element 
// ? it doest work with break; 

let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach(function printVal(val) {
//     console.log(val)
// });

// arr.forEach((num) => {
//     console.log(num**2)
    
// })

// */  -- another way of  writing the callback functions
// let calculateSQ = (num) => {
//     console.log(num * num);
// }

// arr.forEach(calculateSQ)

//!  map() - methods  --- a callback function
//  * it returns the new array after completing the operations

// const newArr = arr.map((val) => {
//     console.log(val);
//     //  if it is returning any values it will create new array
//     return val**2
// });
// console.log(newArr);

//! filter() - methods --- a callback function
// ? - it creates a subarray from the arry

// let newFilter = arr.filter((val) => {
//     return val % 2 !== 0;
// })
// console.log(newFilter);

// ! reduce() - methods - a callback function
// * it return the single value and it requires 2 argument (prev , curr)

let output = arr.reduce((prev, curr) => {
    return prev + curr;
});
console.log(output); // 21 -> 1+2+3+4+5+6

let maxVal = arr.reduce((prev, curr) => {
    return prev ? curr : curr;
});
console.log(maxVal);
