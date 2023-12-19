const has_tooltip = document.querySelectorAll(".has-tooltip");

has_tooltip.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        const title = item.getAttribute('title');

        document.querySelectorAll('.tooltip').forEach((tooltip) => {
            tooltip.remove();
        });

        const div = document.createElement('div');
        div.className = 'tooltip';
        div.textContent = title;

        item.parentNode.insertBefore(div, item.nextSibling);

        div.classList.toggle('tooltip_active');
    });
});