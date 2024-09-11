// Q:1 Create a new button element . Given it a text "Click Me", background-color:red & color:white  Incert the button as the first element inside the body tag

let newbutton = document.createElement("button")
newbutton.innerText = "Click Me"

newbutton.style.backgroundColor = "red"
newbutton.style.color = "white"

document.querySelector("body").prepend(newbutton)

// avv.prepend(newbutton)

// let css = document.querySelector("button")
// css.style.backgroundColor = "red"
// css.style.color = "white"


// Q2: Create a <p> tag in html , give it a class & some styling. Now create a new class in css and try to append this class to the <p> element. Did you notice , How you overwrite the class name when you add a new one ? Solve this problem using classList

// let para = document.createElement("p")
// para.setAttribute("class", "avv")
// para.innerHTML = " <i> Hi I am avijit </i> "
// para.style.backgroundColor = "hotpink"
// document.querySelector("body").append(para)

let para = document.querySelector("p")
para.classList.add("newclass")  // add new class 
// para.classList.remove("newclass") // remove class 