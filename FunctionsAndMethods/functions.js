// function sum(x, y) {
//   s = x + y;
//   console.log("this will be printed");
//   return s;
//   console.log("This will not be executed");
// }

// sum(3, 4);

//  Arrow functions are modern way of writing functions and introduced in the javascript version 2015
// const sum = (x, y) => {
//     return x + y;
// };
// console.log(sum(3,3))

// Practice questions - pass string as and argument and return the no of vowels in the string
const countVowels = (str) => {
  let count = 0;
  let vowels = "aeiou";
  for (const c of str) {
    if (vowels.includes(c.toLowerCase())) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("abaaaed"));
