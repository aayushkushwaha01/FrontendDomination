var user = {
    firstName :"Aayush",          // KEY-VALUE pairs
    lastName : "Kushwaha",
    role: "Admin",
    loginCount: 44,
    facebookSignedIn: true,
};

//Accessing Object values
console.log(user.firstName);
console.log(user["lastName"]);  //Another way of accessing object

//Updating object values
console.log(user.loginCount);
user.loginCount=50;
console.log(user.loginCount);


//console.log(user);
console.table(user);