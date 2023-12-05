const tab_navi = document.querySelector(".tab__navigation");
const tab_cont = document.querySelectorAll(".tab__content");
const tab = document.querySelectorAll(".tab");

tab_navi.addEventListener('click', (e) => {
    const scan = Array.from(tab).indexOf(e.target);
    tab.forEach((item, index) => {
        if (index !== scan) {
            tab[index].classList.remove("tab_active");
            tab_cont[index].classList.remove("tab__content_active");
        } else {
            tab[scan].classList.add("tab_active");
            tab_cont[scan].classList.add("tab__content_active");
        }
    })
});
