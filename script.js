// Smooth Scroll on Click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navbar Effect on Scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// JavaScript for Email Subscription Form Submission
document.getElementById('subscription-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const emailInput = document.getElementById('email').value;
    
    fetch('https://script.google.com/macros/s/AKfycbydlvrAhVjApTvJKiRDN9Pz-ylMqutjbLQhFqTrSrxQc8aJJoZupaLpNpSDcGDnzOcA/exec', { // Replace with your web app URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email: emailInput })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('Thank you for subscribing!'); // Success message
            document.getElementById('subscription-form').reset(); // Clear the form
        } else {
            alert('There was an error, please try again.'); // Error message
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error, please try again.'); // Error message
    });
});
