// Promises

// let promise = new Promise((resolve, reject) => {
//   console.log("Im the Promise");
//   resolve("Success"); // success message of fullfillment state
//   //   reject("some error"); // throws error
// });
// //type - object

// function getdata(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("Success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 3000);
//   });
// }

// let finalValue = getdata(123)

// promise will be resolved

// we use the promise by .then() and .catch()
// eg.

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Im a promise");
//     resolve("success");
//     reject("Network error");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promies Fullfilled" ,res);
// });
// promise.catch((rej) => {
//   console.log("promise rejected", rej);
// });

// real life exapmle

function asyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(" Data 1 received");
      resolve("Success");
    }, 3000);
  });
}

function asyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(" Data 2 received");
      resolve("Success");
    }, 3000);
  });
}

// console.log("Data Fetching data 1");
// let p1 = asyncFunction1();
// p1.then((res) => {
//   console.log("Promise resolve", res);
// });

// console.log("Data Fetching data 2");
// let p2 = asyncFunction2();
// p1.then((res) => {
//   console.log("Promise resolve", res);
// });

//*  Promise chaining ---

// console.log("Fetching data 1..");
// let p1 = asyncFunction1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching data 2..");

//     let p2 = asyncFunction2();
//     p2.then((res) => {
//         console.log(res);

//     })

// })

// //* Promise chaining
// asyncFunction1()
//   .then((res) => {
//     return asyncFunction1();
//   })
//   .then((res) => {
//     return asyncFunction2();
//   })
//   .then((res) => [console.log(res)]);


