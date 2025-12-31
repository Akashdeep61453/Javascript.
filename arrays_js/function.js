function sayMyName(){
    console.log("A")
    console.log("k")
    console.log("a")
    console.log("s")
    console.log("h")
}
// function addTwoNumbers(number1, number2){// parameters
//     console.log(number1+number2)
// }

function addTwoNumbers(number1, number2){// parameters
    return number1+number2
    
}
sayMyName// refrence
sayMyName()
addTwoNumbers(5,"4");// 54 instead of 9
addTwoNumbers(3,"a")// 3a   // Arguments
addTwoNumbers(3,null) // returns 3

const result = addTwoNumbers(3,5)
console.log("Result: ",result);

function logInUserMessage(username){
    if(username==undefined){
        console.log("please enter a username");
    }
    else{
return `${username} just logged in`
}
}
console.log(logInUserMessage("Akash"))
console.log(logInUserMessage(""))// just logged in
console.log(logInUserMessage())// undefined just logged in


function calculatePrice(...num1){// Rest and Spread Operator
    return num1
}
function calculatePrice(val1, val2,...num1){// Rest and Spread Operator
    return num1
}
console.log(calculatePrice(200,400,500,800))

const user={
    username: "Akash",
    price: 299// can prices too to conflict
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "Akash",
    price: 199
})

const myNewArray = [200, 400, 100, 600]
function getSecond(getArray){
return getArray[1];
}

console.log(`Second value is ${getSecond(myNewArray)}`);
