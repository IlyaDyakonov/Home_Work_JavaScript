const book = document.querySelector(".book");

const fontSize = document.querySelectorAll('.font-size');
const size_small = fontSize[0]
const size_normal = fontSize[1]
const size_big = fontSize[2]

const text_color = document.querySelectorAll('.text_color_black, .text_color_gray, .text_color_whitesmoke');

const bg_color = document.querySelectorAll('.bg_color_black, .bg_color_gray, .bg_color_white');


fontSize.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        book.classList.remove("book_fs-big", "book_fs-small");
        size_small.classList.remove("font-size_active");
        size_normal.classList.remove("font-size_active");
        size_big.classList.remove("font-size_active");

        if (element === size_small) {
            size_small.classList.add('font-size_active');
            book.classList.add("book_fs-small");
        } else if (element === size_normal) {
            size_normal.classList.add('font-size_active');
        } else if (element === size_big) {
            size_big.classList.add('font-size_active');
            book.classList.add("book_fs-big");
        }
    });
})

text_color.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        text_color[0].classList.remove("color_active");
        text_color[1].classList.remove("color_active");
        text_color[2].classList.remove("color_active");

        if (element === text_color[0]) {
            text_color[0].classList.add('color_active');
            book.style.color = "black";
        } else if (element === text_color[1]) {
            text_color[1].classList.add('color_active');
            book.style.color = "gray";
        } else if (element === text_color[2]) {
            text_color[2].classList.add('color_active');
            book.style.color = "whitesmoke";
        }
    });
})

bg_color.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        bg_color[0].classList.remove("color_active");
        bg_color[1].classList.remove("color_active");
        bg_color[2].classList.remove("color_active");

        if (element === bg_color[0]) {
            bg_color[0].classList.add('color_active');
            book.style.backgroundColor = "black";
        } else if (element === bg_color[1]) {
            bg_color[1].classList.add('color_active');
            book.style.backgroundColor = "gray";
        } else if (element === bg_color[2]) {
            bg_color[2].classList.add('color_active');
            book.style.backgroundColor = "white";
        }
    });
})