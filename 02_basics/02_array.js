const marvel_heroes = ["thor","ironman","superman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes) // it mergers the array into the array
// console.log(marvel_heroes);



// const allHeroes =  marvel_heroes.concat(dc_heroes) // used for concatination
// console.log(allHeroes);



//new way of the concationating the array by using the dot
// const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);



const another_array = [1,2,3,4,[5,6,7],8,[9,[10,11]]]
const real_another_array = another_array.flat(Infinity)   //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);



//  data scrapping

// console.log(Array.isArray("Vivek")) //to check the input is the array or not
// console.log(Array.from("Vivek"))  // creates an array from the iteratable objects
// console.log(Array.from({name:"Vivek"})) // interesting  // empty array



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //  'of' return the new array from the set of the elements