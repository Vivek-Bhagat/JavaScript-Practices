const score = 400;
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));


const anotheNumber = 23.84439

// console.log(anotheNumber.toPrecision(2)); //precise upto which value or RoudOff

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //indian style formating the number


//++++++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // absolute value
// console.log(Math.round(4.6));  // roundOff
// console.log(Math.ceil(4.2)); // next number is value is increased
// console.log(Math.floor(4.9)); //Returns the greatest integer less than or equal to its numeric argument.

//Math.random()
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random()*10 + 1); // adding + 1 to avoid zero
console.log(Math.floor(Math.random() * 10)+ 1); // removing the digit after the decimal value

// getting the random number between the 10 and 20
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
