// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fade-in animations on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Event search filter
document.getElementById('eventSearch').addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  document.querySelectorAll('.event-card').forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(filter) ? '' : 'none';
  });
});

// Form submissions
function handleFormSubmit(formId, successMessage) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert(successMessage);
    form.reset();
  });
}

handleFormSubmit("contactForm", "Thank you! Your message has been sent.");
handleFormSubmit("bookingForm", "Booking request submitted successfully!");
