const menu = document.querySelector("#menu");
const menuContenedor = document.querySelector(".navegacionEnlaces");
const menuEnlaces = document.querySelectorAll(".navegacionEnlaces a");




menu.addEventListener("click", abrirMenu);

function abrirMenu(e){
    menuContenedor.classList.toggle("menuOpen");
    menu.classList.toggle("leftMenu")
    menuEnlaces.forEach(enlace => {
        enlace.addEventListener("click", cerrarMenu);
    })
}

function cerrarMenu(e){
    menuContenedor.classList.toggle("menuOpen");
}


//Soporte a safari, probar si funciona en safaria.
menuEnlaces.forEach(function(enlace) {
    enlace.addEventListener("click",function(e){
        e.preventDefault()
        // console.log(e.target.attributes.href.value)
        const seccion = document.querySelector(e.target.attributes.href.value);
        
        seccion.scrollIntoView({
             behavior:'smooth'
         });
    })
})