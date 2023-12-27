const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.addEventListener('readystatechange', () => {
    // вопрос
    if (xhr.readyState === xhr.DONE) {
        const data = JSON.parse(xhr.responseText);

        const title = data['data']['title'];
        // варианты ответов
        const answers = data['data']['answers'];

        const titleNode = document.createTextNode(title);
        pollTitle.appendChild(titleNode);

        for (const answerKey in answers) {
            const answer = answers[answerKey];

            const button = document.createElement('button');
            button.textContent = answer;

            pollAnswers.appendChild(button);

            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
        }};
})

// открываем страницу и отправляем запрос

xhr.send();