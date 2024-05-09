/*  If you want to refer to a variable which is inside the same object that you want to refer then you use
the keyword this */

var user = {
    firstName :"Aayush",
    lastName : "Kushwaha",
    role: "Admin",
    loginCount: 44,
    facebookSignedIn: true,
    courseList: [],

    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },

    getCourseCount: function (){
        return this.firstName + "is enrolled in total of" +this.courseList.length + "courses";
   },

};

var courseList= true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React Js");
console.log(user.getCourseCount());

