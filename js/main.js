let navLinks = document.querySelectorAll("ul.navbar-nav a")
let sections = document.querySelectorAll("main > div > section")
let button = document.querySelector('button.navbar-toggler')

// initialisation
sections.item(0).classList.add('current')
sections.forEach(function (el) {
    el.setAttribute('aria-hidden', true)
    el.setAttribute('tabindex', -1)
})
sections.item(0).setAttribute('aria-hidden', false)

// Function to change the visible section when clicking on the navbar links
let changeTab = function (link) {
    let currentSection = document.querySelector(link.hash)
    
    // Remove the current class on all the sections
    sections.forEach(function (el) {
        el.classList.remove('current');
        el.setAttribute('aria-hidden', true)
    })

    currentSection.classList.add('current')
    currentSection.setAttribute('aria-hidden', false)

    if (window.innerWidth < 768) {
        button.click()
    }
    currentSection.focus()
}

// Create an event listener for each navbar link to trigger the changeTab function
navLinks.forEach(function (el) {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        changeTab(event.target)
    })
})