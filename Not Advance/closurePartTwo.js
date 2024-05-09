function doAddition(x){
    console.log("hello");
    return function(y){
        return x+y;
    }
}
 
var add5 = doAddition(4);
console.log("hi");
console.log(add5(5));


console.log(doAddition(5)(6));                       //hello and 11

//doAddition()()()  - called as 'curring'
