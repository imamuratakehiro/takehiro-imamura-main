// Scroll Animation with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Select all sections to animate
    const sections = document.querySelectorAll('.hero, .section');

    // Add scroll-fade class to all sections
    sections.forEach(section => {
        section.classList.add('scroll-fade');
    });

    // Intersection Observer options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the section is visible
    };

    // Callback function for observer
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Section is entering viewport
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                // Section is leaving viewport
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
