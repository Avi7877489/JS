console.log("Hello World")
// alert("Code with Avi")
document.title = " Avi the coder"
console.log(document.body)
console.dir(document.body) 

// document.body.childNodes[1]. innerText = "abcd";

// DOM MANIPULATION ?

// SELECTION WITH ID

// let heado = document.getElementById("heading")
// console.dir(heado)

// SELECTING WITH CLASS

let abb = document.getElementsByClassName("head")
console.dir(abb)
console.log(abb)

// SELECTING WITH TAG

let para = document.getElementsByTagName("p")
console.dir(para)

// QUERY SELECTOR

let element = document.querySelector("p")  // when use class wright dought in the first like (.classname)
console.dir(element) //  when use id wright hass in the first like (# myid)

// let elementt = document.querySelectorAll("p")  // when use class wright dought in the first like (.classname)
// console.dir(elementt)   // id does not use allquaryselector

// Inner Text / Inner HTMl


let div = document.querySelector("div")
console.dir(div)

let hedd = document.querySelector("h3")
console.dir(hedd)
// hedd.innerText = "New-Heading"
// hedd.innerHTML = "<i> New-Heading </i>"

// Practice Question 1

// let avv = document.querySelector("h2")
// console.log(avv.innerText)
// avv.innerText = avv.innerText + " From appna collage"


let ad = document.querySelector("h2")
console.log(ad.innerText)
ad.innerText = ad.innerText + " From Appna College Student"

// Practice Question 2

let divvv = document.querySelectorAll(".box")

let idx = 1

for ( div of divvv) {
   div.innerText =  `new unique value ${idx}`
    // div.innerText = " new fj " + idx
    idx++
    
}

// divvv[0].innerText = " Unique Value 1"
// divvv[1].innerText = " Unique Value 2"
// divvv[2].innerText = " Unique Value 3"
