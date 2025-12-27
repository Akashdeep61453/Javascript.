//Stack (Primitive), Heap(Non-Primitive)

// uses stack and pass the copy to the new datatype

let myYtName = "hiteshChoudharycom"
let anotherName = myYtName
anotherName = "Chaiaurcode"
console.log(myYtName)
console.log(anotherName)

// uses heap and pass the refrence of the original
let userone={
    email: "user@google.com",
    upi: 5055
}
let usertwo = userone
usertwo.email= "hitesh@gmail.com"

console.log(userone.email)// Both have same refrences in heap
console.log(usertwo.email)
