// Что изменилось:
// JavaScript:

// Добавлен класс visible для управления видимостью сайдбара.
// Убрана работа с style.display.
// CSS:

// Добавлено начальное состояние сайдбара с transform: translateX(-100%).
// Класс visible возвращает сайдбар на экран с помощью transform: translateX(0).

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('visible');
});