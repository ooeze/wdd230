document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("[data-src]");

    const imgOptions = {
        threshold: 0,
        rootMargin: "0px 0px 50px 0px"
    };

    const loadImages = (image) => {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.onload = () => {
            image.removeAttribute("data-src");
        };
    };

    if ("IntersectionObserver" in window) {
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImages(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, imgOptions);

        images.forEach(img => imgObserver.observe(img));
    }
}); 