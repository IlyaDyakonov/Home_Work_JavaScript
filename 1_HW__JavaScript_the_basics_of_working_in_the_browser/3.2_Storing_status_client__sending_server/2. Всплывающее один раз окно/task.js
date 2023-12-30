function getCookie (status) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(e => e.startsWith(status));
    if (cookie) {
        return cookie.substring(status.length + 1);
    } else {
        return '';
    }
};

function modal () {
    const classModal = document.querySelector('.modal');
    classModal.classList.add('modal_active');

    const close = document.querySelector('.modal__close');
    close.addEventListener('click', () => {
        classModal.classList.remove('modal_active');
        document.cookie = 'modal=close';
    });
};

if (getCookie('modal') !== 'close') {
    modal();
}