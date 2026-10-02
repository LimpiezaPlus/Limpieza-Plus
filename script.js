const formulario = document.getElementById("formulario-presupuesto");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const tipo = document.getElementById("tipo").value;
    const frecuencia = document.getElementById("frecuencia").value;
    const mensaje = document.getElementById("mensaje").value;

    const texto = `Hola, quiero solicitar un presupuesto de Limpieza+.

    Nombre: ${nombre}
    Teléfono: ${telefono}
    Tipo de lugar: ${tipo}
    Frecuencia: ${frecuencia}
    Detalles: ${mensaje}`;

    const textoCodificado = encodeURIComponent(texto);

    const numeroWhatsApp = "5493412828076";

    const urlWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;
    
    window.open(urlWhatsApp, "_blank");

});

    const botonMenu = document.getElementById("menu-boton");
    const menu = document.getElementById("menu");

    botonMenu.addEventListener("click", function() {
        
        menu.classList.toggle("menu-abierto");

        if (menu.classList.contains("menu-abierto")) {
            botonMenu.textContent = "✕";
        } else {
            botonMenu.textContent = "☰";
        }

    });