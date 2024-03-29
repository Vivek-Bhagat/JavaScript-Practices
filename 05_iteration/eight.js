const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce(function (acc, currVal) {
//   console.log(
//     `The current value of acc : ${acc} and current Value : ${currVal}`
//   );
//   return acc + currVal;
// }, 0);

//  or

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);
