var User = function(firstName, courseCount){
    this.firstName= firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function (){
        console.log( "Course count is :", this.courseCount);
    }
}

User.prototype.getFirstName = function(){
    console.log("Your first name is : ",this.firstName);
}

var aayush = new User("Aayush",5);
aayush.getCourseCount();
aayush.getFirstName();
//console.log(aayush);

var sam = new User("Sam" , 10);
sam.getCourseCount();

if(sam.hasOwnProperty("firstName")){    //hasOwnProperty checks for "firstName" property if it exists then it
                                        //executes if block and print first name rather printing undefined 
    sam.getFirstName();
}