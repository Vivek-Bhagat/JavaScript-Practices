 function getData(data) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        console.log("Data :", data);
        resolve("success")
       }, 3000);
   })
   
}
// async - it always return proomise
// async function getApiData() {
//     console.log("getting the api data ...");
//     await getData(1)
//     await getData(2)
// }

// getApiData()  -- the function is need to be called to run the program

//* to avoid the unnecessary call of the function we use IIFE(Immediately Invoked Function Expression)
/*
 SYNTAX 
 ( fn() =>{.. })();

 wrap the function inside the curly braced and add another curly braceds at the end.
*/
// this function is invoked without calling the functions
(async function () {
    console.log("getting the api data ...");
    await getData(1);
    await getData(2);
})();