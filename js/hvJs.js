
let iconoBuscar= document.querySelector('#buscar-icono'), 
    iconoCarrito= document.querySelector('#carrito-icono'), 
    usuarioIcono= document.querySelector('#usuario-icono'), 
    carrusel = document.querySelector('.imagenes'),
    punto = document.querySelectorAll('.punto');


function fnAdclassActive(elmt1,elmt2){
    elmt1.addEventListener('click',()=>{
        let elmt= document.querySelector(elmt2);
        elmt.classList.toggle('active')});
}

fnAdclassActive(usuarioIcono,'.ingreso');
fnAdclassActive(iconoBuscar,'.cuadro-busqueda')
fnAdclassActive(iconoCarrito,'.carrito-vista')


punto.forEach((puntos, i)=> {
    punto[i].addEventListener('click',()=> {
        
        let ubicacion = i
        let calculo = ubicacion * -50

        carrusel.style.transform = `translateX(${ calculo }%)`

        punto.forEach((puntos, i )=> {
            punto[i].classList.remove('activo')
        })

        punto[i].classList.add('activo')

    })
} )


