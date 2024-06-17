
const password = "Jingles"
const selectInput = document.querySelector("#input")

document.querySelector("#button").addEventListener("click", function(e) {
    e.preventDefault()

    if (selectInput.value === password) {
        location.assign("/pageTwo.html")
    } else {
        alert("Password is incorrect")
        selectInput.value = ""
    }

})