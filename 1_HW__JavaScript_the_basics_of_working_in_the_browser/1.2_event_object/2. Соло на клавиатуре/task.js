class Game {
    constructor(container) {
        this.container = container;
        this.wordElement = container.querySelector('.word');
        this.winsElement = container.querySelector('.status__wins');
        this.lossElement = container.querySelector('.status__loss');
        this.symbolElement = container.querySelectorAll('.symbol');
        this.timerElement = document.querySelector('.status__time');

        this.reset();

        this.registerEvents();
    }

    reset() {
        this.setNewWord();
        this.winsElement.textContent = 0;
        this.lossElement.textContent = 0;
    }

    registerEvents() {
        let timerValue = 5;
        let timerInterval;

        const interval = () => {
            clearInterval(timerInterval);
            timerValue = 5;
            timerInterval = setInterval(updateTimer, 1000);
        }

        const updateTimer = () => {
            timerValue -= 1;
            this.timerElement.textContent = timerValue;
            if (timerValue <= 0) {
                this.fail();
                interval();
            }
        }

        const onKey = (e) => {
            const cur = this.currentSymbol;
            if (cur.textContent.toLowerCase() == e.key.toLowerCase()) {
                this.success();
            } else {
                this.fail();
            }
        };

        timerInterval = setInterval(updateTimer, 1000);
        document.addEventListener("keydown", (e) => {
            onKey(e);
            interval();
        });
        /*
            TODO:
            Написать обработчик события, который откликается на каждый введённый символ.
            В случае правильного ввода слова вызываем this.success()
            При неправильном вводе символа - this.fail();
            DOM-элемент текущего символа находится в свойстве this.currentSymbol.
         */
    }

    success() {
        if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;

        if (this.currentSymbol !== null) {
            this.currentSymbol.classList.add('symbol_current');
            return;
        }

        if (++this.winsElement.textContent === 10) {
            alert('Победа!');
            this.reset();
        }
        this.setNewWord();
    }

    fail() {
        if (++this.lossElement.textContent === 5) {
            alert('Вы проиграли!');
            this.reset();
        }
        this.setNewWord();
    }

    setNewWord() {
        const word = this.getWord();

        this.renderWord(word);
    }

    getWord() {
        const words = [
            'bob',
            'awesome',
            'netology',
            'hello',
            'kitty',
            'rock',
            'youtube',
            'popcorn',
            'cinema',
            'love',
            'javascript'
        ],
            index = Math.floor(Math.random() * words.length);

        return words[index];
    }

    renderWord(word) {
        const html = [...word]
            .map(
                (s, i) =>
                    `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
            )
            .join('');
        this.wordElement.innerHTML = html;

        this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }
}

new Game(document.getElementById('game'))
