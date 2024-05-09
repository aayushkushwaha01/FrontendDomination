const myStates=[
    "Uttar Pradesh",
    "Mumbai",
    "Delhi",
    55,
    "Rajasthan",
    "Assam",
];

// for(let i=0; i<myStates.length; i++){
//     if(typeof myStates[i] != "string") break;
//     console.log("I love "+myStates[i]+"!");
// }


// let i=0;

// while(i < myStates.length){
//     console.log(myStates[i])
//     i++;
// }


let i=0;

do {
    console.log(myStates[i]);
    i++;
}while(i < myStates.length);