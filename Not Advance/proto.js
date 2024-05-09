//Functional approach of defining the object (Recommended way of doing)
//Prototype

var User = function(firstName , courseCount){
    this.firstName = firstName;                  // Another way of defining object
    this.courseCount = courseCount; 
    this.getCourseCount = function () {
        console.log( "Course count is :", this.courseCount);
    };               
};

//Injection a new function/feature in main definition of object
//Whatever is available in prototype you can override that or you can inject/add your own feature
User.prototype.getFirstName = function() {
    console.log("Your first name is : ",this.firstName);
}


var aayush = new User("aayush",2);
aayush.getCourseCount();
aayush.getFirstName();
//console.log(aayush);

//new creates diffrent instance of sam using above prototype
var sam = new User("Sam",5);
//console.log(sam);
sam.getCourseCount();
sam.getFirstName();