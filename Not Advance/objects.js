//Functional approach of defining the object (Recommended way of doing)
//Prototype
var User = function(firstName , courseCount){
    this.firstName = firstName;                  // Another way of defining object
    this.courseCount = courseCount; 
    this.getCourseCount = function () {
        console.log( "Course count is :", this.courseCount);
    };               
};

// new keyword is responsible for invoking the constructor and creating the object every single time
// the number of times you use new keyword a new copy of the object is created
var aayush = new User("aayush",2);

console.log(aayush);

//new creates diffrent instance of sam using above prototype
var sam = User("Sam",5);
console.log(sam);



// NOTE :- when we didn't use new keyword it says undefined bcz at that point of time when 
//you were not using the new keyword the User was a regular function call and according to the rule 'this' keyword
//was pointing to the regular window object

//As soon as new keyword is used it creates copy of prototype and move 'this' keyword from global object
// to inside of the user/object user

//AS soon as your use this keyword it is not a regular function call