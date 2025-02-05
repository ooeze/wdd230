document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.getElementById('darkMode');
    const body = document.body;

    // Check for saved dark mode preference
    const darkMode = localStorage.getItem('darkMode');

    // Function to enable dark mode
    const enableDarkMode = () => {
        body.classList.add('darkMode');
        darkModeButton.textContent = '🌜';
        localStorage.setItem('darkMode', 'enabled');
    };

    // Function to disable dark mode
    const disableDarkMode = () => {
        body.classList.remove('darkMode');
        darkModeButton.textContent = '🌞';
        localStorage.setItem('darkMode', null);
    };

    // Apply saved preference
    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    // Toggle dark mode on button click
    darkModeButton.addEventListener('click', () => {
        if (body.classList.contains('darkMode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // Optional: Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode();
    }
});
