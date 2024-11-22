// Archivo JavaScript personalizado

// Botón para cambiar el tema
const themeButton = document.getElementById('toggle-theme');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme'); // Cambia la clase del body
  const isDark = document.body.classList.contains('dark-theme');
  themeButton.textContent = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
});

// Validación de formulario
const form = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que el formulario recargue la página

  // Obtiene los valores del formulario
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Verifica que todos los campos estén llenos
  if (!name || !email || !message) {
    formResponse.innerHTML = '<div class="alert alert-danger">Por favor, completa todos los campos.</div>';
    return;
  }

  // Verifica que el correo electrónico tenga un formato válido
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formResponse.innerHTML = '<div class="alert alert-warning">Por favor, ingresa un correo válido.</div>';
    return;
  }

  // Si todo está correcto, muestra un mensaje de éxito
  formResponse.innerHTML = '<div class="alert alert-success">¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</div>';
  
  // Limpia el formulario
  form.reset();
});
