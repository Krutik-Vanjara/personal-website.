document.addEventListener('DOMContentLoaded', () => {
    console.log("Profile website loaded!");

    // Smooth scroll for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = 60; // Adjust if you change the nav height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Change header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#000'; // Black color
            header.style.transition = 'background-color 0.3s ease-in-out'; // Smooth transition for background color
        } else {
            header.style.backgroundColor = 'transparent'; // Clear background
        }
    });

    // Smooth fade-in effect for sections
    const sections = document.querySelectorAll('section');
    const fadeInOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('fade-in');
                fadeInOnScroll.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    sections.forEach(section => {
        fadeInOnScroll.observe(section);
    });

    // Display current year in the footer
    const footerYear = document.createElement('p');
    footerYear.textContent = `© ${new Date().getFullYear()} Krutik Vanjara`;
    document.querySelector('footer').appendChild(footerYear);
});







