const uno = () => {
    console.log("I am one");
}

const dos = () => {
    setTimeout(() => {
        console.log("whohooooo");           //Big picture loading up on website
    }, 3000)
    console.log("I am two");
}

const tres = () => {
    console.log("I am three");
}

uno();
tres();
dos();