const progress = document.getElementById('progress');
const button = document.getElementById('send');
const fileInput = document.getElementById('file');
const url = 'https://students.netoservices.ru/nestjs-backend/upload';

const xhr = new XMLHttpRequest();

xhr.open('POST', url);

xhr.upload.addEventListener('progress', event => {
    if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        progress.value = percentComplete;
    }
});

xhr.addEventListener('load', () => {
    console.log("Файл успешно загружен.");
});

xhr.addEventListener('error', () => {
    console.log('Ошибка загрузки файла.');
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    const file = fileInput.files[0];

    // Создаем объект FormData и добавляем файл в него
    const formData = new FormData();
    formData.append('file', file);

    // Отправляем файл на сервер
    xhr.send(formData);
});