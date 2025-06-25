// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// Mobile Navigation Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced navbar background on scroll with shadcn/ui colors
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'hsl(var(--background) / 0.95)';
            navbar.style.backdropFilter = 'blur(12px)';
            navbar.style.borderBottom = '1px solid hsl(var(--border))';
        } else {
            navbar.style.backgroundColor = 'hsl(var(--background) / 0.8)';
            navbar.style.backdropFilter = 'blur(8px)';
            navbar.style.borderBottom = '1px solid transparent';
        }
    }
});

// Enhanced intersection observer for shadcn/ui animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Enhanced fade-in animation for shadcn/ui components
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-card, .skill-category, .platform-card, .article-card, .contact-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Fetch and update latest Substack article (if needed)
async function updateSubstackArticle() {
    try {
        // This function can be used to dynamically update the latest article
        // For now, it's a placeholder since GitHub Actions handles this
        const articleElement = document.getElementById('substack-article');
        if (articleElement) {
            // Add loading state or update logic here if needed
            console.log('Substack article element found');
        }
    } catch (error) {
        console.log('Error updating Substack article:', error);
    }
}

// Add loading animation for external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
        this.style.opacity = '0.7';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 200);
    });
});

// Add scroll-to-top functionality
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Create scroll-to-top button with shadcn/ui styling
const createScrollButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i data-lucide="arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: var(--radius);
        background-color: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
        border: 1px solid hsl(var(--border));
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;
    
    button.addEventListener('click', scrollToTop);
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = 'var(--shadow-xl)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'var(--shadow-lg)';
    });
    
    document.body.appendChild(button);
    
    // Initialize icon after adding to DOM
    lucide.createIcons();
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        } else {
            button.style.opacity = '0';
            button.style.transform = 'scale(0.8)';
        }
    });
};

// Initialize scroll button
document.addEventListener('DOMContentLoaded', createScrollButton);

// Enhanced hover effects for shadcn/ui components
document.addEventListener('DOMContentLoaded', () => {
    // Add enhanced hover interactions
    const cards = document.querySelectorAll('.about-card, .skill-category, .platform-card, .article-card, .contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Add skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-1px)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0)';
        });
    });
});

// Mobile menu hamburger animation
const addMobileMenuAnimation = () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileMenuBtn && hamburger) {
        mobileMenuBtn.addEventListener('click', () => {
            const isActive = mobileMenuBtn.classList.contains('active');
            
            if (isActive) {
                hamburger.style.transform = 'rotate(45deg)';
                hamburger.style.backgroundColor = 'transparent';
            } else {
                hamburger.style.transform = 'rotate(0deg)';
                hamburger.style.backgroundColor = 'hsl(var(--foreground))';
            }
        });
    }
};

// Initialize mobile menu animation
document.addEventListener('DOMContentLoaded', addMobileMenuAnimation);