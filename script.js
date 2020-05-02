let css = document.querySelector("h3")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let gradient = document.getElementById("gradient")
 let object = {

 }
 object.
color1.addEventListener("input", event => {
	gradient.style.background = 
		"linear-gradient(to right, " 
		+ color1.value + "," + color2.value + ")" 
})


color2.addEventListener("input", event => {
	gradient.style.background = 
		"linear-gradient(to right, " 
		+ color1.value + "," + color2.value + ")" 
})

