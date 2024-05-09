//Another aproach of defining object

var User = {
    name : "",
    getUserName : function(){
        console.log("User name is :",this.name);
    },
};

var aayush = Object.create(User);
console.log(aayush);                  // Gives empty object
aayush.name = "Aayush";
aayush.getUserName();

//Note : Things becomes weird when you want ot use the constructor

var sam = Object.create(User, {
    name : { value : "sammy"},
    courseCount :  { value : 10},
});

sam.getUserName();