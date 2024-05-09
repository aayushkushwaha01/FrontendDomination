// Challenges of the project: -
// 1 -  Grab the unordered list in indexedDB.html
// 2 -  Construct the list item and inject it in unordered list
// (Create element list 'li' inject class) and then inject node(text) create another element span and inject it inside list-item 


// Array of Objects
const courses = [
  {
    name : "Complete ReactJS course",
    price : "2.1"
  },
  {
    name : "Complete Angular course",
    price : "2.7"
  },
  {
    name : "Complete MERN course",
    price : "2.3"
  },
  {
    name : "Complete Django course",
    price : "2.4"
  },
]

// Looping through courses

{/* <li></li> */}

function generateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";

    courses.forEach( course => {
    const li = document.createElement("li")  //creating 'li' element
    li.classList.add("list-group-item")   //adding class in li

       
    const name = document.createTextNode(course.name)    //creating textnode from object name
    li.appendChild(name)   //adding textnode to li

    const span = document.createElement("span")  //creating span element
    span.classList.add("float-right")            //adding class in span


    const price = document.createTextNode("$ " +course.price) 
    span.appendChild(price)

    li.appendChild(span)
    ul.appendChild(li)

      })
}

generateLIST();

// window.addEventListener("load", generateLIST);  //does the same thing as generateLIST()

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
  courses.sort((a,b) => a.price - b.price)
  generateLIST();
})

const button2 = document.querySelector(".btn-primary");
button2.addEventListener("click", () => {
  courses.sort((a,b) => b.price - a.price)
  generateLIST();
})





