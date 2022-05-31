// Changes the message in the submit button to THANK YOU
const submitButtonjs = document.querySelector('#submitButton');

function submitClick() {
    submitButtonjs.value = "Thank You!"
    console.log("SUBMIT button pressed")
}

submitButtonjs.addEventListener('click', submitClick);

// Clicking in Contact (navbar), takes you to the contact form

const contactButtonjs = document.getElementById('contactButton');
const contactFormTitle = document.getElementById('contact');

function scrollToContact() {
    contactFormTitle.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
    });
    console.log("Scrolled to contact form")
}

contactButtonjs.addEventListener('click', scrollToContact);

// Clicking in ABOUT (navbar), takes you to the ABOUT section

const aboutButtonjs = document.getElementById('aboutButton');
const aboutHeader = document.getElementById('headerAboutMe');

function scrollToAbout() {
    aboutHeader.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
    console.log("Scrolled to about section")
}

aboutButtonjs.addEventListener('click', scrollToAbout);

// Clicking in PORTFOLIO (navbar), takes you to the PORTFOLIO Slider

const portfolioButtonjs = document.getElementById('portfolioButton');
const portfolioHeader = document.getElementById('headerPortfolio');

function scrollToPortfolio() {
    portfolioHeader.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
    });
    console.log("Scrolled to portfolio slider")
}

portfolioButtonjs.addEventListener('click', scrollToPortfolio);

// Slider animation
// Initialize with value 1
let slideIndex = 1;
showDivs(slideIndex);

// Clicking the arrow's function
function plusDivs(n) {
    showDivs(slideIndex += n)
};


function showDivs(n) {
    let i;
// Create element in JS for Slide List of Pictures
    let mySlidesJS = document.getElementsByClassName("mySlides");
// Check if n is bigger than the amount of pictures, reset to 1 if true
    if (n > mySlidesJS.length) {slideIndex = 1}; 
// Check if n is lower than 1 (clicking left on picture 1), then reset to last picture of the list
    if (n < 1) {slideIndex = mySlidesJS.length};
// Loop through the list and "hide" all the pictures
    for (i = 0; i < mySlidesJS.length; i++) {
        mySlidesJS[i].style.display = "none"; 
    };
// Show the picture with the right index (index in the array goes from 0 to n)
    mySlidesJS[slideIndex-1].style.display = "block"; 
};
