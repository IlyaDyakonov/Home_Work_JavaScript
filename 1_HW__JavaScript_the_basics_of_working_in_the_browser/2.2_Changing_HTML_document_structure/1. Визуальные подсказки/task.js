const hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        // Получает значение 'title'
        const title = item.getAttribute('title');
        const tooltip = item.parentNode.querySelector('.tooltip');

        // проверка на открытие подсказки
        if (tooltip && tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
        } else {
        // Удаляет все элементы с классом "tooltip", что бы одновремено работала ток 1 подсказка
        document.querySelectorAll('.tooltip').forEach((tooltip) => {
            tooltip.remove();
        });

        // Создание элемента и присовение класса и текста
        const div = document.createElement('div');
        div.className = 'tooltip';
        div.textContent = title;
        document.body.appendChild(div);

        const rect = item.getBoundingClientRect();
        div.style.left = `${rect.left + window.scrollX}px`;
        div.style.top = `${rect.top + window.scrollY + item.offsetHeight}px`;

        // Вставляет созданный элемент div перед следующим элементом после текущего элемента item в его родительском элементе.
        item.parentNode.insertBefore(div, item.nextSibling);

        // Добавляет или удаляет класс "tooltip_active" у созданного элемента div
        div.classList.toggle('tooltip_active');
        }
    });
});
