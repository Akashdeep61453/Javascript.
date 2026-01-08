const coding = ["js", "ruby", "java", "python","cpp"]

// coding.forEach( function greet(){})// is a callback so no function name
coding.forEach( function (val){
    // console.log(val)
})// passed the function

// coding.forEach( greet =() => {})
coding.forEach((item) => {
    // console.log(item)
})
    

function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)
    
// coding.forEach( (item,index,arr)=>{
//     console.log(item, index, arr)
// })

// Value from database comes in array format
const myCoding= [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( function (item){
//objects in array , useful in Databases
    console.log(item.languageFileName);
    
})