class User{
    //NOTE : If you don't create constructor inside class it will be automatically created
    //NOTE : If you are using any variable inside constructor you don't need to declare it inside class

    constructor(name, email){
        this.name = name;       //this.name is the property of the class user while 'name'is actually the name which is passed on in the constructor
        this.email = email;   
    }
    #courseList = [];  //private variable

    getInfo(){
        return { name: this.name, email : this.email };
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }

    getCourseList() {
        return this.#courseList;
    }
}

// let aayush = User("aayush", "aayush@gmail.com");  //not a good approach

//Keeping class completely seperate and later use them in some another file  !


module.exports =User;  //You can throw the entire array, some of the classes, all of the classes, some of the methods


const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular BootCamp");

console.log(rock.getCourseList());
console.log(rock.courseList);           //undefined bcz of private variable


// NOTE : Getter is simply a method which helps you to grab some of the information of the class which is private
//Not everybody can access all of your objects directly

//In getters we usually just return the variables we don't expect any parameters
//In setters we actually expect some parameters bcz you want to set some value which is private in the class