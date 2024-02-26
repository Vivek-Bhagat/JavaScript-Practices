const name ="Vivek"
const reppoCount = 50

// console.log(name + reppoCount + " Value");

console.log(`Hello my  name is ${name} and my repo count is ${reppoCount}`);

const gameName = new String('shadow')
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.charAt(2)); // to know which character is at the index value
// console.log(gameName.indexOf('a')); //* to get the index  position of the character

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4); //can be negative value will be used
console.log(anotherString);

const newStringOne = "   shadoww  "
console.log(newStringOne);
console.log(newStringOne.trim()); //removes the whitespace

const url = "https://vivek_bhagat.com/vivek%20bhagat"
console.log(url.replace('%20', '_'));

console.log(url.includes('vivek'));