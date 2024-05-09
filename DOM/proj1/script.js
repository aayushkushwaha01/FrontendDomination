// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");

// //counter.innerHTML=1000;

// let count = 1;

// setInterval(() => {
//    if(count<1000){
//     count++;
//     counter.innerHTML = count;
//    }
// },1)


// //If you want your code to run after certain time

// setTimeout(() => {
//     followers.innerText = "Followers on Instagram";
// },4500)

var counter = document.getElementById("counter");
var followers = document.getElementById("followers");

//counter.innerHTML=1000;

let count = 1;

setInterval(() => {
   if(count<1000){
    count++;
    counter.innerHTML = count;
   }
},1)


//If you want your code to run after certain time

setTimeout(() => {
    followers.innerText = "Followers on Instagram";
},4500)