document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            card.classList.add("zoomIn");
            card.classList.remove("zoomOut");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.add("zoomOut");
            card.classList.remove("zoomIn");
        });
    });

    const cart = [];
    const cartCount = document.getElementById('cartCount');
    const cartBody = document.getElementById('cart-body');
    const totalElement = document.getElementById('total');
    const clearCartBtn = document.getElementById('clearCart');
    const checkoutBtn = document.getElementById('checkout');

    // Agregar productos al carrito
    document.querySelectorAll('.btn-danger').forEach(button => {
        button.addEventListener('click', function () {
            const product = this.getAttribute('data-product');
            const price = parseFloat(this.getAttribute('data-price'));

            const existingProduct = cart.find(item => item.product === product);
            if (existingProduct) {
                existingProduct.quantity += 1; // Si ya existe, solo aumentamos la cantidad
            } else {
                cart.push({ product, price, quantity: 1 }); // Agregamos un nuevo producto
            }

            updateCart();
        });
    });

    // Vaciar carrito
    clearCartBtn.addEventListener('click', function () {
        cart.length = 0;
        updateCart();
    });

    // Concretar compra (aún no implementado, solo muestra un mensaje por ahora)
    checkoutBtn.addEventListener('click', function () {
        alert('Compra concretada. ¡Gracias por tu compra!');
        cart.length = 0; // Limpiamos el carrito
        updateCart();
    });

    // Actualizar el carrito y recalcular el total
    function updateCart() {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCount.textContent = totalItems;

        cartBody.innerHTML = ''; // Limpiar el cuerpo de la tabla
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;

            const row = document.createElement('tr');

            const productCell = document.createElement('td');
            productCell.textContent = item.product;

            const priceCell = document.createElement('td');
            priceCell.innerHTML = `<span class="neon-price">${item.price.toFixed(2)}</span>`;

            const quantityCell = document.createElement('td');
            const quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.classList.add('form-control');
            quantityInput.value = item.quantity;
            quantityInput.min = 1; // La cantidad no puede ser menor a 1
            quantityInput.addEventListener('change', () => {
                item.quantity = parseInt(quantityInput.value);
                updateCart();
            });
            quantityCell.appendChild(quantityInput);

            const removeCell = document.createElement('td');
            const removeBtn = document.createElement('button');
            removeBtn.classList.add('btn', 'btn-sm', 'btn-danger');
            removeBtn.textContent = 'Eliminar';
            removeBtn.addEventListener('click', () => {
                cart.splice(index, 1);
                updateCart();
            });
            removeCell.appendChild(removeBtn);

            row.appendChild(productCell);
            row.appendChild(priceCell);
            row.appendChild(quantityCell);
            row.appendChild(removeCell);
            cartBody.appendChild(row);
        });

        totalElement.textContent = total.toFixed(2);
    }
});
