// DOM Elements
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const footerLinks = document.querySelectorAll('.footer-links a');

// Navigation functionality
function switchSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update active nav link
    navLinks.forEach(link => {
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Close mobile menu if open
    nav.classList.remove('active');
    burger.classList.remove('active');
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listeners for navigation
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        switchSection(sectionId);
    });
});

// Event listeners for footer navigation
footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        switchSection(sectionId);
    });
});

// Mobile menu toggle
burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('active');
    }
});

// Animation on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.feature, .menu-item, .location-card, .testimonial');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.feature, .menu-item, .location-card, .testimonial');
    
    elements.forEach(element => {
        // Set initial state for animation
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial animation
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
    
    // Images hover effect enhancement
    const images = document.querySelectorAll('.menu-item-image img, .location-image img');
    
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
        });
        
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});

// Order Now button custom animation
const orderButtons = document.querySelectorAll('.btn-primary');

orderButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        button.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transition = 'all 0.3s ease';
        button.style.transform = 'translateY(0) scale(1)';
    });
    
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add a click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            
            // Redirect after animation
            window.open('https://www.youtube.com/', '_blank');
        }, 200);
    });
});

// Testimonial auto-scroll
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function cycleTestimonials() {
    testimonials.forEach((testimonial, index) => {
        if (index === testimonialIndex) {
            testimonial.style.opacity = '1';
            testimonial.style.transform = 'translateY(0)';
        } else {
            testimonial.style.opacity = '0.5';
            testimonial.style.transform = 'translateY(10px)';
        }
    });
    
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

// Uncomment to enable auto-scrolling testimonials
// setInterval(cycleTestimonials, 5000);

// Add subtle parallax effect
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    const scrollPosition = window.scrollY;
    
    if (heroImage) {
        heroImage.style.transform = `rotate(2deg) translateY(${scrollPosition * 0.05}px)`;
    }
});

// Price hover effect
const prices = document.querySelectorAll('.price');

prices.forEach(price => {
    price.addEventListener('mouseover', () => {
        price.style.transform = 'scale(1.1)';
        price.style.transition = 'transform 0.3s ease';
    });
    
    price.addEventListener('mouseout', () => {
        price.style.transform = 'scale(1)';
    });
});

// Form validation for future implementation
function validateForm(e) {
    e.preventDefault();
    // Form validation code would go here
    alert('Thank you for your message! We will get back to you soon.');
    return false;
}