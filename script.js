// ===== Navigation Scroll Effect =====
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: 'smooth'
        });
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.skill-category, .project-card, .timeline-item, .leadership-item, .contact-item'
);

animateElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===== Typing Effect for Hero Subtitle =====
const subtitleElement = document.querySelector('.hero-subtitle');
if (subtitleElement) {
    const subtitleText = subtitleElement.textContent;
    subtitleElement.setAttribute('aria-label', subtitleText);
    subtitleElement.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < subtitleText.length) {
            subtitleElement.textContent += subtitleText.charAt(i);
            i++;
            setTimeout(typeWriter, 65);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}


// ===== Advanced Parallax Effect =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    const heroText = document.querySelector('.hero-text');
    const flowers = document.querySelectorAll('.flower');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translate3d(0, ${scrolled * 0.08}px, 0)`;
    }
    
    if (heroImage && scrolled < window.innerHeight) {
        const rotateY = scrolled * 0.025;
        heroImage.style.transform = `translate3d(0, ${scrolled * 0.08}px, ${scrolled * 0.04}px) rotateY(${rotateY}deg)`;
    }
    
    if (heroText && scrolled < window.innerHeight) {
        heroText.style.transform = `translate3d(0, ${scrolled * 0.05}px, ${scrolled * -0.02}px)`;
    }
    
    // Parallax for flowers
    flowers.forEach((flower, index) => {
        const speed = 0.03 + (index % 2) * 0.015;
        const offset = scrolled * speed;
        flower.style.transform = `translate3d(0, ${offset}px, ${offset * 0.12}px)`;
    });
    
});

// ===== Enhanced Motion & Interaction Layer =====
function applyStaggeredReveal() {
    const groups = [
        '.skills-grid .skill-category',
        '.projects-grid .project-card',
        '.timeline .timeline-item',
        '.leadership-grid .leadership-item',
        '.contact-info .contact-item'
    ];

    groups.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.style.setProperty('--stagger-delay', `${index * 70}ms`);
        });
    });
}

function enableMicroTilt() {
    const tiltTargets = document.querySelectorAll('.btn, .project-card, .skill-category, .leadership-item, .contact-item');
    tiltTargets.forEach(target => {
        target.classList.add('micro-tilt');

        target.addEventListener('mousemove', (event) => {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const rect = target.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateX = ((y / rect.height) - 0.5) * -4;
            const rotateY = ((x / rect.width) - 0.5) * 4;
            target.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
        });

        target.addEventListener('mouseleave', () => {
            target.style.transform = '';
        });
    });
}

function enableCardSpotlight() {
    const spotlightTargets = document.querySelectorAll(
        '.skill-category, .project-card, .timeline-content, .leadership-item, .contact-item, .education-card'
    );

    spotlightTargets.forEach(target => {
        target.addEventListener('mousemove', (event) => {
            const rect = target.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            target.style.setProperty('--spotlight-x', `${x}%`);
            target.style.setProperty('--spotlight-y', `${y}%`);
        });
    });
}

function createScrollProgressBar() {
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    progress.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progress);

    const progressBar = progress.querySelector('.scroll-progress-bar');
    const updateProgress = () => {
        const scrollTop = window.scrollY;
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
        progressBar.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();
}

function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('theme');
    const useDark = savedTheme === 'dark';

    if (useDark) {
        document.body.classList.add('theme-dark');
    }

    const setToggleIcon = () => {
        const icon = themeToggle.querySelector('i');
        icon.className = document.body.classList.contains('theme-dark') ? 'fas fa-sun' : 'fas fa-moon';
    };

    setToggleIcon();

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('theme-dark');
        localStorage.setItem('theme', document.body.classList.contains('theme-dark') ? 'dark' : 'light');
        setToggleIcon();
    });
}

function initializeSocialButtons() {
    const socialLinks = document.querySelectorAll('.hero-social a');
    socialLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            if (!href) return;

            if (href.startsWith('mailto:')) {
                window.location.href = href;
                return;
            }

            window.open(href, '_blank', 'noopener,noreferrer');
        });
    });
}

// ===== Image Loading Fallback =====
const profilePhoto = document.getElementById('profile-photo');
if (profilePhoto) {
    profilePhoto.addEventListener('error', function() {
        this.src = 'https://placehold.co/350x350/ec4899/ffffff?text=SU';
        this.alt = 'Profile Photo Placeholder';
    });
}

// ===== Scroll to Top Button (Optional) =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 999;
    transition: all 0.3s ease;
`;

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// ===== Add hover effect styles dynamically =====
const style = document.createElement('style');
style.textContent = `
    .scroll-top-btn:hover {
        transform: scale(1.1) !important;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2) !important;
    }
`;
document.head.appendChild(style);

// ===== Skill Icons Mapping =====
const skillIcons = {
    'Python': 'fab fa-python',
    'JavaScript': 'fab fa-js',
    'C++': 'fab fa-cuttlefish',
    'SQL': 'fas fa-database',
    'R': 'fab fa-r-project',
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'React/Next.js': 'fab fa-react',
    'FastAPI': 'fas fa-bolt',
    'Flask': 'fas fa-flask',
    'Streamlit': 'fas fa-stream',
    'SQLAlchemy': 'fas fa-database',
    'Chart.js': 'fas fa-chart-bar',
    'AWS': 'fab fa-aws',
    'Docker': 'fab fa-docker',
    'Git': 'fab fa-git-alt',
    'GitHub': 'fab fa-github',
    'VS Code': 'fas fa-code',
    'Jupyter Notebook': 'fas fa-book',
    'RESTful API': 'fas fa-plug',
    'PostgreSQL': 'fas fa-database',
    'MySQL': 'fas fa-database',
    'SQLite': 'fas fa-database',
    'Query Optimization': 'fas fa-tachometer-alt',
    'Tableau': 'fas fa-chart-pie',
    'Power BI': 'fas fa-chart-line',
    'Excel': 'fas fa-file-excel',
    'Statistical Analysis': 'fas fa-chart-area',
    'Data Visualization': 'fas fa-chart-bar',
    'Next.js': 'fab fa-react',
    'Pandas': 'fab fa-python',
    'Plotly': 'fas fa-chart-line',
    'CMake': 'fas fa-cog',
    'Git/GitHub': 'fab fa-github',
    'Flask': 'fas fa-flask',
    'Chart.js': 'fas fa-chart-bar'
};

// ===== Add Icons to Skills =====
function addSkillIcons() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        const skillName = tag.textContent.trim();
        const iconClass = skillIcons[skillName];
        if (iconClass) {
            const icon = document.createElement('i');
            icon.className = iconClass;
            icon.style.marginRight = '6px';
            tag.insertBefore(icon, tag.firstChild);
        }
    });
}


// ===== Initialize on page load =====
document.addEventListener('DOMContentLoaded', () => {
    addSkillIcons();
    applyStaggeredReveal();
    enableMicroTilt();
    enableCardSpotlight();
    createScrollProgressBar();
    initializeThemeToggle();
    initializeSocialButtons();
    
    // Update scroll button gradient
    const scrollBtn = document.querySelector('.scroll-top-btn');
    if (scrollBtn) {
        scrollBtn.style.background = 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)';
    }

    // Trigger staged hero entry animation
    document.body.classList.add('hero-loaded');
});

console.log('Portfolio website loaded successfully! 🚀');

