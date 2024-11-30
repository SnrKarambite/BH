// Функция для переключения состояния меню
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Переключение активных классов
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Добавление обработчика события для клика на гамбургер
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);