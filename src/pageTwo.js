// letters to bounce in from top of screen when page loads
gsap.from(".name", {duration: 4, y: -200, stagger: 1, ease: "bounce"})

//button to logout
document.querySelector("#option-three").addEventListener("click", function(e) {
    e.preventDefault()
    location.assign("/index.html")

})

//button for drop down menu
const dropDown = document.querySelector(".dropDown")
const lines = document.querySelector(".spin")

document.querySelector("#menu-button").addEventListener("click", function(e) {
    e.preventDefault()
    dropDown.classList.toggle("dropDownActive")
    lines.classList.toggle("rotateSpin")
})

//button to follow on tube 
document.querySelector("#youTube").addEventListener("click", function(e) {
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://www.youtube.com/@jasminbayne8789")
    }, 1500)

})

//button for side bar to toggle between classes
const selectButton = document.querySelector("#box-button")
const changeBoxClass = document.querySelector(".box-container")
const changeArrowOne = document.querySelector(".arrowOne")
const changeArrowTwo = document.querySelector(".arrowTwo")
let newSound = new Audio("./images/karatepunch.wav")
selectButton.addEventListener("click", function(e) {
    e.preventDefault()
    changeBoxClass.classList.toggle("box-active")
    changeArrowOne.classList.toggle("arrowOne-active")
    changeArrowTwo.classList.toggle("arrowTwo-active")
    newSound.play()
})

//buttons for images to transition to the right of the screen
const slideRight = document.querySelector("#slide")
const selectSlider = document.querySelector(".gallery-slider")

slideRight.addEventListener("click", function(e) {
    e.preventDefault()
    selectSlider.classList.toggle("gallery-slider-active")
})
