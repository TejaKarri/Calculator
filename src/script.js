input = document.getElementById("output-display")
buttons = document.querySelectorAll(".btn")

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.textContent === "AC") {
            input.value = ''
        }
        else if(button.textContent === "C") {
            input.value = input.value.slice(0, -1)
        }
        else if(button.textContent === "=") {
            input.value = eval(input.value)
        }
        else {
            input.value += button.textContent
        }
    })
})
