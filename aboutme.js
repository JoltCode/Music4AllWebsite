//Add more animations for the intro stuff
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

const infoContainer = document.getElementById("scrollSvg")
    infoContainer.addEventListener("click", (e) => {
        //scrollTo(0, window.innerHeight + 1)
        $('html, body').animate({
            scrollTop: window.innerHeight
    }, 500)
})