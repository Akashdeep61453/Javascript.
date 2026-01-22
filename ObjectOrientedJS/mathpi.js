const descripter = Object.getOwnPropertyDescriptor(Math, "PI")//An own property descriptor is one that is defined directly on the object and is not inherited 
// from the object's prototype.

console.log(descripter);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI); // cannot changes 

const chai = {
    name: 'ginger tea',
    namee: 'ginger chai',// this is the value of the object
    
    price: 250,
    isAvailable: true,

    orderchai: function(){
        console.log("chai nhi bani");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') { // does not display the function value in the class
        
        console.log(`${key} : ${value}`);
    }
}