//singleton
// object literals
// Object.create


const mySym = Symbol("Key1")
const jsUser = {
    name: "Akash",
    age: 19,
    [mySym]: "MyKey1",
    "full name": "Akashdeep Singh",
    location: "Mansa",
    email: "Akash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);// access it as string
console.log(jsUser["full name"]);
// console.log(jsUser.full_name);


console.log(jsUser[mySym]); // initialised using []  and accessed using [] not .
console.log(typeof jsUser[mySym]);

jsUser.email = "Akashmansa@gmail.com"
// Object.freeze(jsUser)
jsUser.email= "Akashmansa@microsoft.com" // does not change
console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("Hello Js user");
}

jsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greeting());// undefined
console.log(jsUser.greetingtwo());// error







