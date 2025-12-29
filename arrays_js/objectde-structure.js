 
 const course={
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
 } 
 course.courseinstructor// not much clean code

 const {courseinstructor: instructor} = course

 console.log(instructor);
 //API someone else done our work
 // JSON is basically an object without name which calls API
//  JavaScript Object Notation{
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
//  }



