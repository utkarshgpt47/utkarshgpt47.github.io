// ═══════════════════════════════════════
// Portfolio Website — Main Script
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    populateContent();
    initScrollAnimations();
    initContactForm();
    updateCurrentYear();
    initHeroCanvas();
    initCursorGlow();
    initCounterAnimation();
    initTypewriter();
});

// ═══════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
    });

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navMenu.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ═══════════════════════════════════════
// HERO CANVAS — Floating particles
// ═══════════════════════════════════════
function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let mouse = { x: null, y: null };

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    canvas.parentElement.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    canvas.parentElement.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Create particles
    const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.4 + 0.1,
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(26, 22, 18, ${p.opacity * 0.4})`;
            ctx.fill();

            // Connect nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(26, 22, 18, ${0.03 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }

            // Mouse interaction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    p.vx += (dx / dist) * force * 0.02;
                    p.vy += (dy / dist) * force * 0.02;
                }
            }

            // Dampen velocity
            p.vx *= 0.99;
            p.vy *= 0.99;
        });

        animationId = requestAnimationFrame(animate);
    }

    // Use IntersectionObserver to only animate when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate();
            } else {
                cancelAnimationFrame(animationId);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(canvas.parentElement);
}

// ═══════════════════════════════════════
// CURSOR GLOW (desktop only)
// ═══════════════════════════════════════
function initCursorGlow() {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const glow = document.getElementById('cursorGlow');
    if (!glow) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        glow.classList.remove('active');
    });

    function updateGlow() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        requestAnimationFrame(updateGlow);
    }

    updateGlow();
}

// ═══════════════════════════════════════
// TYPEWRITER EFFECT
// ═══════════════════════════════════════
function initTypewriter() {
    const el = document.getElementById('heroTagline');
    if (!el) return;

    const phrases = [
        "Transforming Data into Intelligent Decisions",
        "Building AI-Powered Automation Systems",
        "Driving Growth Through Advanced Analytics",
        "Engineering Predictive Intelligence Solutions"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 60;

    // Clear existing text but keep cursor
    const cursorSpan = el.querySelector('.cursor');

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            charIndex--;
            typingSpeed = 30;
        } else {
            charIndex++;
            typingSpeed = 60;
        }

        // Update text content (keep cursor)
        el.textContent = currentPhrase.substring(0, charIndex);
        if (cursorSpan) el.appendChild(cursorSpan);

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2500; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before new phrase
        }

        setTimeout(type, typingSpeed);
    }

    // Start after initial load animation
    setTimeout(type, 1500);
}

// ═══════════════════════════════════════
// ANIMATED COUNTERS
// ═══════════════════════════════════════
function initCounterAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    if (!statNumbers.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => observer.observe(el));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out expo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(eased * target);

        el.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ═══════════════════════════════════════
// POPULATE CONTENT
// ═══════════════════════════════════════
function populateContent() {
    // Hero
    if (config.personal) {
        const heroTitle = document.getElementById('heroTitle');
        if (heroTitle) heroTitle.textContent = config.personal.title;
    }

    // About — only populate if empty (preserve static HTML for SEO)
    if (config.about) {
        const aboutImage = document.getElementById('aboutImage');
        const aboutBio = document.getElementById('aboutBio');
        if (aboutImage && !aboutImage.src) aboutImage.src = config.about.image;
        // Keep static HTML for aboutBio — don't overwrite
    }

    // Services — keep static HTML for SEO, don't overwrite

    // Skills — keep static HTML for SEO, don't overwrite

    // Projects — keep static HTML for SEO, don't overwrite

    // Contact
    if (config.personal) {
        const contactEmail = document.getElementById('contactEmail');
        if (contactEmail && config.personal.email) {
            contactEmail.href = `mailto:${config.personal.email}`;
            const contactValue = contactEmail.querySelector('.contact-value');
            if (contactValue) contactValue.textContent = config.personal.email;
        }
    }

    // Social links
    if (config.social) {
        const socialLinks = document.getElementById('socialLinks');
        if (socialLinks) {
            const links = [];

            if (config.social.github) {
                links.push(`
                    <a href="${config.social.github}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                `);
            }

            if (config.social.linkedin) {
                links.push(`
                    <a href="${config.social.linkedin}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                `);
            }

            if (config.social.twitter) {
                links.push(`
                    <a href="${config.social.twitter}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                `);
            }

            socialLinks.innerHTML = links.join('');
        }
    }
}

// ═══════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animate skill bars if they're within this element
                const skillBars = entry.target.querySelectorAll('.skill-bar-fill[data-width]');
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.dataset.width + '%';
                    }, index * 80);
                });
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal, .fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // Also observe skill categories for bar animation
    document.querySelectorAll('.skills-category').forEach(el => {
        observer.observe(el);
    });
}

// ═══════════════════════════════════════
// CONTACT FORM
// ═══════════════════════════════════════
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;

        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Sending...</span>';
        submitButton.style.opacity = '0.7';

        const formData = new FormData(contactForm);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        event_category: 'Contact',
                        event_label: 'Contact Form Submission - Success'
                    });
                }
                showFormMessage('success', '✓ Message sent successfully! I\'ll get back to you soon.');
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_error', {
                    event_category: 'Contact',
                    event_label: 'Contact Form Submission - Error'
                });
            }
            showFormMessage('error', 'Something went wrong. Please try again or email me directly at ' + config.personal.email);
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            submitButton.style.opacity = '1';
        }
    });
}

function showFormMessage(type, message) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();

    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;

    const contactForm = document.getElementById('contactForm');
    contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);

    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transition = 'opacity 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 6000);
}

// ═══════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) yearElement.textContent = new Date().getFullYear();
}

// Track outbound link clicks
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.hostname !== window.location.hostname && typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            event_category: 'Outbound Link',
            event_label: link.href,
            transport_type: 'beacon'
        });
    }
});

// Scroll depth tracking
let scrollTracked = { 25: false, 50: false, 75: false, 100: false };

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    Object.keys(scrollTracked).forEach(pct => {
        if (scrollPercent >= pct && !scrollTracked[pct] && typeof gtag !== 'undefined') {
            gtag('event', 'scroll_depth', {
                event_category: 'Engagement',
                event_label: `${pct}%`,
                value: parseInt(pct)
            });
            scrollTracked[pct] = true;
        }
    });
});
