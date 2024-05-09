const uno = () => {
    return "I am one";
}

// const dos = () => {
//     setTimeout(() => {
//         return "I am two";          
//     }, 3000)
// };

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am two");
    }, 3000);
  })
};




const tres = () => {
    return "I am three";
}

const callMe = async () => {   //Whenever you are making such call inside the method you have to make that method asynchronous
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();  // All the values for which you are making asynchronous call and you are 
    console.log(valTwo); //waiting for few minutes there you have to use keyword await


    let valThree = tres();
    console.log(valOne);
};

callMe();