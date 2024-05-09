//Note - Some properties are attached to the entire object and some properties are attached towards the method
// inside the object


// borrowing of the method
const aayush = {
    firstName : "Aayush",
    lastName : "Kushwaha",
    role : "Admin",
    courseCount : 10,
    getInfo : function(){                    //this keyword reference the value inside the object
        console.log(
           `First name is ${this.firstName}    
            last name is ${this.lastName}
            his role is ${this.role}
            and he is studying ${this.courseCount} courses
            `);
    },
};


const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4,

};

/*
aayush.getInfo();


// bind - it binds the object, but you can change this binding too
// bind always gives you the reference back and you have to run that reference

aayush.getInfo.bind(dj);  // now this reference is pointing towards dj

aayush.getInfo.bind(dj)();   //running directly

//or

var djInfo = aayush.getInfo.bind(dj);
djInfo();

*/

aayush.getInfo.call(dj);  // call method directly calls it