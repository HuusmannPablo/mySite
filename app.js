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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n)
};

function showDivs(n) {
  var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
   
}
