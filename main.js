const container = document.querySelector(".container")
const success = document.querySelector(".success")

const emailDiv = document.querySelector(".email")
const emailEl = document.querySelector("#email")
const subscriptionBtn = document.querySelector("#subscription")
const dismissBtn = document.querySelector("#dismiss")
const submittedEmail = document.querySelector(".submitted-email")

subscriptionBtn.addEventListener('click', submitEmail)
dismissBtn.addEventListener('click', toggleCards)

function toggleCards() {
    container.classList.toggle("hidden")
    success.classList.toggle("hidden")
}

function validateEmail(email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

function submitEmail(e) {
    e.preventDefault()

    if(validateEmail(emailEl.value)) {
        submittedEmail.innerText = emailEl.value
        toggleCards()
        emailEl.value =""
        emailDiv.classList.remove("error")

    }

    else {
        emailDiv.classList.add("error")
    }
}