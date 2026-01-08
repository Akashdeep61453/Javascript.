// for of loop
// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5,6 ];

// for(const num of arr){
//     console.log(num)
// }
// FOR OF
const greetings= "Hello World!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)    
}

// Maps
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('Fr',"France");

// console.log(map)

for( const [key, value] of map){
    console.log(key, ':-')
}

// const myObject ={
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for(const [key,value] of myObject){
//     console.log(key,':-');// Donot iteratable
// }

const programming =["js", "rb","py","java","cpp"]

for(const key of programming){
    console.log(key) //print the values of array  FOR OF
    // console.log(programming[key]) // undefined
}