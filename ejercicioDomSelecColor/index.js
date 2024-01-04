let inputColor = document.getElementById("inputColor")
let button = document.getElementById("button")
let colorShowed = document.getElementById("colorShow")
let colorSelect = document.getElementById("colorSelect")
let inputContainer = document.getElementById("inputContainer")


button.addEventListener("click", () => {
    console.log("hola")
    colorShowed.style.backgroundColor = inputColor.value
    colorSelect.innerText = inputColor.value
    colorSelect.style.borderColor = inputColor.value
    colorShowed.style.backgroundColor = inputColor.value
    inputContainer.style.borderColor = inputColor.value
    
})


console.log(colorSelect.textContent)