const form = document.querySelector("form")
const nameInput = document.querySelector("#name") // # = une ID
const nameError = document.querySelector("#name-error")

const msgInput = document.querySelector("#message") // # = une ID
const msgError = document.querySelector("#msg-error")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    if (nameInput.value === "") {
        nameError.classList.remove("hidden")
    }
    else {
        nameError.classList.add("hidden")
    }
    if (msgInput.value.length < 10) {
        // .length = len() en python, donc si chaine de caractère de msgInput < 10
        msgError.classList.remove("hidden")
    }
    else {
        msgError.classList.add("hidden")
    }
})

form.addEventListener("submit", function(event) {
    event.preventDefault()
    if (nameInput.value === "" || msgInput.value.length < 10) {
        // || = OR et && = AND
        }
    else {
        alert("Le message a bien été envoyé! Merci")
        form.reset()
    }
})
