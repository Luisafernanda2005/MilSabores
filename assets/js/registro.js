/*Validación del correo */
function validarCorreo(correo){
    const regex= /^[\w.+-]+@(duocuc\.cl|duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    return regex.test(correo);
}

/*Validar que es correo DUOC */
function esCorreoDuoc(correo){
    correo = correo.toLowerCase().trim();
    if(correo.endsWith("@duocuc.cl") ||
        correo.endsWith("@duoc.cl") ||
        correo.endsWith("@profesor.duoc.cl")){
            return true;
        }else {
            return false;
        }
}

/*Validación de la edad*/
function calcularEdad(isoDate){
    if(!isoDate){
        return null;
    }
    const hoy = new Date();
    const nacimiento= new Date(isoDate);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();

     if (
    hoy.getMonth() < nacimiento.getMonth() ||
    (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate())
    ) {
    edad = edad - 1;
    }

    return edad;
}      

/*Validación que hoy es el cumpleaños*/
function esCumpleHoy(isoDate) {
  if (!isoDate) {
    return false; 
  }

  const hoy = new Date();           
  const nacimiento = new Date(isoDate); 

  return  hoy.getMonth() === nacimiento.getMonth() &&
    hoy.getDate() === nacimiento.getDate();
}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");
    const formAlert = document.getElementById("formAlert");

    function showAlert(html, type = "success") {
    // type: 'success' | 'danger' | 'warning' | 'info'
    formAlert.className = `alert alert-${type}`;  // aplica estilo y quita d-none
    formAlert.innerHTML = html;
    formAlert.classList.remove("d-none");
  }

  

    /*Validación de la contraseña*/
    const passInput= document.getElementById('password');
    const confInput = document.getElementById('confirmPassword');

   function validarPassword() {
    if (!passInput || !confInput) return;
    if (confInput.value && passInput.value !== confInput.value) {
        confInput.setCustomValidity('Las contraseñas no coinciden.');
    } else {
        confInput.setCustomValidity(''); // limpia el error
    }
}

    /*Para escuchar mientras el usuario escribe */

    passInput.addEventListener('input', validarPassword);
    confInput.addEventListener('input', validarPassword);

    form.addEventListener('submit', function(event){
        event.preventDefault();
    

        const nombre = document.getElementById('name').value.trim();
        const correo = document.getElementById('email').value.trim();
        const nacimiento = document.getElementById('nacimiento').value;
        const telefono = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmar = document.getElementById('confirmPassword').value;
        const codigo = (document.getElementById('codigo').value || '').trim();

    /*Validar contraseñas */

    if (password !== confirmar) {
        showAlert("Las contraseñas no coinciden.", "danger");
        return;
    }
    /*Calcular edad */

    const edad = calcularEdad(nacimiento);

    /*Reglas de beneficios*/
    const beneficios = [];
    
    /*50% si es mayor de 50 años */

    if(edad !== null && edad>= 50){
        beneficios.push('50% de descuento por ser mayor de 50 años');
    }
    
    /*10% de por vida con FELICES50*/

    if(codigo.toUpperCase() === 'FELICES50'){
        beneficios.push('10% de descuento de por vida (código FELICES50)');
    }

    /*Beneficio por cumplir años hoy + utilizar correo Duoc */
    if(esCorreoDuoc(correo) && esCumpleHoy(nacimiento)){
        beneficios.push('Torta gratis hoy por cumpleaños con correo DUOC');
    }


    /* */
   
  // Mensaje final (éxito)
  const saludo = nombre || 'usuario/a';
  const edadTexto = edad ?? '-';
  const telTexto = telefono ? ` • Tel: ${telefono}` : '';
  const beneficiosTexto = beneficios.length
    ? beneficios.map(b => `• ${b}`).join('<br>')
    : '— No se aplicaron beneficios especiales.';

  const html = `
    <strong>Registro correcto, ${saludo}.</strong><br>
    Edad: ${edadTexto} años${telTexto}
    <br><br><strong>Beneficios:</strong><br>
    ${beneficiosTexto}
  `;

  showAlert(html, "success");

    });
    
    

});