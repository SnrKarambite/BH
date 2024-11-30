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

    // Скрываем все содержимое страницы, показывая только фон
    document.body.style.visibility = 'hidden';

    // Предустанавливаем фоновое изображение с легким фоном (например, однотонный цвет)
    body.style.backgroundImage = 'url("background-placeholder.jpg")';  // Быстро загружаем однотонный фон

    // Загружаем выбранное изображение
    const img = new Image();
    img.src = randomBackground;

    img.onload = function () {
        // Устанавливаем фоновое изображение сразу после его загрузки
        body.style.backgroundImage = `url(${randomBackground})`;
        
        // Показываем содержимое страницы после загрузки фона
        document.body.style.visibility = 'visible';
    };

    img.onerror = function () {
        // В случае ошибки снова запускаем установку фона
        setBackground();
    };
}

// Предзагружаем все фоны
preloadImages(backgrounds);

// Устанавливаем фоновое изображение при загрузке страницы
setBackground();