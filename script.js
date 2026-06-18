document.addEventListener('DOMContentLoaded', () => {
    const revealItems = document.querySelectorAll('.section-reveal');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach(item => item.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.15
    });

    revealItems.forEach(item => observer.observe(item));
});
