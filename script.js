const numeroWhatsApp = "5493412828076";

const formulario = document.getElementById("formulario-presupuesto");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const tipo = document.getElementById("tipo").value;
    const frecuencia = document.getElementById("frecuencia").value;
    const direccion = document.getElementById("direccion").value.trim();
    const pisos = document.getElementById("pisos").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const lineas = [
        "Hola, quiero solicitar un presupuesto de Limpieza+.",
        "",
        `Nombre: ${nombre}`,
        `Teléfono: ${telefono}`,
        `Tipo de lugar: ${tipo}`,
        `Frecuencia: ${frecuencia}`,
        `Dirección o barrio: ${direccion}`
    ];

    if (pisos) {
        lineas.push(`Pisos o unidades: ${pisos}`);
    }

    if (mensaje) {
        lineas.push(`Detalles: ${mensaje}`);
    }

    const urlWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(lineas.join("\n"))}`;

    window.open(urlWhatsApp, "_blank");

});

const botonMenu = document.getElementById("menu-boton");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {

    menu.classList.toggle("menu-abierto");

    if (menu.classList.contains("menu-abierto")) {
        botonMenu.textContent = "✕";
    } else {
        botonMenu.textContent = "☰";
    }

});
