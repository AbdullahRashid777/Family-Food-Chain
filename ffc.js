// 1. Scroll to Section Smoothly on Navigation Click
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Scroll to the section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 2. Form Validation (Basic)
const form = document.querySelector('.contact form');
form.addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');

    if (!name.value || !email.value || !message.value) {
        e.preventDefault(); // Prevent form submission if any field is empty
        alert('Please fill in all fields.');
    } else {
        alert('Your message has been sent!');
    }
});

// 3. Mobile Menu Toggle for Small Screens (Responsive Design)
const menuIcon = document.createElement('div');
menuIcon.classList.add('menu-icon');
document.querySelector('header .container').appendChild(menuIcon);

const nav = document.querySelector('nav ul');
menuIcon.addEventListener('click', function () {
    nav.classList.toggle('active');
});

// Adjusting menu styling for mobile view in CSS (Add this in the CSS file)
