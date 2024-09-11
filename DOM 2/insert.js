let newbtn = document.createElement("button")
newbtn.innerText = "click me"
console.log(newbtn)
// Insert Element
// add button on the node like(div,p,..)

let dvv = document.querySelector("div")
// dvv.append(newbtn) // add at the end of the node (inside)
// dvv.prepend(newbtn)  // add at the start of the node (inside)
// dvv.before(newbtn) // adds before the node (Outside)
dvv.after(newbtn)   // adds after the node (Outside)

let Hedding =document.createElement("h1")
Hedding.innerHTML = "<i> Hi, I am new </i>"
document.querySelector("body").prepend(Hedding)  


 // Delete Element  18:02

let para = document.querySelector("p")
para.remove()