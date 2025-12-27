// array
const myArr=[0,1,2,3,4]
const myHeros = ["shaktiman","ironman"]

console.log(myArr[3])
// array methods
myArr.push(9)
myArr.push(15)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

// myArr.unshift(8)// insert at beginning move other index forward
// console.log(myArr);

// myArr.shift();// deletes elements from the beginning
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);// prints in string form

// slice, splice
console.log("A ",myArr);

const myn1 = myArr.slice(1,3)// does not includes upper range
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)// also includes both ranges
console.log(myn2); // Also SPLICE manipulates with the ORIGINAL ARRAY
console.log("C",myArr);// splice removes the 1-3 elements from the original array


