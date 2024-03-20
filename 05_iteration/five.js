const coding = ["js", "cpp", "c#", "python", "ruby"];

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "javaScript",
    languageFileName: "js",
  },
  {
    languageName: "cpp",
    languageFileName: "c++",
  },
];

myCoding.forEach((item) => {
  console.log(`The name of the language :${item.languageName}`);
  console.log(`The name of the languageFile :${item.languageFileName}`);
});
