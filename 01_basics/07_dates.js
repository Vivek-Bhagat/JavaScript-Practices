// JS Date object represent a single moment in time in a platform independent format.

let myDate = new Date()

// console.log(typeof myDate); // date is Object

// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// let myCreateDate = new Date(2024 , 0 , 21) // in JS months starts from the 0 in the Array

// let myCreateDate = new Date(2024, 0, 21, 5, 3)
// console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("2024-01-22")
// console.log(myCreateDate.toLocaleString());

let myTimeStamps = Date.now()
// console.log(myTimeStamps); // in Milliseconds ans
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // conerting into the seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());  // days of the weeks
// console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday: "long",
})