document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    navegacionFija();
});


function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function( enlace ) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function navegacionFija() {
    
}