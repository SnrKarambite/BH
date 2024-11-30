// Массив с путями к изображениям фонов
const backgrounds = [
    'background1.jpg', // Путь к изображению 1
    'background2.jpg', // Путь к изображению 2
    'background3.jpg', // Путь к изображению 3
    'background4.jpg'  // Путь к изображению 4
];

// Функция для предзагрузки изображений
function preloadImages(images) {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Функция для установки фона
function setBackground() {
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    const body = document.body;

    // Добавляем плавный переход фона
    body.style.transition = 'background-image 1s ease-in-out';

    // Устанавливаем фоновое изображение
    body.style.backgroundImage = `url(${randomBackground})`;
}

// Предзагружаем все фоны
preloadImages(backgrounds);

// Устанавливаем фоновое изображение при загрузке страницы
setBackground();