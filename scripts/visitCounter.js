// Select the visit count element
const visitCountElement = document.getElementById("visitCount");

// Retrieve the stored visit count from localStorage
let visitCount = localStorage.getItem("pageVisits");

// Check if visitCount exists, otherwise initialize it
if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}

// Update localStorage with the new count
localStorage.setItem("pageVisits", visitCount);

// Display the visit count on the page
visitCountElement.textContent = visitCount;

// Lazy Loading Implementation
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('img.lazy');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });

    images.forEach(image => {
        imageObserver.observe(image);
    });
});

// Local Storage Implementation for Visit Message
document.addEventListener("DOMContentLoaded", () => {
    // Get the visit message element
    const visitMessage = document.getElementById("visitMessage");

    // Get the current date in milliseconds
    const currentDate = Date.now();

    // Get the last visit date from localStorage
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        // First visit
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysBetween = Math.floor((currentDate - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));

        if (daysBetween < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} ${daysBetween === 1 ? 'day' : 'days'} ago.`;
        }
    }

    // Store the current visit date
    localStorage.setItem("lastVisit", currentDate);
});

