
function isEven(num){
    // if(num % 2===0){
    //     return true;
    // }
    return num % 2===0;
}


/*
//Another way to write function

var isEven = function(num){
    return num % 2 ===0;
}
console.log(isEven(8));
*/

/*
// 3rd another way to write function
//Arrow function
var isEven = (num) => {
    return num % 2 === 0;
}

console.log(isEven(7));
*/

var result = [2,4,6,8].every(isEven);  // 'every' runs test for every single element in the array
console.log(result);