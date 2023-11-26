const div = document.getElementById('timer')
let seconds = 59;

const intervalId = setInterval(() => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    div.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

    if (seconds === 0) {
        clearInterval(intervalId);
        alert( "Вы победили в конкурсе" );
    } else {
        seconds--;
    }
}, 1000);