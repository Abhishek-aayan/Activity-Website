// script.js

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar
    var navbar = document.querySelector('.navbar');
    
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        // Check the scroll position
        if (window.scrollY > 50) { // If scrolled more than 50px
            navbar.classList.add('scrolled'); // Add shadow class
        } else {
            navbar.classList.remove('scrolled'); // Remove shadow class
        }
    });
});
