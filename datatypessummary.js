// primitive and non primitive
// 7 types: string , number, boolean, null, undefined, symbol , BigInt
//JavaScript is a dynamically typed language.
//  Because data type will automatically assigned at the time of compilation or code execution.

const score  =100.0// both int and float are same as NUMBER
const isloggedin = false// boolean
const temp = null
let email //undefined
let bignum = 54544545464646455554457457476466n;

const id = Symbol('123')
const newId = Symbol('123')
console.log(id ==newId);// false

//Refrences(Non-Primitives)
// Array,Objects, Functions

const heros=["Shaktima","Ben10","IronMan"];
let myObj={
    name: "akash",// use comma here
    age: 19,
}

const myFunc =function(){
    console.log("Hello World");
    
}
console.log(typeof bignum)

// undefined → Variable is declared but no value is assigned
// null → Variable is intentionally assigned no value
// Who assigns it
// undefined → Assigned by JavaScript
// null → Assigned by the programmer
// Default value
// undefined → Default value of uninitialized variables
// null → Not a default value
// undefined → Type is "undefined"
// null → Type is "object" (JavaScript bug)
// Use case
// undefined → Used to check whether a value exists
// null → Used to clear or reset a value
// Equality (==)
// undefined == null → true
// null == undefined → true
// Strict equality (===)
// undefined === null → false
// null === undefined → false
// Function return
// Function with no return → undefined
// Function must explicitly return null