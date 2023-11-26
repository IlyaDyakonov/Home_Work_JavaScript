const clic = document.getElementById("clicker__counter");
const cook = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");
let clickCount = 0;
let lastclick = Date.now();

cook.onclick = () => {
    clickCount++;
    clic.innerText = clickCount;
    const timeToDay = Date.now();
    const time = (timeToDay - lastclick) / 1000;
    const clickSpeed = clickCount / time;
    speed.innerText = clickSpeed.toFixed(2);
    lastсlick = timeToDay;
    const isIncrease = clickCount % 2 === 1;
    if (isIncrease) {
        cook.width += 50;
    } else {
        cook.width -= 50;
    }
};