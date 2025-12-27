const name="akash"
const repocount = 50

//console.log(name+repocount + "value")
// this method important to know
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String(`Akashhc`)
console.log(gameName)// [string: 'Akashhc']
console.log(gameName[0])// prints A

console.log(gameName.__proto__)//{}

console.log(gameName.length)// 7
//console.log(gameName.toUpperCase())
console.log(gameName.charAt(0)) 
console.log(gameName.indexOf('A')) // use ' '

const newstring = gameName.substring(0,4)
console.log(newstring);

// slice can use negative values mean it can move that characters from the end
// if both are positive and start > end then slice results empty string
// str.slice(4,10) means normal 4 to 9
// str.slice(-4,10) means 4 from back to 9th index
const anotherstring = gameName.slice(-8,4)
console.log(anotherstring);

const newStringOne = "    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());// removes space

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20',' ')) //space

console.log(url.includes('coc'))  //false







