/* ===============================
   PÁGINA DE PRODUCTOS - productos.js
   - Renderiza todos los productos desde database.js
   =============================== */

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el contenedor donde irán los productos
    const productGrid = document.getElementById('product-grid');

    // Verificamos que el contenedor exista
    if (!productGrid) {
        console.error("El contenedor de productos 'product-grid' no fue encontrado.");
        return;
    }

    // Verificamos que la variable 'productos' exista (debe venir de database.js)
    if (typeof productos === 'undefined' || productos.length === 0) {
        productGrid.innerHTML = '<p class="text-center">No hay productos para mostrar en este momento.</p>';
        return;
    }

    // Variable para almacenar el HTML que vamos a generar
    let productsHTML = '';

    // Recorremos el arreglo de productos y creamos una tarjeta para cada uno
    productos.forEach(producto => {
        productsHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card h-100 shadow-sm border-0 product-card">
                    <a href="producto.html?id=${producto.id}">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    </a>
                    <div class="card-body text-center d-flex flex-column">
                        <h5 class="card-title">
                            <a href="producto.html?id=${producto.id}" class="text-decoration-none text-dark">${producto.nombre}</a>
                        </h5>
                        <p class="card-text fw-bold mt-2">$${producto.precio.toLocaleString('es-CL')}</p>
                        
                        <button class="btn-custom" onclick="agregarAlCarrito(${producto.id})">
                            <i class="fas fa-shopping-cart me-2"></i>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    // Inyectamos todo el HTML generado en el contenedor
    productGrid.innerHTML = productsHTML;
});