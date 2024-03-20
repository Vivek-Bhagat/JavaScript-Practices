// {}

// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //console.log(num);
}

const greeting = "Hellow world!";
for (const greet of greeting) {
  //   console.log(`The each char is : ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("US", "United state of America");
map.set("FR", "France");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const myObject = {
  game1: "Far cry",
  game2: "spiderman",
};
for (const [key, values] of myObject) {
  //   console.log(key, ":-", values); throes the error bcz my object is not iteratble through for each loop
}
