//These functions don't have any name
//We will be writing arrow function callbacks

var result = [2,4,6,8].every( (e) => {
    return e % 2===0;
})

console.log(result);


//Whenever not using the return keyword, we should not be using curley braces {}

var result = [2,4,7,8].every( (e) => (e % 2===0));

console.log(result);