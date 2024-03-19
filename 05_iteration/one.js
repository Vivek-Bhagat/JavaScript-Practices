// for

// for (let index = 0; index <= 10; index++) {
//   const element = index;
//   if (element == 5) {
//     console.log("5 is the best element");
//   }
//   console.log(element);
// }

for (let i = 1; i <= 5; i++) {
  //   console.log(`Outer loop values : ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Outer loop values : ${i} and Inner loop values : ${j}`);
    // console.log(i + "*" + j + "=" + i * j);
  }
}

// break and continue

// for (let i = 0; i <= 10; i++) {
//   if (i == 5) {
//     console.log("5 detected");
//     break; // stops the loop if the condition is matched
//   }
//   console.log(` the values of the i : ${i}`);
// }

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("5 detected");
    continue; // skip/ doesn't execute  the detected conditon the loop will continues
  }
  console.log(` the values of the i : ${i}`);
}
