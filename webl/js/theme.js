// Отримуємо кнопку для перемикання теми
const themeToggle = document.getElementById('theme-toggle');

// Функція для застосування теми
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️'; // Іконка для світлої теми
    } else {
        document.body.classList.remove('dark-theme');
        themeToggle.textContent = '🌙'; // Іконка для темної теми
    }
}

// Зчитуємо тему з localStorage під час завантаження сторінки
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
}

// Додаємо обробник подій для кнопки
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Зберігаємо тему у localStorage
});
