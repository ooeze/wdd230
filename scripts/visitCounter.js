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
document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');

    const currentDate = new Date();
    const currentTime = currentDate.getTime();

    if (!lastVisit) {
        localStorage.setItem('lastVisit', currentTime);
        visitMessage.innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(parseInt(lastVisit));
        const timeDifference = currentTime - lastVisitDate.getTime();
        const oneDay = 24 * 60 * 60 * 1000;
        const daysDifference = Math.floor(timeDifference / oneDay);

        if (daysDifference < 1) {
            visitMessage.innerHTML = "Back so soon! Awesome!";
        } else {
            const dayText = daysDifference === 1 ? "day" : "days";
            visitMessage.innerHTML = `You last visited ${daysDifference} ${dayText} ago.`;
        }

        // Update last visit date
        localStorage.setItem('lastVisit', currentTime);
    }
});

