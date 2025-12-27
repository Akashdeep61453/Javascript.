// // Conversion of Data Types
// let score = false
// console.log(typeof score)
// console.log(typeof (score))
// console.log(score)


// let valueInNum = Number(score)
// console.log(typeof valueInNum)// prints number
// console.log(valueInNum)
// half string and number converts to number shows NaN (not a number)
// if score = null, then also after converting prints 0
// if score is undefined then after coversion  printf NaN
// for Boolean true converts to 1 and Boolean false converts to 0 


//"" = false
//"xyz"= true
let isLoggedIn = 1// 1=>true    0=>false
let inBooleanLogged = Boolean(isLoggedIn)
console.log(inBooleanLogged)

let Num = ""
let stringNum = Boolean(Num)
console.log(stringNum)