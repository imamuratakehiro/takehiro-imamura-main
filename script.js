// Scroll Animation with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Select all sections to animate
    const sections = document.querySelectorAll('.hero, .section');

    // Add scroll-fade class to all sections and hide them initially
    sections.forEach((section, index) => {
        section.classList.add('scroll-fade');
        if (index === 0) {
            // Show hero section on page load
            section.classList.add('visible');
        } else {
            // Hide other sections initially
            section.classList.add('hidden');
        }
    });

    // Intersection Observer options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the section is visible
    };

    // Callback function for observer
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Section is entering viewport - show it
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                // Section is leaving viewport - hide it
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    };

    // Create observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
});
