// Changes the message in the submit button to THANK YOU
const submitButtonjs = document.querySelector('#submitButton');

function submitClick() {
    submitButtonjs.value = "Thank You!"
    console.log("Thank you!")
}

// Clicking in Contact (navbar), takes you to the contact form
submitButtonjs.addEventListener('click', submitClick);

const contactButtonjs = document.getElementById('contactButton');
const contactFormTitle = document.getElementById('contact');

function scrollToContact() {
    contactFormTitle.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
    });
    console.log("Scrolling to contact")
}

contactButtonjs.addEventListener('click', scrollToContact);


