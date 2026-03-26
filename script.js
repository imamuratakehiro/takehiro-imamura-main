// Scroll Animation with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Select hero and other sections separately
    const hero = document.querySelector('.hero');
    const sections = document.querySelectorAll('.section');

    // Initialize hero section - visible on page load
    hero.classList.add('scroll-fade', 'visible');

    // Initialize other sections - hidden initially
    sections.forEach(section => {
        section.classList.add('scroll-fade', 'hidden');
    });

    // Intersection Observer options for hero (fade out when scrolling down)
    const heroObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of hero is visible
    };

    // Callback for hero section
    const heroObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hero is in viewport - show it
                hero.classList.add('visible');
                hero.classList.remove('hidden');
            } else {
                // Hero is leaving viewport - hide it
                hero.classList.remove('visible');
                hero.classList.add('hidden');
            }
        });
    };

    // Create observer for hero
    const heroObserver = new IntersectionObserver(heroObserverCallback, heroObserverOptions);
    heroObserver.observe(hero);

    // Intersection Observer options for sections (fade in when entering)
    const sectionObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    // Callback for other sections
    const sectionObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Section is entering viewport - show it
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else if (entry.boundingClientRect.top > 0) {
                // Section is below viewport - keep it hidden
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
            // Don't hide sections that are above viewport (already viewed)
        });
    };

    // Create observer for sections
    const sectionObserver = new IntersectionObserver(sectionObserverCallback, sectionObserverOptions);

    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
