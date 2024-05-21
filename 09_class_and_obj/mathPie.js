const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
// {
//   value: 3.141592653589793,
//   writable: false,  hard coded value in c++ that cannot be changed
//   enumerable: false,
//   configurable: false
// }
// console.log(Math.PI);   value is universal constant

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nahi  bannni");
  },
};
console.log(chai);

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: true,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
