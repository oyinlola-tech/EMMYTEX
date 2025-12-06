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

//     // Form submission
//     const bookingForm = document.getElementById("bookingForm");

// bookingForm.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   // Collect form data
//   const data = {
//     name: document.getElementById("name").value.trim(),
//     phone: document.getElementById("phone").value.trim(),
//     email: document.getElementById("email").value.trim(),
//     service: document.getElementById("service").value,
//     date: document.getElementById("date").value,
//     address: document.getElementById("address").value.trim(),
//     notes: document.getElementById("notes").value.trim(),
//   };

//   // Disable button to prevent multiple submissions
//   const btn = bookingForm.querySelector("button");
//   btn.disabled = true;
//   btn.textContent = "Booking...";

//   try {
//     const res = await fetch("/api/booking", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const result = await res.json();

//     if (result.success) {
//       alert("Booking request sent successfully!");
//       bookingForm.reset();
//     } else {
//       alert("Failed to send booking request.");
//     }
//   } catch (err) {
//     alert("Something went wrong. Please try again.");
//   }

//   btn.disabled = false;
//   btn.textContent = "Book Now";
// });

    // Initialize floating animations
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((el, index) => {
        // Add delay to each element for staggered animation
        el.style.animationDelay = `${index * 0.2}s`;
    });

    // // Create simple 3D cube
    // const scene = document.getElementById('threeDScene');
    // scene.innerHTML = `
    //     <div style="width: 200px; height: 200px; position: relative; transform-style: preserve-3d; transform: rotateX(-20deg) rotateY(-20deg); animation: rotate 15s infinite linear; margin: 50px auto;">
    //         <div style="position: absolute; width: 200px; height: 200px; background: rgba(233, 196, 106, 0.8); transform: translateZ(100px);"></div>
    //         <div style="position: absolute; width: 200px; height: 200px; background: rgba(42, 157, 143, 0.8); transform: translateZ(-100px);"></div>
    //         <div style="position: absolute; width: 200px; height: 200px; background: rgba(231, 111, 81, 0.8); transform: rotateY(90deg) translateZ(100px);"></div>
    //         <div style="position: absolute; width: 200px; height: 200px; background: rgba(231, 111, 81, 0.8); transform: rotateY(90deg) translateZ(-100px);"></div>
    //         <div style="position: absolute; width: 200px; height: 200px; background: rgba(38, 70, 83, 0.8); transform: rotateX(90deg) translateZ(100px);"></div>
    //         <div style="position: absolute; width: 200px; height: 200px; background: rgba(38, 70, 83, 0.8); transform: rotateX(90deg) translateZ(-100px);"></div>
    //     </div>
    //     <style>
    //         @keyframes rotate {
    //             0% { transform: rotateX(-20deg) rotateY(0deg); }
    //             100% { transform: rotateX(-20deg) rotateY(360deg); }
    //         }
    //     </style>
    // `;
});