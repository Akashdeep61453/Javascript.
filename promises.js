// // Creation 
// const promiseOne = new Promise(function(resolve,reject){
// // do an async task
// // DB calls, cryptography, network call
// setTimeout(function(){
//     console.log('Async tak is complete');
//     resolve()// then calls
// },1000)
// })

// // then connection with Resolve
// promiseOne.then(function() {
//     console.log("Promise consumed");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
        
//     },1000)
// }).then(()=> {
//     console.log("Async 2 resolved");   
// })


// // we will pass the parameter in resolve and can get from then

// const promiseThree = new Promise((resolve,reject)=> {
//     setTimeout(function(){
//         resolve({
//             username:"Chai",
//             email: "chai@exm.com"})
//     },1000)
// })

// promiseThree.then(function(user){
// console.log(user.email);
// })

// const promiseFour = new Promise(function(resolve,rejec){
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({username:"hitesh",
//                 password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })

// promiseFour.then( (user)=>{
//     console.log(user);
//     return user.username;
// }).then( (username)=> {
// console.log(username);
// }).catch(function(error){
// //     console.log(error);

// // }).finally(()=>{
// // console.log("The promise is either resolved or either rejected");

// // })

// const promiseFive = new Promise( function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "javascript",password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     },1000)
// });
/*When you put async before a function declaration, you are telling JavaScript two things:
The function will always return a Promise.

Even if you return a direct value (like a string or number), JavaScript automatically wraps it in a resolved Promise
*/

/*The await keyword can only be used inside an async function. It tells JavaScript to "pause" the execution of that function until the Promise settles (either resolves or rejects).
It makes the code wait for the result without blocking the rest of the browser or server.
Once the Promise resolves, await returns the actual value, not the Promise objec */
async function consumePromiseFive(){
    try {
    const response =await promiseFive
    console.log(response)
    }
    catch(error){
console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers(){
   try{const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()// here await
    console.log(data);
   }
   catch (error){
    console.log("E: ",error);
   } 
}
getAllUsers()