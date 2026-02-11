// function hello() {
//   console.log("100");
// }

// setTimeout(hello, 1000); // argument as function  and delay

// another way of writing the settimeout function

// setTimeout(() => {
//   console.log("100");
// }, 3000);

//  Callback

// function getData(data) {
//   // returning data after 2 seconds
//   setTimeout(() => {
//     console.log(data);
//   }, 2000);
// }

// // in this call , all function get called at the same time, and return the data after 2 seconds
// getData(100);
// getData(200)
// getData(300) // all data is returned after the 2 seconds

// this functions will print the data 1 after 2 sec delay   and after 2 sec it wll print 2
function getData(data, getnextData) {
  setTimeout(() => {
    console.log("data", data);
    if (getnextData) {
      getnextData();
    }
  }, 2000);
}

// passing function as the paramneter using the arrow functions
// getData(1, () => {
//   getData(2); // callback functions
// });

//callback hell - a nested callback
getData(1, () => {
  console.log("getting data 2");

  getData(2, () => {
    console.log("getting data 2");

    getData(3, () => {
      console.log("getting data 2");

      getData(4);
    });
  });
});
