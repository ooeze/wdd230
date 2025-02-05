document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const hamburgerIcon = document.getElementById('hamburger');
    const closeIcon = document.getElementById('close');

    // Function to close menu
    const closeMenu = () => {
        navigation.classList.remove('responsive');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
    };

    // Toggle menu when hamburger/close button is clicked
    menuButton.addEventListener('click', () => {
        if (navigation.classList.contains('responsive')) {
            closeMenu();
        } else {
            navigation.classList.add('responsive');
            hamburgerIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            menuButton.setAttribute('aria-expanded', 'true');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuButton.contains(e.target) && !navigation.contains(e.target)) {
            closeMenu();
        }
    });

    // Close menu when clicking a nav link
    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
});
