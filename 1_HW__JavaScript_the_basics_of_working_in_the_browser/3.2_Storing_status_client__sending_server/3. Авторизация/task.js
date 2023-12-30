const button = document.querySelector('.btn');
const signIn = document.querySelector('.signin');
const userID = document.getElementById('user_id');
const welcome = document.querySelector('.welcome');

function auth (id) {
    welcome.innerHTML =`Добро пожаловать, пользователь #${id}` 
    signIn.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    const card = document.querySelector('.card');
    const button = document.createElement('button');
    card.appendChild(button).classList.add('out');
    button.innerHTML = 'Выйти'
    button.addEventListener('click', () => {
        localStorage.removeItem('user_id');
        signIn.classList.add('signin_active');
        welcome.classList.remove('welcome_active');
        button.remove();
        document.forms[0].reset();
    }) 
}

function logIn () {
    const url = 'https://students.netoservices.ru/nestjs-backend/auth'

    button.addEventListener('click', (event) => {
        event.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            const status = xhr.response['success'];
            const id = xhr.response['user_id'];
            localStorage.setItem('user_id', id);
            if (status) {
                auth(id);
            } else {
                alert('Неверный логин или пароль!');
            }
        });
        let formData = new FormData(document.forms[0]);
        xhr.open('POST', url);
        xhr.send(formData);
    });
}

if (!localStorage.getItem('user_id')) {
    logIn();
} else {
    auth(localStorage.getItem('user_id'));
}