const productPlus = document.querySelectorAll('.product__quantity-control_inc');
const productMinus = document.querySelectorAll('.product__quantity-control_dec');const productAdd = document.querySelectorAll('.product__add');
const productsCart = document.querySelector('.cart__products');

// Счётчик если ОТНИМАЕМ кол-во.
productMinus.forEach((item) => {
    item.addEventListener('click', () => {
        const product = item.closest('.product');
        const productValue = product.querySelector('.product__quantity-value');
        productValue.textContent = Math.max(parseInt(productValue.textContent) - 1, 0);
    });
});

// Счётчик если ПЛЮСУЕМ кол-во.`
productPlus.forEach((item) => {
    item.addEventListener('click', () => {
        const product = item.closest('.product');
        const productValue = product.querySelector('.product__quantity-value');
        productValue.textContent = parseInt(productValue.textContent) + 1;
    });
});

// Добавление в корзину.
productAdd.forEach((item) => {
    item.addEventListener('click', () => {
        const product = item.closest('.product');
        const dataID = product.getAttribute('data-id');
        const count = parseInt(product.querySelector('.product__quantity-value').textContent);
        const img = product.querySelector('.product__image').getAttribute('src');

        const existingCartItem = document.querySelector(`.cart__product[data-id="${dataID}"]`);

        if (existingCartItem) {
            const existingCount = parseInt(existingCartItem.querySelector('.cart__product-count').textContent);
            existingCartItem.querySelector('.cart__product-count').textContent = existingCount + count;
        } else {
            const divCart = document.createElement('div')
            divCart.className = 'cart__product';
            divCart.setAttribute('data-id', dataID)

            const image = document.createElement('img');
            image.className = "cart__product-image";
            image.src  = img;
            divCart.appendChild(image);

            const divProduct = document.createElement('div');
            divProduct.className = 'cart__product-count';
            divProduct.textContent = count;
            divCart.appendChild(divProduct);

            productsCart.appendChild(divCart);
        }
    });
});