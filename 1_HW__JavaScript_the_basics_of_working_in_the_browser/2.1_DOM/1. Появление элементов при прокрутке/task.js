const reveals = document.querySelectorAll(".reveal");

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= 650 && rect.bottom >= 300;
}

function handlePort() {
    reveals.forEach((rev) => {
        if (isInViewport(rev)) {
            rev.classList.add("reveal_active");
        } else {
            rev.classList.remove("reveal_active");
        }
    });
}

handlePort();

window.addEventListener("scroll", handlePort);
