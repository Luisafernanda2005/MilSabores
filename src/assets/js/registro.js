/* registro.js
   - Contiene la lista de regiones y comunas
   - Poblado dinámico de selects
   - Validaciones de formulario (en tiempo real y al submit)
*/

// -----------------------------
// 1) Datos: regiones y comunas
//    - Edítalos o amplia la lista aquí
// -----------------------------
const regions = [
  {
    name: "Región Metropolitana de Santiago",
    comunas: ["Santiago", "Providencia", "Las Condes", "Ñuñoa", "Maipú"]
  },
  {
    name: "Región de la Araucanía",
    comunas: ["Temuco", "Villarrica", "Pucón", "Melipeuco"]
  },
  {
    name: "Región de Ñuble",
    comunas: ["Chillán", "Chillán Viejo", "Linares", "Quirihue"]
  },
  {
    name: "Región del Biobío",
    comunas: ["Concepción", "Talcahuano", "Hualpén", "Los Ángeles"]
  }
];

// -----------------------------
// 2) Utilidades DOM
// -----------------------------
const $ = id => document.getElementById(id);

// error helpers
function setError(input, message) {
  input.classList.add('is-invalid');
  const errEl = document.getElementById(input.id + 'Error');
  if (errEl) errEl.textContent = message;
}

function clearError(input) {
  input.classList.remove('is-invalid');
  const errEl = document.getElementById(input.id + 'Error');
  if (errEl) errEl.textContent = '';
}

// -----------------------------
// 3) Poblado de selects región/comuna
// -----------------------------
function populateRegions() {
  const regionSelect = $('region');
  regions.forEach((r, index) => {
    const opt = document.createElement('option');
    opt.value = index; // usamos índice para luego acceder fácilmente
    opt.textContent = r.name;
    regionSelect.appendChild(opt);
  });
}

function populateComunas(regionIndex) {
  const comunaSelect = $('comuna');
  // limpiar
  comunaSelect.innerHTML = '<option value="">-- Seleccione la comuna --</option>';
  if (regionIndex === '' || regionIndex === null) {
    comunaSelect.disabled = true;
    return;
  }
  const comunas = regions[regionIndex].comunas;
  comunas.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    comunaSelect.appendChild(opt);
  });
  comunaSelect.disabled = false;
}

// -----------------------------
// 4) Validaciones individuales
// -----------------------------
function validateName() {
  const input = $('name');
  const val = input.value.trim();
  clearError(input);
  if (!val) {
    setError(input, 'El nombre es requerido.');
    return false;
  }
  if (val.length > 100) {
    setError(input, 'El nombre no puede superar 100 caracteres.');
    return false;
  }
  return true;
}

function validateEmail() {
  const input = $('email');
  const val = input.value.trim();
  clearError(input);
  if (!val) {
    setError(input, 'El correo es requerido.');
    return false;
  }
  if (val.length > 100) {
    setError(input, 'El correo no puede superar 100 caracteres.');
    return false;
  }
  // validación básica de formato
  const basicEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!basicEmailRegex.test(val)) {
    setError(input, 'Ingresa un correo válido.');
    return false;
  }
  // dominio permitido (según requerimiento)
  const allowedDomains = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
  const lower = val.toLowerCase();
  const okDomain = allowedDomains.some(d => lower.endsWith(d));
  if (!okDomain) {
    setError(input, 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com');
    return false;
  }
  return true;
}

function validateEmailConfirm() {
  const input = $('emailConfirm');
  const val = input.value.trim();
  const main = $('email').value.trim();
  clearError(input);
  if (!val) {
    setError(input, 'Confirma tu correo.');
    return false;
  }
  if (val !== main) {
    setError(input, 'Los correos no coinciden.');
    return false;
  }
  return true;
}

function validatePassword() {
  const input = $('password');
  const val = input.value;
  clearError(input);
  if (!val) {
    setError(input, 'La contraseña es requerida.');
    return false;
  }
  if (val.length < 4 || val.length > 10) {
    setError(input, 'La contraseña debe tener entre 4 y 10 caracteres.');
    return false;
  }
  return true;
}

