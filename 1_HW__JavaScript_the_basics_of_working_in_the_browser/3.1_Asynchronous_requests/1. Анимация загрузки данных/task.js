const items = document.getElementById('items');
const loader = document.querySelector('.loader');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        // убираем картинку загрузки
        loader.classList.remove('loader_active');

        // парсим
        const data = JSON.parse(xhr.responseText);

        // ищем элементы до Valute
        const valutes = data["response"]["Valute"];

        // а дальше углубляемся глубже
        for (const valuteKey in valutes) {
            const valute = valutes[valuteKey];

            const charCode = valute["CharCode"];
            const value = valute["Value"];

            const item = document.createElement('div');
            item.className = 'item';

            // записываем в HTML код
            const divCode = document.createElement('div');
            divCode.className = 'item__code';
            divCode.textContent = charCode;

            const divValue = document.createElement('div');
            divValue.className = 'item__value';
            divValue.textContent = value;

            const divCurrency = document.createElement('div');
            divCurrency.className = 'item__currency';
            divCurrency.textContent = "руб.";

            item.appendChild(divCode);
            item.appendChild(divValue);
            item.appendChild(divCurrency);

            items.appendChild(item);
        }
    }
});

// открываем страницу и отправляем запрос
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();