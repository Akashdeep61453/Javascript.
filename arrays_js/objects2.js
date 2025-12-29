// const tinderUser= new Object()// Singleton object

const tinderUser = {}// Non Singleton object
tinderUser.id = "123abc"
tinderUser.name = "Xyz"
tinderUser.isLoggedIn  = false

// console.log(tinderUser);
 const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Akashdeep",
            lastname: "Singh"
        },
        age: 19
    }
 }
//  console.log(regularuser.fullname.age);
 
const obj1 ={
    key1:"a",
    key2:"b"
    }
const obj2= {
    key3:"a",
    key4:"b"
}

// const obj3 = {obj1,obj2}
// console.log(obj3);// same likein array both includes in other array

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2) 
//{} means it acts as a target and all other objects after that acts as a source. 


const obj3 = {...obj1, ...obj2}   // spread method
console.log(obj3)


const users ={
  id: 1,
  email: "a@gmail.com"
}

users.email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // imp
// stores them and print in form of an Array
console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // very rarely

console.log(tinderUser.hasOwnProperty('isLoggeddIn'));



