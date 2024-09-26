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
        } else {
            header.style.backgroundColor = 'transparent'; // Clear background
        }
    });

    // Display current year in the footer
    const footerYear = document.createElement('p');
    footerYear.textContent = `© ${new Date().getFullYear()} Krutik Vanjara`;
    document.querySelector('footer').appendChild(footerYear);
});


    // Display current year in the footer
    const footerYear = document.createElement('p');
    footerYear.textContent = `© ${new Date().getFullYear()} Krutik Vanjara`;
    document.querySelector('footer').appendChild(footerYear);
});




