document.addEventListener("DOMContentLoaded", () => {
    // Get the visit message element
    const visitMessage = document.getElementById("visitMessage");
    
    // Get the current visit time in milliseconds
    const currentVisit = Date.now();

    // Get the last visit time from localStorage
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        // First visit
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate time difference in days
        const daysBetween = Math.floor((currentVisit - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));

        if (daysBetween < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            // Handle singular/plural for "day/days"
            const dayWord = daysBetween === 1 ? "day" : "days";
            visitMessage.textContent = `You last visited ${daysBetween} ${dayWord} ago.`;
        }
    }

    // Store the current visit time in localStorage
    localStorage.setItem("lastVisit", currentVisit);
});