const score = 400
console.log(score)

const balance = new Number(1000)
console.log(balance)

console.log(balance.toString().length)// prints 4
console.log(balance.toFixed(2)) // 2 numbers after decimal

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));// 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en'));// in US Numbers
console.log(hundreds.toLocaleString('en-IN'))//Indian

// ++++++++++++++++Maths+++++++++++++
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,3,6,8))
console.log(Math.max(5,10))

//random gives value between 0 && 1
console.log(Math.floor(Math.random()*10)+1)

const min = 1
const max = 6

console.log(Math.floor(Math.random() *(max-min+1)) +min)