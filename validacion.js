document.getElementById('formRegistro').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const carrera = document.getElementById('carrera').value;
    const conferencias = document.querySelectorAll('input[name="eventos"]:checked');
  
    const mensaje = document.getElementById('mensaje');
  
    if (!nombre || !correo || !carrera) {
      mensaje.textContent = "Todos los campos deben estar llenos.";
      mensaje.style.color = "red";
      return;
    }
  
    if (!correo.endsWith("@uamv.edu.ni")) {
      mensaje.textContent = "El correo debe ser institucional (@uamv.edu.ni).";
      mensaje.style.color = "red";
      return;
    }
  
    if (conferencias.length === 0) {
      mensaje.textContent = "Debe seleccionar al menos una conferencia.";
      mensaje.style.color = "red";
      return;
    }
  
    alert("Ha sido inscrito satisfactoriamente");
    mensaje.textContent = "";
  });
