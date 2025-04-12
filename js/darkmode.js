function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme === 'dark');
    
    // Toggle theme on button click
    darkModeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(!isDark);
    });
    
    // Update icon based on theme
    function updateIcon(isDark) {
        const icon = darkModeToggle.querySelector('i');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

document.addEventListener('DOMContentLoaded', initDarkMode);
