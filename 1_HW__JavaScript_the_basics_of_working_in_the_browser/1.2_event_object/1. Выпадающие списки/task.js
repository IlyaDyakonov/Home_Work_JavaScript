const dropdown_val = document.querySelector(".dropdown__value");
const dropdown_list = document.querySelector(".dropdown__list");
const dropdown_item = document.querySelectorAll(".dropdown__item");

dropdown_val.addEventListener('click', () => {
    dropdown_list.classList.add("dropdown__list_active");
});

dropdown_item.forEach((numb) => {
    numb.addEventListener('click', (numbe) => {
        numbe.preventDefault();
    dropdown_val.textContent = numb.textContent;
    dropdown_list.classList.remove("dropdown__list_active");
});
});