// Main JavaScript for Portfolio Website

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    populateContent();
    initScrollAnimations();
    initContactForm();
    updateCurrentYear();
});

// Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    });

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

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

// Populate dynamic content from config
function populateContent() {
    // Hero section
    if (config.personal) {
        const heroName = document.getElementById('heroName');
        const heroTitle = document.getElementById('heroTitle');
        const heroTagline = document.getElementById('heroTagline');

        if (heroName) heroName.textContent = config.personal.name;
        if (heroTitle) heroTitle.textContent = config.personal.title;
        if (heroTagline) heroTagline.textContent = config.personal.tagline;
    }

    // About section
    if (config.about) {
        const aboutImage = document.getElementById('aboutImage');
        const aboutBio = document.getElementById('aboutBio');

        if (aboutImage) aboutImage.src = config.about.image;
        if (aboutBio && config.about.bio) {
            // Split bio into paragraphs and wrap each in <p> tags
            const paragraphs = config.about.bio.split('\n\n').filter(p => p.trim());
            aboutBio.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
        }
    }

    // Services section
    if (config.services) {
        const servicesGrid = document.getElementById('servicesGrid');
        if (servicesGrid) {
            servicesGrid.innerHTML = config.services.map(service => `
        <div class="service-card fade-in-up">
          <span class="service-icon">${service.icon}</span>
          <h3 class="service-title">${service.title}</h3>
          <p class="service-description">${service.description}</p>
        </div>
      `).join('');
        }
    }

    // Skills section
    if (config.skills) {
        const technicalSkills = document.getElementById('technicalSkills');
        const professionalSkills = document.getElementById('professionalSkills');

        if (technicalSkills && config.skills.technical) {
            technicalSkills.innerHTML = config.skills.technical.map(skill =>
                `<span class="skill-tag">${skill}</span>`
            ).join('');
        }

        if (professionalSkills && config.skills.professional) {
            professionalSkills.innerHTML = config.skills.professional.map(skill =>
                `<span class="skill-tag">${skill}</span>`
            ).join('');
        }
    }

    // Projects section
    if (config.projects) {
        const projectsGrid = document.getElementById('projectsGrid');
        if (projectsGrid) {
            projectsGrid.innerHTML = config.projects.map(project => `
        <div class="project-card fade-in-up">
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
              ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
              ${project.github ? `
                <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  GitHub
                </a>
              ` : ''}
              ${project.demo ? `
                <a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M10 3C5.5 3 2 7 2 10s3.5 7 8 7 8-4 8-7-3.5-7-8-7z"/>
                    <circle cx="10" cy="10" r="3"/>
                  </svg>
                  Live Demo
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      `).join('');
        }
    }

    // Contact section
    if (config.personal) {
        const contactEmail = document.getElementById('contactEmail');
        if (contactEmail && config.personal.email) {
            contactEmail.href = `mailto:${config.personal.email}`;
            contactEmail.querySelector('.contact-value').textContent = config.personal.email;
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        `);
            }

            if (config.social.linkedin) {
                links.push(`
          <a href="${config.social.linkedin}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        `);
            }

            if (config.social.twitter) {
                links.push(`
          <a href="${config.social.twitter}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        `);
            }

            socialLinks.innerHTML = links.join('');
        }
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get the submit button
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;

            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.innerHTML = '<span>Sending...</span>';

            // Get form data
            const formData = new FormData(contactForm);

            try {
                // Send to Web3Forms API
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    // Track form submission in Google Analytics
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'form_submit', {
                            event_category: 'Contact',
                            event_label: 'Contact Form Submission - Success'
                        });
                    }

                    // Show success message
                    showFormMessage('success', '✅ Thank you! Your message has been sent successfully. I\'ll get back to you soon.');

                    // Reset form
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Track error in Google Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_error', {
                        event_category: 'Contact',
                        event_label: 'Contact Form Submission - Error'
                    });
                }

                // Show error message
                showFormMessage('error', '❌ Oops! Something went wrong. Please try again or email me directly at ' + config.personal.email);
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }
        });
    }
}

// Show form submission message
function showFormMessage(type, message) {
    // Remove any existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;

    // Insert after form
    const contactForm = document.getElementById('contactForm');
    contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);

    // Remove message after 8 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 300);
    }, 8000);
}

// Update current year in footer
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Track external link clicks in Google Analytics
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

// Track scroll depth for analytics
let scrollTracked = {
    25: false,
    50: false,
    75: false,
    100: false
};

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    Object.keys(scrollTracked).forEach(percentage => {
        if (scrollPercent >= percentage && !scrollTracked[percentage] && typeof gtag !== 'undefined') {
            gtag('event', 'scroll_depth', {
                event_category: 'Engagement',
                event_label: `${percentage}%`,
                value: parseInt(percentage)
            });
            scrollTracked[percentage] = true;
        }
    });
});
