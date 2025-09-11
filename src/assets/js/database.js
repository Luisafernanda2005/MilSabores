// src/assets/js/database.js

// Esta es nuestra "base de datos" de productos.
// Cualquier cambio en el catálogo se hace únicamente en este archivo.
const productos = [
    {
        id: 1,
        nombre: 'Torta Cuadrada de Chocolate',
        precio: 26000,
        imagen: 'img/torta-cuadrada-chocolate.jpg',
        descripcion: 'Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.'
    },
    {
        id: 2,
        nombre: 'Torta Cuadrada de Frutas',
        precio: 28000,
        imagen: 'img/torta-cuadrada-frutas.jpg',
        descripcion: 'Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.'
    },
    {
        id: 3,
        nombre: 'Torta Circular de Vainilla',
        precio: 24000,
        imagen: 'img/torta-circular-vainilla.jpg',
        descripcion: 'Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.'
    },
    {
        id: 4,
        nombre: 'Torta Circular de Manjar',
        precio: 25000,
        imagen: 'img/torta-circular-manjar.jpg',
        descripcion: 'Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.'
    },
    {
        id: 5,
        nombre: 'Mousse de Chocolate',
        precio: 5500,
        imagen: 'img/mousse-chocolate.jpg',
        descripcion: 'Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.'
    },
    {
        id: 6,
        nombre: 'Tiramisú Clásico',
        precio: 6000,
        imagen: 'img/tiramisu-clasico.jpg',
        descripcion: 'Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.'
    },
    {
        id: 7,
        nombre: 'Torta Sin Azúcar de Naranja',
        precio: 29000,
        imagen: 'img/torta-sin-azucar-naranja.jpg',
        descripcion: 'Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.'
    },
    {
        id: 8,
        nombre: 'Cheesecake Sin Azúcar',
        precio: 30000,
        imagen: 'img/cheesecake-sin-azucar.jpg',
        descripcion: 'Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.'
    },
    {
        id: 9,
        nombre: 'Empanada de Manzana',
        precio: 3500,
        imagen: 'img/empanada-manzana.jpg',
        descripcion: 'Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.'
    },
    {
        id: 10,
        nombre: 'Tarta de Santiago',
        precio: 22000,
        imagen: 'img/tarta-santiago.jpg',
        descripcion: 'Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postros clásicos.'
    },
    {
        id: 11,
        nombre: 'Brownie Sin Gluten',
        precio: 4000,
        imagen: 'img/brownie-sin-gluten.jpg',
        descripcion: 'Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.'
    },
    {
        id: 12,
        nombre: 'Pan Sin Gluten',
        precio: 7000,
        imagen: 'img/pan-sin-gluten.jpg',
        descripcion: 'Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.'
    },
    {
        id: 13,
        nombre: 'Torta Vegana de Chocolate',
        precio: 32000,
        imagen: 'img/torta-vegana-chocolate.jpg',
        descripcion: 'Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.'
    },
    {
        id: 14,
        nombre: 'Galletas Veganas de Avena',
        precio: 12000,
        imagen: 'img/galletas-veganas-avena.jpg',
        descripcion: 'Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.'
    },
    {
        id: 15,
        nombre: 'Torta Especial de Cumpleaños',
        precio: 35000,
        imagen: 'img/torta-cumpleanos.jpg',
        descripcion: 'Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.'
    },
    {
        id: 16,
        nombre: 'Torta Especial de Boda',
        precio: 80000,
        imagen: 'img/torta-boda.jpg',
        descripcion: 'Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.'
    }
];