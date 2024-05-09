//Also known as destructuring of the data
//NOTE :- Whatever is the data on RHS, similar data type should be on the LHS then probably you ca do D structuring

// const user = ["aayush", 5, "admin"];
// //var role = user[2];
// //var name = user[0];

// var [name, courseCount, role] = user;
// console.log(role);

const myUser = {
    name : "Aayush",
    courseCount : 3,
    role : "admin",
}

console.log(myUser.courseCount);

//De-structuring the object
//Note : now only type on LHS or RHS should match but also the variable names should also match as they are designed in the object  

const {name, myCourseCount, role} = myUser;
console.log(myCourseCount);  //see note
console.log(role);