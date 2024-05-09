var returnedValue = Math.max(2, 4, 8, 9, 6, 2, 7);
console.log(returnedValue);

var myObj = {}

Object.assign(myObj, {a:1, b:2, c:3}, {z:9, y:8, x:7})
console.log(myObj);



function sumOne(a , b) {
  return a+b;
}

var myA = [5, 4, 1];

console.log(sumOne(5, 4, 1)); //Anything which the function don't understand will be ignored
console.log(sumOne(myA));

//When your function expects individual values but your value comes up as a pack or bunch so in that case if you 
//don't want to change the function definition all you can do is

console.log(sumOne(...myA));  //spread operator

// Spread operator takes the group(array or object) and it tries to spread (seperate) the value and pass them as individual values


                            //REST OPERATOR

    //when you are not sure that how many arguments are gonna come in the you put three dots (...) followed by a variable name     
    //expect that the args is gonna be array and we need to loop through the values  
    
    
function sumTwo(...args){
    console.log(args);   //args converts individual values in the array

    let sum = 0;
    for (const arg of args){
        sum += arg;
    }
    return sum;
}                            

console.log(sumTwo(2, 3, 1, 5, 7));

// if you want to return product of first two values and add up the rest of value then......
function sumTwo(a, b, ...args){
    console.log(args);  
    let multi = a*b;
    let sum = 0;
    for (const arg of args){
        sum += arg;
    }
    return [sum, multi];
}                            

console.log(sumTwo(2, 3, 1, 1, 1));