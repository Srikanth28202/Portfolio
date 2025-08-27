// Mobile Navigation Toggle
function setupNavigationControls() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (!hamburger || !navMenu) return;

    // Reset any previous state
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');

    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-controls', 'primary-navigation');
    navMenu.setAttribute('id', 'primary-navigation');
    navMenu.setAttribute('role', 'menu');

    // Remove previous listeners by cloning
    const newHamburger = hamburger.cloneNode(true);
    hamburger.parentNode.replaceChild(newHamburger, hamburger);

    newHamburger.addEventListener('click', () => {
        const isOpen = newHamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll', isOpen);
        newHamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && newHamburger.classList.contains('active')) {
            newHamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
            newHamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Close on nav link click
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        newHamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
        newHamburger.setAttribute('aria-expanded', 'false');
    }));
}

// Close mobile menu when clicking on a link
// Initial setup
document.addEventListener('DOMContentLoaded', setupNavigationControls);

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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.skill-item, .project-card, .education-item, .contact-item, .soft-skill-item');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

// Skill bars animation
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
};

// Trigger skill bars animation when skills section is in view
const skillsSection = document.querySelector('#skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Typing effect for hero title
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
};

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        typeWriter(nameElement, originalText, 150);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Active navigation link highlighting for multi-page navigation
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
setActiveNavLink();

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact form validation (placeholder for future implementation)
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Social links hover effects
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Scroll to top functionality
const createScrollToTop = () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Initialize scroll to top button
createScrollToTop();

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2563eb !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
    .loaded {
        opacity: 1;
    }
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);

// SPA-style page loader with slide transitions
const spa = (() => {
    const stage = document.createElement('div');
    stage.className = 'spa-stage';

    const fetchPage = async (url) => {
        const res = await fetch(url, { credentials: 'same-origin' });
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        // Remove script tags to avoid double-loading scripts
        doc.querySelectorAll('script').forEach(s => s.remove());
        return doc.body.innerHTML;
    };

    const mountInitial = () => {
        const current = document.createElement('div');
        current.className = 'spa-page';
        // Move current body children into page container
        while (document.body.firstChild) {
            const node = document.body.firstChild;
            if (node === stage) break;
            current.appendChild(node);
        }
        document.body.appendChild(stage);
        stage.appendChild(current);
    };

    const navigate = async (url, direction = 'left') => {
        try {
            const nextHtml = await fetchPage(url);
            const current = stage.querySelector('.spa-page');
            const next = document.createElement('div');
            next.className = 'spa-page ' + (direction === 'left' ? 'enter-from-right' : 'enter-from-left');
            next.innerHTML = nextHtml;
            stage.appendChild(next);

            // Start exit animation for current
            current.classList.add(direction === 'left' ? 'exit-to-left' : 'exit-to-right');

            // Trigger enter animation
            requestAnimationFrame(() => {
                next.classList.add('enter-active');
            });

            // After animation, swap URL and cleanup
            setTimeout(() => {
                stage.removeChild(current);
                next.className = 'spa-page';
                window.history.pushState({}, '', url);
                // Re-run JS initializers for new content
                setupNavigationControls();
                setActiveNavLink();
                rebindLinks();
            }, 400);
        } catch (e) {
            window.location.href = url; // fallback
        }
    };

    const rebindLinks = () => {
        document.querySelectorAll('a[href]:not([target])').forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;
            const isHash = href.startsWith('#');
            const isPdf = href.toLowerCase().endsWith('.pdf');
            const isExternal = href.startsWith('http') && !href.startsWith(window.location.origin);
            if (isHash || isPdf || isExternal) return;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const url = link.getAttribute('href');
                const dir = window.location.pathname.localeCompare(url) <= 0 ? 'left' : 'right';
                navigate(url, dir);
            });
        });
    };

    window.addEventListener('popstate', () => {
        navigate(window.location.pathname, 'right');
    });

    document.addEventListener('DOMContentLoaded', () => {
        mountInitial();
        setupNavigationControls();
        setActiveNavLink();
        rebindLinks();
    });

    return { navigate };
})();

// Theme toggle persistence
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll event handlers here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler); 