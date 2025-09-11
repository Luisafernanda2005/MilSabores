const productos = [
   
  { "codigo": "TC001", "categoria": "Tortas Cuadradas", "nombre": "Torta Cuadrada de Chocolate", "precio": 45000 },
  { "codigo": "TC002", "categoria": "Tortas Cuadradas", "nombre": "Torta Cuadrada de Frutas", "precio": 50000 },
  { "codigo": "TT001", "categoria": "Tortas Circulares", "nombre": "Torta Circular de Vainilla", "precio": 40000 },
  { "codigo": "TT002", "categoria": "Tortas Circulares", "nombre": "Torta Circular de Manjar", "precio": 42000 },
  { "codigo": "PI001", "categoria": "Postres Individuales", "nombre": "Mousse de Chocolate", "precio": 5000 },
  { "codigo": "PI002", "categoria": "Postres Individuales", "nombre": "Tiramisú Clásico", "precio": 5500 },
  { "codigo": "PSA001", "categoria": "Productos Sin Azúcar", "nombre": "Torta Sin Azúcar de Naranja", "precio": 48000 },
  { "codigo": "PSA002", "categoria": "Productos Sin Azúcar", "nombre": "Cheesecake Sin Azúcar", "precio": 47000 },
  { "codigo": "PT001", "categoria": "Pastelería Tradicional", "nombre": "Empanada de Manzana", "precio": 3000 },
  { "codigo": "PT002", "categoria": "Pastelería Tradicional", "nombre": "Tarta de Santiago", "precio": 6000 },
  { "codigo": "PG001", "categoria": "Productos Sin Gluten", "nombre": "Brownie Sin Gluten", "precio": 4000 },
  { "codigo": "PG002", "categoria": "Productos Sin Gluten", "nombre": "Pan Sin Gluten", "precio": 3500 },
  { "codigo": "PV001", "categoria": "Productos Vegana", "nombre": "Torta Vegana de Chocolate", "precio": 50000 },
  { "codigo": "PV002", "categoria": "Productos Vegana", "nombre": "Galletas Veganas de Avena", "precio": 4500 },
  { "codigo": "TE001", "categoria": "Tortas Especiales", "nombre": "Torta Especial de Cumpleaños", "precio": 55000 },
  { "codigo": "TE002", "categoria": "Tortas Especiales", "nombre": "Torta Especial de Boda", "precio": 60000 }
];

function mostrarProductos(){
    const contenedor = document.getElementById("lista-productos");
    if(!contenedor) return;

    contenedor.innerHTML= "";
}
