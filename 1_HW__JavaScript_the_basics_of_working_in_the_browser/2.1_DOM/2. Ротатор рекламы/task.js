const rotator = document.querySelectorAll(".rotator__case");

let num = 0;

function timer () {
    rotator.forEach((item, index) => {
        if (index === num) {
            item.classList.add("rotator__case_active");
        } else {
            item.classList.remove("rotator__case_active");
        }
    });
    if (num === 5) {
        num = 0;
    } else {
        num = num + 1;
    };
}

setInterval(timer, 1000)