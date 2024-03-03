let c = 300;
let a = 200;

if (true) {
  let a = 10;
  const b = 20;
  // var  c = 30;   // dont use var bcz it creates a problem
  console.log("Inner :", a);
}

console.log("Outer :", a);
// console.log(b);
// console.log(c);
