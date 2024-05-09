//FOR ALL REGULAR FUNCTION CALLS THIS POINTS TOWARDS window object.

console.log(this);

var user = {
    firstName: "Aayush",
    courseCount: 4,
    getCourseCount: function () {
        console.log("LINE 9", this);        //Give access to entire object
        function sayHello(){
            console.log("HELLO");
            console.log("LINE 12",this);   //Since it is a regular function so this points towards window object

        }
        sayHello();   //Regular function call, so it contains window object.
    },


}

//Object call
user.getCourseCount();  //Not a regular function call so it gives entire object.