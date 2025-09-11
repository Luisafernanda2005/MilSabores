// ====== LOCALSTORAGE ======
var CLAVE_CARRITO = "carrito_ms";

function obtenerCarrito() {
  var txt = localStorage.getItem(CLAVE_CARRITO);
  if (!txt) return [];
  try { return JSON.parse(txt); } catch(e) { return []; }
}

function guardarCarrito(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

// ====== UTILIDAD ======
function formatoCLP(n) {
  return "$" + Number(n).toLocaleString("es-CL");
}

function buscarProductoPorId(id) {
  // requiere que database.js ya esté cargado y exponga "productos"
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].id === id) return productos[i];
  }
  return null;
}

// ====== API SIMPLE DEL CARRITO ======
function agregarAlCarrito(idProducto) {
  var prod = buscarProductoPorId(idProducto);
  if (!prod) { alert("Producto no encontrado"); return; }

  var carrito = obtenerCarrito();
  var i, idx = -1;

  for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id === idProducto) { idx = i; break; }
  }

  if (idx >= 0) {
    carrito[idx].cantidad = carrito[idx].cantidad + 1;
  } else {
    carrito.push({
      id: prod.id,
      nombre: prod.nombre,
      precio: prod.precio,
      imagen: prod.imagen || "",
      cantidad: 1
    });
  }

  guardarCarrito(carrito);
  alert("Producto agregado al carrito");
}

function cambiarCantidad(idProducto, nuevaCantidad) {
  var n = parseInt(nuevaCantidad, 10);
  if (isNaN(n) || n < 1) n = 1;

  var carrito = obtenerCarrito();
  for (var i = 0; i < carrito.length; i++) {
    if (carrito[i].id === idProducto) {
      carrito[i].cantidad = n;
      break;
    }
  }
  guardarCarrito(carrito);
  dibujarCarrito();
}

function eliminarItem(idProducto) {
  var carrito = obtenerCarrito();
  var nuevo = [];
  for (var i = 0; i < carrito.length; i++) {
    if (carrito[i].id !== idProducto) {
      nuevo.push(carrito[i]);
    }
  }
  guardarCarrito(nuevo);
  dibujarCarrito();
}

function vaciarCarrito() {
  localStorage.removeItem(CLAVE_CARRITO);
  dibujarCarrito();
}

function totalCarrito() {
  var carrito = obtenerCarrito();
  var total = 0;
  for (var i = 0; i < carrito.length; i++) {
    total += carrito[i].precio * carrito[i].cantidad;
  }
  return total;
}

// ====== DIBUJAR TABLA EN carrito.html ======
function dibujarCarrito() {
  var tbody = document.getElementById("carrito-body");
  var totalEl = document.getElementById("total");
  if (!tbody || !totalEl) return; // por si llamas en otra página

  var carrito = obtenerCarrito();
  tbody.innerHTML = "";

  if (carrito.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">Tu carrito está vacío</td></tr>';
    totalEl.textContent = "$0";
    return;
  }

  for (var i = 0; i < carrito.length; i++) {
    var it = carrito[i];

    var tr = document.createElement("tr");
    var fila =
      '<td>' +
        '<div class="d-flex align-items-center">' +
          (it.imagen ? '<img src="' + it.imagen + '" class="me-2" style="width:48px;height:48px;object-fit:cover;border-radius:8px;">' : '') +
          '<div>' + it.nombre + '</div>' +
        '</div>' +
      '</td>' +
      '<td>' + it.id + '</td>' +
      '<td class="text-end">' + formatoCLP(it.precio) + '</td>' +
      '<td>' +
        '<input type="number" min="1" value="' + it.cantidad + '" ' +
        'class="form-control form-control-sm cantidad-input" data-id="' + it.id + '">' +
      '</td>' +
      '<td class="text-end">' + formatoCLP(it.precio * it.cantidad) + '</td>' +
      '<td class="text-end">' +
        '<button class="btn btn-sm btn-outline-danger btn-eliminar" data-id="' + it.id + '">✕</button>' +
      '</td>';

    tr.innerHTML = fila;
    tbody.appendChild(tr);
  }

  // eventos de cantidad y eliminar
  var inputs = tbody.querySelectorAll(".cantidad-input");
  for (var j = 0; j < inputs.length; j++) {
    inputs[j].addEventListener("change", function () {
      var id = this.getAttribute("data-id");
      var val = this.value;
      cambiarCantidad(id, val);
    });
  }

  var btns = tbody.querySelectorAll(".btn-eliminar");
  for (var k = 0; k < btns.length; k++) {
    btns[k].addEventListener("click", function () {
      var id = this.getAttribute("data-id");
      eliminarItem(id);
    });
  }

  totalEl.textContent = formatoCLP(totalCarrito());

}

  // Al final de src/assets/js/carrito.js
    document.addEventListener('DOMContentLoaded', function () {
  // Dibuja la tabla (si no estás en carrito.html, la función sale sola)
  dibujarCarrito();

  // Botón: Vaciar
  var btnVaciar = document.getElementById('btn-vaciar');
  if (btnVaciar) {
    btnVaciar.addEventListener('click', vaciarCarrito);
  }

  // Botón: Pagar (demo)
  var btnPagar = document.getElementById('btn-pagar');
  if (btnPagar) {
    btnPagar.addEventListener('click', function () {
      alert('Seleccione su metodo de pago');
    });
  }
});
