// NOTE :- Maps are not objects they are completely diffrent
// Maps store values in key-value pairs

var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

// how to grab values in maps

//using for-of loop

// for(let key of myMap.keys()){
//     console.log(`Key is ${key}`);
// }

// for(let value of myMap.values()){
//     console.log(`Key is ${value}`);
// }


//when we are using the for-of loop we first get the key & value
for(let [key, value] of myMap){
    console.log(`Key is ${key} and Value is ${value}`);
}
console.log("\n");

//when we use things like modern version of for-each in those values the loop is designed in such a way that it
//understands that we are doing something with the values and not the indexes and here in maps the keys are 
//considered as indexes, so thats why it dosen't gives the keys directly

// myMap.forEach( (key) => console.log(`${key}`));

console.log("Using FOR-Each loop\n");

myMap.forEach( (value) => console.log(`${value}`));
console.log("\n");

console.log("Printing both key and values using for-each\n");

myMap.forEach( (v,k) => console.log(`${v} and key is ${k}`));


//For-of loop will always gives the key first
//For-each will always gives the value first

myMap.delete(2);
console.log(myMap);