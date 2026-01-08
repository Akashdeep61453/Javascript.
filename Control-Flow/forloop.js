for(let index=0; index<=10; index++){
    console.log(index)
}
// basics as nested loops

let myArray =["flash", "batman","superman"]
console.log(myArray.length);

// for(let index=0; index<myArray.length; index++){
//     console.log(myArray[index])
// }

// break and continue
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`Detected 5`)
        continue
        // break;
    }
    console.log(`Value of i is ${index}`)
    
    
}