console.log(2>5)
console.log(3!=4)

console.log("2">1)// implicitly converts string into number
console.log("02">1)


// these 6 are mostly avoid as it doesnot follow the trait of CLEAN CODE
console.log(null > 0);// when using the comparison operators the value of null converts to 0
console.log(null == 0);// when using the EQUALITY operator it does not work 
console.log(null >= 0);

console.log(undefined==0)
console.log(undefined > 0)// print false in all cases
console.log(undefined < 0)

console.log("2"===2);// strict check check VALUES as well as DATATYPES


