// ========================================
// FORM VALIDATION & SITE INTERACTIONS
// Modern, animated, professional
// ========================================

document.addEventListener('DOMContentLoaded', function () {

    // ---- NAVBAR SCROLL EFFECT ----
    var navbar = document.getElementById('navbar');
    
    if (navbar) {
        function handleNavbarScroll() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        window.addEventListener('scroll', handleNavbarScroll);
        handleNavbarScroll();
    }

    // ---- MOBILE MENU TOGGLE ----
    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ---- SMOOTH SCROLL FOR ANCHOR LINKS ----
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---- SCROLL REVEAL ANIMATIONS ----
    var revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    function revealOnScroll() {
        var windowHeight = window.innerHeight;
        revealElements.forEach(function (el) {
            var elementTop = el.getBoundingClientRect().top;
            var revealPoint = 100;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('revealed');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // ---- ANIMATED COUNTER FOR STATS ----
    var statNumbers = document.querySelectorAll('.stat-number');
    var statsAnimated = false;

    function animateCounter(el) {
        var target = el.getAttribute('data-target');
        var suffix = el.getAttribute('data-suffix') || '';
        var targetNum = parseInt(target);
        var duration = 2000;
        var start = 0;
        var startTime = null;

        function easeOutQuart(t) {
            return 1 - Math.pow(1 - t, 4);
        }

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var easedProgress = easeOutQuart(progress);
            var current = Math.floor(easedProgress * targetNum);
            el.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target + suffix;
            }
        }
        requestAnimationFrame(step);
    }

    function checkStatsInView() {
        if (statsAnimated || statNumbers.length === 0) return;
        var statsSection = statNumbers[0].closest('.about-stats');
        if (!statsSection) return;
        var rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            statsAnimated = true;
            statNumbers.forEach(function (el) {
                animateCounter(el);
            });
        }
    }

    window.addEventListener('scroll', checkStatsInView);
    checkStatsInView();

    // ---- FORM VALIDATION ----
    var contactForm = document.getElementById('contact-form');

    if (contactForm) {
        var nameInput = document.getElementById('name');
        var whatsappInput = document.getElementById('whatsapp');
        var messageInput = document.getElementById('message');

        // Validation functions
        function validateName(value) {
            return value.trim().length >= 3;
        }

        function validateWhatsapp(value) {
            var cleaned = value.replace(/\D/g, '');
            return cleaned.length >= 10 && cleaned.length <= 11;
        }

        function validateMessage(value) {
            return value.trim().length >= 10;
        }

        function validateField(input, validatorFn) {
            var formGroup = input.closest('.form-group');
            if (!validatorFn(input.value)) {
                formGroup.classList.add('error');
                return false;
            } else {
                formGroup.classList.remove('error');
                return true;
            }
        }

        function removeFieldError(input) {
            var formGroup = input.closest('.form-group');
            formGroup.classList.remove('error');
        }

        // Real-time validation on blur
        nameInput.addEventListener('blur', function () {
            validateField(nameInput, validateName);
        });
        whatsappInput.addEventListener('blur', function () {
            validateField(whatsappInput, validateWhatsapp);
        });
        messageInput.addEventListener('blur', function () {
            validateField(messageInput, validateMessage);
        });

        // Remove error on input
        [nameInput, whatsappInput, messageInput].forEach(function (input) {
            input.addEventListener('input', function () {
                removeFieldError(input);
            });
        });

        // WhatsApp input mask
        whatsappInput.addEventListener('input', function (e) {
            var value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);

            if (value.length > 6) {
                value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7);
            } else if (value.length > 2) {
                value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
            } else if (value.length > 0) {
                value = '(' + value;
            }
            e.target.value = value;
        });

        // Form submit handler
        contactForm.addEventListener('submit', function (e) {
            var isValid = true;

            if (!validateField(nameInput, validateName)) isValid = false;
            if (!validateField(whatsappInput, validateWhatsapp)) isValid = false;
            if (!validateField(messageInput, validateMessage)) isValid = false;

            if (!isValid) {
                e.preventDefault();
                // Shake animation on error
                var wrapper = contactForm.closest('.contact-form-wrapper');
                if (wrapper) {
                    wrapper.style.animation = 'shake 0.5s ease';
                    setTimeout(function () { wrapper.style.animation = ''; }, 500);
                }
            } else {
                // Loading state on button
                var submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
            }
        });
    }

}); // End DOMContentLoaded

// ---- SHAKE ANIMATION (injected via JS for form error) ----
(function () {
    var style = document.createElement('style');
    style.textContent = '@keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } }';
    document.head.appendChild(style);
})();
