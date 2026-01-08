const userEmail = "a@akash.ai"// got user email
const userEmail2 = ""// don't have user email
const userEmail3 = []// got user email
if(userEmail3){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

/* FALSY VALUES
false, 0, -0, BigInt, 0n, "", null, undefined, Nan

TRUTHY VALUES
"0", 'false', [], " ",{}, function(){}
empty array, string, object, function

*/

if(userEmail3.length===0){
    console.log("array is empty");   
}

// IMPORTANT
const emptyObj ={}

if( Object.keys(emptyObj).length===0){// return array
console.log("Object is empty");

}
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10  
// val1 = null ?? 10 // if any kind of error came
// val1 = undefined ?? 15 

val1 = null ?? 10 ?? 20
console.log(val1);

// TERNARY OPERATOR

let a = 115>18? "valid":"invalid";
console.log(a);
