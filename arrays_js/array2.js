const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

//marvel_heros.push(dc)// array inside the array
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const all_heros = marvel_heros.concat(dc) // stores in external array
// console.log(all_heros);

const all_new_heroes = [...marvel_heros, ...dc]
//console.log(all_new_heroes);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_arr.flat(2)
console.log(real_another_array);


console.log(Array.isArray("Akash"))
console.log(Array.from("Akash"))
console.log(Array.from({name:"Akash"}));//Interesting if output not possible
// then shows empty array   []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) // comma



