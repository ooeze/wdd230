// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    try {
        // Get the elements
        const currentYearElement = document.querySelector("#currentyear");
        const lastModifiedElement = document.querySelector("#lastModified");

        // Set current year
        if (currentYearElement) {
            const year = new Date().getFullYear();
            currentYearElement.textContent = year;
        }

        // Set last modified date
        if (lastModifiedElement) {
            lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
        }

        // Log for debugging
        console.log("Date elements updated successfully");
    } catch (error) {
        console.error("Error updating date elements:", error);
    }
}); 