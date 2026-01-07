
const user = {
    username: "akash",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);// current context
    }
}

// user.welcomeMessage();
// user.username="hitesh"
// user.welcomeMessage();
console.log(this);

// function chai(){
//     console.log(this);
    
// }
// chai()

// const chai = function(){
//     let username="akash"
//     console.log(this.username);
// }
// chai()// results in undefined

const chai = () =>{
    let username="akash"
    console.log(this.username); // still undefined
}
chai()

// const addtwo =(num1,num2) =>{
//     return num1+num2;
// }    if CURLY then must write return (Explicit return)

// const addtwo = (num1,num2) => num1+num2;
// const addtwo = (num1,num2) => (num1+num2)  // in PARENTHESEIS 
// NO NEED OF RETURN  (Implicit return)

const addtwo = (num1,num2) => ({username: "akash"})
console.log(addtwo(5,9));