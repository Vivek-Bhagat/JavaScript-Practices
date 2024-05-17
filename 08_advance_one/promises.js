const promiseOne = new Promise(function (resolve, reject) {
  // Do an async taske
  // DB calls , cryptography , network related
  setTimeout(function () {
    // console.log("Async task is complete");
    resolve(); // resolve() complete hone k baad  .then() work hoga
  }, 1000);
});

promiseOne.then(function () {
  //   console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  //   console.log("Async 2 consumed");
});

// data passing
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "chai",
      email: "chai@emample.com",
    });
  }, 1000);
});
promiseThree.then(function (user) {
  //   console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "chai", password: "123" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUser() {
//   try {
//     const response = fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
//     //   const data = response.JSON;
//     //   console.log(data);
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// getAllUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(roor);
  });

  