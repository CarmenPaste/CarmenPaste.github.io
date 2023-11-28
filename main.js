$(document).ready(function() {
    // Cuando se hace clic en el enlace con la clase "btn-rocoto"
    $("a.btn-rocoto").on("click", function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Agrega o quita la clase "estilo-custom" en el elemento con ID "mi-elemento"
        $("#mi-elemento").toggleClass("estilo-custom");
    });
});


// main.js

$(document).ready(function() {
    // Cuando se hace clic en un enlace de la barra de navegación
    $(".navbar-nav .nav-link").on("click", function() {
        // Remover la clase "navbar-active" de todos los elementos
        $(".navbar-nav .nav-link").removeClass("navbar-active");

        // Agregar la clase "navbar-active" al elemento clicado
        $(this).addClass("navbar-active");
    });
});