function validateConfirmPassword() {
  const input = $('confirmPassword');
  const val = input.value;
  const main = $('password').value;
  clearError(input);
  if (!val) {
    setError(input, 'Confirma la contraseña.');
    return false;
  }
  if (val !== main) {
    setError(input, 'Las contraseñas no coinciden.');
    return false;
  }
  return true;
}

function validatePhone() {
  const input = $('phone');
  const val = input.value.trim();
  clearError(input);
  if (!val) return true; // opcional
  // permitir solo dígitos, espacios, + y guiones
  const phoneRegex = /^[0-9+\s\-()]{6,20}$/;
  if (!phoneRegex.test(val)) {
    setError(input, 'Teléfono inválido (use sólo números, +, espacios o guiones).');
    return false;
  }
  return true;
}

function validateRegion() {
  const input = $('region');
  clearError(input);
  if (!input.value) {
    setError(input, 'Selecciona una región.');
    return false;
  }
  return true;
}

function validateComuna() {
  const input = $('comuna');
  clearError(input);
  if (!input.value) {
    setError(input, 'Selecciona una comuna.');
    return false;
  }
  return true;
}

// -----------------------------
// 5) Validación final al enviar
// -----------------------------
function validateForm() {
  const vName = validateName();
  const vEmail = validateEmail();
  const vEmailConfirm = validateEmailConfirm();
  const vPass = validatePassword();
  const vPassConf = validateConfirmPassword();
  const vPhone = validatePhone();
  const vRegion = validateRegion();
  const vComuna = validateComuna();

  return vName && vEmail && vEmailConfirm && vPass && vPassConf && vPhone && vRegion && vComuna;
}

// -----------------------------
// 6) Envío: si OK, guardamos en localStorage (para pruebas) y mostramos mensaje
// -----------------------------
function onSubmit(e) {
  e.preventDefault();
  const alertBox = $('formAlert');
  alertBox.classList.remove('alert-success', 'alert-danger');
  if (!validateForm()) {
    alertBox.classList.add('alert-danger');
    alertBox.classList.remove('d-none');
    alertBox.textContent = 'Hay errores en el formulario. Revisa los campos marcados.';
    // scrollear al primer error
    const firstErr = document.querySelector('.is-invalid');
    if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  // construir objeto usuario (solo para demo)
  const user = {
    name: $('name').value.trim(),
    email: $('email').value.trim(),
    phone: $('phone').value.trim(),
    region: regions[$('region').value].name,
    comuna: $('comuna').value
    // NO guardamos contraseñas en texto plano en produccion
  };

  // guardar en localStorage (array "users")
  const stored = JSON.parse(localStorage.getItem('users') || '[]');
  stored.push(user);
  localStorage.setItem('users', JSON.stringify(stored));

  // mostrar mensaje éxito y limpiar
  alertBox.classList.add('alert-success');
  alertBox.classList.remove('d-none');
  alertBox.textContent = 'Registro exitoso. ¡Bienvenido/a!';
  $('registroForm').reset();
  $('comuna').disabled = true;

  // quitar errores visibles
  document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
}

// -----------------------------
// 7) Eventos de inicialización y validación en tiempo real
// -----------------------------
document.addEventListener('DOMContentLoaded', () => {
  populateRegions();

  // al cambiar región, poblar comunas
  $('region').addEventListener('change', (e) => {
    populateComunas(e.target.value);
    clearError($('region'));
    // limpiar comuna error
    clearError($('comuna'));
  });

  // validaciones on input
  $('name').addEventListener('input', validateName);
  $('email').addEventListener('input', validateEmail);
  $('emailConfirm').addEventListener('input', validateEmailConfirm);
  $('password').addEventListener('input', validatePassword);
  $('confirmPassword').addEventListener('input', validateConfirmPassword);
  $('phone').addEventListener('input', validatePhone);
  $('comuna').addEventListener('change', validateComuna);

  // submit
  $('registroForm').addEventListener('submit', onSubmit);
});
