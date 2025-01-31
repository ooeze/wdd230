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
