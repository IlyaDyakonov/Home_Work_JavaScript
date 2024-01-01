const editor = document.getElementById('editor');
const text = document.querySelector('textarea');
const clearButton = document.querySelector('.clear')

// Получаем значение из локального хранилища
const storage = localStorage.getItem('textarea');

// Если значение существует, устанавливаем его в поле ввода
if (storage) {
    text.value = storage;
}
// Добавляем обработчик события вне зависимости от значения в локальном хранилище
text.addEventListener('input', () => {
// Обновляем значение в локальном хранилище при изменении текста
    localStorage.setItem('textarea', text.value);
});

// добавляем обработчик для кнопки очистки
clearButton.addEventListener('click', () => {
    // Удаляем значение из локального хранилища и очищаем поле ввода
    localStorage.removeItem('textarea');
    text.value = '';
})
