alert("Enter a ")
let a = prompt("enter the number:", "885")
a = Number.parseInt(a)
alert("you entered a of type: " + (typeof a))

let write = confirm("Do you want to write it ti the page")

if(write){
    document.write(a)
}else{
document.write("plz allow me to write")
}
