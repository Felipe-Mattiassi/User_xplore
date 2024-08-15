
const headerLinks = document.querySelectorAll('.button') 

function getDistanceFromTheTop (element) {
    const id = element.getAttribute("href")
    const section = document.querySelector(id)
    return document.querySelector(id).offsetTop
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop, 
        behavior:"smooth",
    })
}


function scrollToSection(e) {
    e.preventDefault()
    const element = e.target
    const distanceFromTheTop = getDistanceFromTheTop(e.target)
    nativeScroll(distanceFromTheTop)

}

headerLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})
