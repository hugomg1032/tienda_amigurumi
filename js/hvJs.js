
let iconoBuscar= document.querySelector('#buscar-icono'), 
    iconoCarrito= document.querySelector('#carrito-icono'), 
    usuarioIcono= document.querySelector('#usuario-icono'), 
    carrusel = document.querySelector('.carrusel_imagenes'),
    punto = document.querySelectorAll('.punto');


function fnAdclassactivo(elmt1,elmt2){
    elmt1.addEventListener('click',()=>{
        let elmt= document.querySelector(elmt2);
        elmt.classList.toggle('activo')});
}

fnAdclassactivo(usuarioIcono,'.ingreso');
fnAdclassactivo(iconoBuscar,'.cuadro-busqueda')
fnAdclassactivo(iconoCarrito,'.carrito-vista')


punto.forEach((puntos, i)=> {
    punto[i].addEventListener('click',()=> {
        
        let ubicacion = i
        let calculo = ubicacion * -50

        carrusel.style.transform = `translateX(${ calculo }%)`;
        punto.forEach((puntos, i )=> {
            punto[i].classList.toggle('activo')
        })
        
        punto[i].classList.add('activo')

    })
} )


