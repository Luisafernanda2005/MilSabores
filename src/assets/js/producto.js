/* ===============================
   PÁGINA DE DETALLE - producto.js
   =============================== */

// Espera a que todo el DOM esté cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // 1. OBTENER EL ID DEL PRODUCTO DESDE LA URL
    // ---------------------------------------------
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id')); // Usamos parseInt para convertir el ID a número

    // Referencias a los elementos del DOM que vamos a rellenar
    const productContainer = document.getElementById('product-detail-container');
    const notFoundContainer = document.getElementById('product-not-found');

    // Si no hay un ID en la URL, mostramos el error y detenemos el script
    if (isNaN(productId)) {
        productContainer.classList.add('d-none'); // Oculta el contenedor del producto
        notFoundContainer.classList.remove('d-none'); // Muestra el mensaje de error
        console.error("No se proporcionó un ID de producto válido.");
        return; // Detiene la ejecución
    }

    // 2. BUSCAR EL PRODUCTO EN NUESTRA "BASE DE DATOS"
    // ------------------------------------------------
    // La variable `productos` viene del archivo `carrito.js` que debe estar incluido ANTES que este.
    const producto = productos.find(p => p.id === productId);

    // 3. MOSTRAR LA INFORMACIÓN O UN MENSAJE DE ERROR
    // ------------------------------------------------
    if (producto) {
        // Si encontramos el producto, rellenamos el HTML
        document.title = `${producto.nombre} - Pastelería 1000 Sabores`; // Cambia el título de la página

        document.getElementById('product-image').src = producto.imagen;
        document.getElementById('product-image').alt = producto.nombre;
        document.getElementById('product-name').textContent = producto.nombre;
        document.getElementById('product-description').textContent = producto.descripcion;
        document.getElementById('product-price').textContent = `$${producto.precio.toLocaleString('es-CL')}`;

        // Configuramos el botón "Agregar al carrito"
        const addButton = document.getElementById('add-to-cart-btn');
        addButton.addEventListener('click', () => {
            // La función agregarAlCarrito() ya existe en carrito.js
            agregarAlCarrito(producto.id); 
        });

    } else {
        // Si el ID es válido pero no corresponde a ningún producto
        productContainer.classList.add('d-none');
        notFoundContainer.classList.remove('d-none');
        console.error(`Producto con ID ${productId} no encontrado.`);
    }
});