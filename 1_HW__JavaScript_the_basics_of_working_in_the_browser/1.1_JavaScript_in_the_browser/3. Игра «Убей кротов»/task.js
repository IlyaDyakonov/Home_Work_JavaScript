const click_dead = document.getElementById("dead");
const click_lost = document.getElementById("lost");

(() => {
    let click_win = 0,
        click_lose = 0;

        const resetZero = () => {
            click_win = 0;
            click_lose = 0;
            click_dead.innerText = click_win;
            click_lost.innerText = click_lose;
        };

    const holes = document.querySelectorAll('.hole');
    holes.forEach((hole, index) => {
        hole.addEventListener('click', () => {
            if (hole.classList.contains('hole_has-mole')) {
                click_win++;
                click_dead.innerText = click_win;
                if (click_win === 10) {
                    alert("Победа!");
                    stop();
                    resetZero();
                }
            } else {
                click_lose++;
                click_lost.innerText = click_lose;
                if (click_lose === 5) {
                    alert("Вы проиграли!");
                    stop();
                    resetZero();
                }
            }
        });
    });
});
