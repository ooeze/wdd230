document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var mobileNav = document.getElementById('mobile-nav');

    hamburgerMenu.addEventListener('click', function () {
        if (mobileNav.style.display === 'flex') {
            mobileNav.style.display = 'none';
            hamburgerMenu.classList.remove('open');
        } else {
            mobileNav.style.display = 'flex';
            hamburgerMenu.classList.add('open');
        }
    });
});