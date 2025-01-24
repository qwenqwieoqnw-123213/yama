document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/database-tienda.json')
        .then(response => response.json())
        .then(data => {
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

    mostrarCarrito();

    

    const cartIcon = document.querySelector('.cart-icon');
    const cart = document.querySelector('.cart');

    cartIcon.addEventListener('click', () => {
        cart.classList.toggle('show');
    });

});

function mostrarCarrito() { 
    // Actualizar el contador del carrito
    actualizarContadorCarrito();
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-button')) {
        const id = event.target.getAttribute('data-id');
        eliminarDelCarrito(id);
    }
});


function actualizarContadorCarrito() {
    document.querySelector('.cart-count').textContent = 1;
 
}



