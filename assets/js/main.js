(function () {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  const storedTheme = localStorage.getItem('rytek-theme');
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (preferredDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    const updateThemeLabel = (theme) => {
      themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      themeToggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    };

    updateThemeLabel(initialTheme);

    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('rytek-theme', next);
      updateThemeLabel(next);
    });
  }

  if (navToggle && navMenu) {
    const closeMenu = () => {
      navMenu.setAttribute('data-open', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    };

    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.getAttribute('data-open') === 'true';
      navMenu.setAttribute('data-open', isOpen ? 'false' : 'true');
      navToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        navToggle.focus();
      }
    });
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');

  if (!prefersReducedMotion && revealItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const year = document.querySelector('[data-current-year]');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
