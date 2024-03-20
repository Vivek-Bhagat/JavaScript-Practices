const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "ruby",
};
for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "cpp", "c#", "python", "ruby"];
for (const key in programming) {
  //   console.log(key);
  //   console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("US", "United state of America");
map.set("FR", "France");

for (const key in map) {
    // console.log(key);
    // map is not iteratable through loop and can be done by the another way
}
