// Theme Toggle Logic
const initTheme = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// RTL Toggle Logic
const toggleRTL = () => {
    const html = document.documentElement;
    if (html.dir === 'rtl') {
        html.dir = 'ltr';
        localStorage.rtl = 'false';
    } else {
        html.dir = 'rtl';
        localStorage.rtl = 'true';
    }
}

// Mobile Menu Logic
const toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    if (localStorage.rtl === 'true') {
        document.documentElement.dir = 'rtl';
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
});
