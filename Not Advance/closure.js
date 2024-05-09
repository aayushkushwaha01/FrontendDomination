function init(){
    var firstName = "Aayush";
    console.log("I am init")
    function sayFirstName(){
        console.log(firstName);
    }

    return sayFirstName;
}

var value = init();  

// init mounts up and on top of that sayFirstName mounts up, but since we get the reference of sayFirstName it 
// is not coompletely gone, that why init cannot goes away

value();  //here, technically sayFirstName is value


// or

//init()();


//init is not gone away because it has some purpose to serve, so its reference is not deleted and thats
//why we get access to the sayFirstName

