// Immediately invoked function expression (IIFE)

(function chai(){
    // console.log(`DB CONNECTED`);
    console.log("DB CONNECTED");
    
})();// run without chai()
// chai()

// IIFE  jo function immediately execute ho jaye
// To avoid pollution caused by Global Scope variable declaration 
// FOR 2 IIFE use(; )
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Akash')