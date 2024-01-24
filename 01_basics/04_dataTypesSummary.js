//primitive

// 7 types : string , number, boolean, null, undefined, symbol , BigInt


const score = 110;
const scoreValue = 10;

const isLoggedIn = true
const userEmail = 'abc'; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


//Reference type (non-primitive types)

// array , objects , functions


const heroes = [ "a", "b", "c", "d", "e"]
let myObj ={
    name: "John",
    age: 30
}

const myfunction = function(){
    console.log("Hello world");
}


//follow this link for the further details
// reference = https://262.ecma-international.org/5.1/#sec-11.4.3


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack (primitive)  , Heap (non-primitive)
// added the url for the reference