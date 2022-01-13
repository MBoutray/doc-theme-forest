let navLinks = document.querySelectorAll("ul.navbar-nav a")
let links = document.querySelectorAll("a[href^='#']")
let sections = document.querySelectorAll("main > div > section")
let button = document.querySelector('button.navbar-toggler')

// Function to initialize the sections on page load based on the hash in the URI
let initializeSections = function (startingTab = 0) {
    // If there is no hash, default to the first tab
    if (startingTab === -1) startingTab = 0

    // set the starting attributes on the sections
    sections.item(startingTab).classList.add('current')
    sections.forEach(function (el) {
        el.setAttribute('aria-hidden', true)
        el.setAttribute('tabindex', -1)
    })
    sections.item(startingTab).setAttribute('aria-hidden', false)
}

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

    if (window.innerWidth < 768 && !button.classList.contains("collapsed")) {
        button.click()
    }
    currentSection.focus()
}

// initialisation
document.addEventListener('DOMContentLoaded', function () {
    let windowHash = window.location.hash // Get the hashtag at the end of the URI
    let startingSectionIndex = Array.from(navLinks).findIndex(function (el) { //Return the index of the nav link that corresponds to the hash
        return el.hash === windowHash
    })
    initializeSections(startingSectionIndex) //Initialize using this index
})


// Create an event listener for each link to the tabs to trigger the changeTab function
links.forEach(function (el) {
    el.addEventListener('click', function (event) {
        changeTab(event.target)
    })
})
