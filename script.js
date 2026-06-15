document.addEventListener('DOMContentLoaded', () => {
    console.log('Investimento Financeiro carregado!');

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    const yearElement = document.querySelector('.site-footer .year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const themeToggle = document.querySelector('.theme-toggle');
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(theme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            setTheme(nextTheme);
        });
    }

    function setTheme(value) {
        document.documentElement.setAttribute('data-theme', value);
        localStorage.setItem('theme', value);
        if (themeToggle) {
            themeToggle.textContent = value === 'dark' ? 'Tema claro' : 'Tema escuro';
        }
    }
});
