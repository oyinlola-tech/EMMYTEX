javascript
// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-bars');
        menuBtn.querySelector('i').classList.toggle('fa-times');
    });

    // Form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const address = document.getElementById('address').value;
            
            if (!name || !phone || !email || !service || !date || !address) {
                alert('Please fill in all required fields');
                return;
            }
            
            // In a real application, you would send this data to your server
            // For this demo, we'll just show a success message
            alert('Booking request submitted successfully! We will contact you shortly to confirm your appointment.');
            bookingForm.reset();
        });
    }

    // Initialize floating animations
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((el, index) => {
        // Add delay to each element for staggered animation
        el.style.animationDelay = `${index * 0.2}s`;
    });

    // Create simple 3D cube
    const scene = document.getElementById('threeDScene');
    scene.innerHTML = `
        <div style="width: 200px; height: 200px; position: relative; transform-style: preserve-3d; transform: rotateX(-20deg) rotateY(-20deg); animation: rotate 15s infinite linear; margin: 50px auto;">
            <div style="position: absolute; width: 200px; height: 200px; background: rgba(233, 196, 106, 0.8); transform: translateZ(100px);"></div>
            <div style="position: absolute; width: 200px; height: 200px; background: rgba(42, 157, 143, 0.8); transform: translateZ(-100px);"></div>
            <div style="position: absolute; width: 200px; height: 200px; background: rgba(231, 111, 81, 0.8); transform: rotateY(90deg) translateZ(100px);"></div>
            <div style="position: absolute; width: 200px; height: 200px; background: rgba(231, 111, 81, 0.8); transform: rotateY(90deg) translateZ(-100px);"></div>
            <div style="position: absolute; width: 200px; height: 200px; background: rgba(38, 70, 83, 0.8); transform: rotateX(90deg) translateZ(100px);"></div>
            <div style="position: absolute; width: 200px; height: 200px; background: rgba(38, 70, 83, 0.8); transform: rotateX(90deg) translateZ(-100px);"></div>
        </div>
        <style>
            @keyframes rotate {
                0% { transform: rotateX(-20deg) rotateY(0deg); }
                100% { transform: rotateX(-20deg) rotateY(360deg); }
            }
        </style>
    `;
});