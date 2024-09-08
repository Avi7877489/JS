// Get Attribute Value !
let divv = document.querySelector("div")

console.log(divv)

let idd = divv.getAttribute("id")
console.log(idd)

let namee = divv.getAttribute("name")
console.log(namee)

let par = document.querySelector("p")
console.log(par.getAttribute("class"))

// let prr = par.getAttribute("class")
// console.log(prr)

// Set Attribute Value !

let avv = document.querySelector("div")
console.log(avv.setAttribute("name", "new-name"))

let pp = document.querySelector("p")
console.log(pp.setAttribute("class", "new"))

// Node Style !

let cs = document.querySelector("div")
cs.style.backgroundColor = "green"
cs.style.backgroundColor = "red"

// cs.style.visibility = "hidden"

cs.style.fontSize = "20px"
cs.innerText = "Hello"  // 10:39

