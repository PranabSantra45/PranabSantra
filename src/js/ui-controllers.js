/* ==========================================================================
   MOBILE INTERACTION MENU
   ========================================================================== */
export function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!mobileToggle || !navMenu) return;

    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            mobileToggle.classList.remove('open');
            navMenu.classList.remove('open');
        }
    });
}

/* ==========================================================================
   RESEARCH ROLES TYPING TEXT
   ========================================================================== */
export function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const roles = ["Student Researcher", "AI/ML Enthusiast", "Quantum Computing Enthusiast", "Deep Tech Builder", "Startup Innovator"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1800; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 400; // Pause before typing next
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 800);
}

/* ==========================================================================
   SCROLL REVEAL OBSERVER & ACTIVE LINKS
   ========================================================================== */
export function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('.navbar-container');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(element => {
        revealObserver.observe(element);
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   ACADEMIC WORKSPACE TABS
   ========================================================================== */
export function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPane = document.getElementById(tabId);
            if (targetPane) targetPane.classList.add('active');
        });
    });
}

/* ==========================================================================
   PORTFOLIO CATEGORIES FILTERING
   ========================================================================== */
export function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 40);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });
}

/* ==========================================================================
   CONTACT FORM SUBMISSIONS AND TRANSLATIONS
   ========================================================================== */
export function initContactForm() {
    const form = document.getElementById('portfolio-contact-form');
    const statusMsg = document.getElementById('form-status-msg');

    if (!form || !statusMsg) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const subject = document.getElementById('form-subject').value.trim();
        const message = document.getElementById('form-message').value.trim();

        if (!name || !email || !subject || !message) {
            showStatus('// ERROR: Missing fields. Complete identifier logs.', 'error');
            return;
        }

        const submitBtn = form.querySelector('.form-submit-btn');
        const originalText = submitBtn.querySelector('span').textContent;
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = 'TRANSMITTING_DATA...';

        // Submit via AJAX to FormSubmit.co using the action endpoint
        fetch(form.action, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                _subject: `New Portfolio Message: ${subject}`,
                message: message
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response error");
            }
            return response.json();
        })
        .then(data => {
            if (data.success === "true" || data.success === true) {
                showStatus(`// SUCCESS: Data packages dispatched. Thank you, ${name}.`, 'success');
                form.reset();
            } else {
                showStatus('// ERROR: Transmission failed on node server.', 'error');
            }
        })
        .catch(err => {
            console.error("Form transmission error:", err);
            showStatus('// ERROR: Transmission link interrupted. Try again.', 'error');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = originalText;
        });
    });

    function showStatus(text, type) {
        statusMsg.textContent = text;
        statusMsg.className = `form-status ${type}`;
        statusMsg.style.display = 'block';
        statusMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        setTimeout(() => {
            statusMsg.style.display = 'none';
        }, 5000);
    }
}
