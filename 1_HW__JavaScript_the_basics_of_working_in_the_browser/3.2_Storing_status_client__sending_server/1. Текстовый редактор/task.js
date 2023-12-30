const editor = document.getElementById('editor');
const text = document.querySelector('textarea');
const clearButton = document.querySelector('.clear')

const storage = localStorage.getItem('textarea');

if (storage) {
    text.value = storage;
} else {
text.addEventListener('input', () => {
    localStorage.setItem('textarea', text.value);
});
}

clearButton.addEventListener('click', () => {
    localStorage.removeItem('textarea');
    text.value = '';
})

