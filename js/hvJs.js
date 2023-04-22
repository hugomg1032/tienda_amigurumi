
let iconoBuscar = document.querySelector('#buscar-icono'),
    iconoCarrito = document.querySelector('#carrito-icono'),
    usuarioIcono = document.querySelector('#usuario-icono'),
    carrusel = document.querySelector('.carrusel_imagenes'),
    punto = document.querySelectorAll('.punto');


function fnAdclassactivo(elmt1, elmt2) {
    elmt1.addEventListener('click', () => {
        let elmt = document.querySelector(elmt2);
        elmt.classList.toggle('activo')
    });
}

fnAdclassactivo(usuarioIcono, '.ingreso');
fnAdclassactivo(iconoBuscar, '.cuadro-busqueda')
fnAdclassactivo(iconoCarrito, '.carrito-vista')


punto.forEach((_a, i) => {
    punto[i].addEventListener('click', () => {

        punto.forEach((_a, i) => {
            if (punto[i].classList.contains('activo')) {
                punto[i].classList.remove('activo')
            }
        })

        let ubicacion = i;
        let calculo = ubicacion * -25;

        carrusel.style.transform = `translateX(${calculo}%)`;
        punto[i].classList.add('activo');

    });
})


