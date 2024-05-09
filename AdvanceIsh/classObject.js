// inport user form "./classes.js";

const User  = require("./classes.js");

const aayush = new User("aayush", "aayush@gmail.com");

console.log(aayush.getInfo());
console.log(aayush.getInfo().email);  //Not a good way of chaining directly, rather old it in variable and the accessing it is a goood way

aayush.enrollCourse("Javascript");
aayush.enrollCourse("React");


console.log(aayush.getCourseList());

//NOTE : Majority of the things that you will be receiving form the database classes and bunch of other things
//are going to be arrays or objects and you need to learn how to loop through them

let courses = aayush.getCourseList();

courses.forEach((c) => console.log(c));