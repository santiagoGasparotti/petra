const menu = document.querySelector("#menu");
const menuContenedor = document.querySelector(".navegacionEnlaces");
const menuEnlaces = document.querySelectorAll(".navegacionEnlaces .enlaceSeccion");

//Galeria de nuestras obras
const imagenes = document.querySelectorAll(".obrasImg img")
const grupoImg = document.querySelector(".seccionObras")

document.addEventListener("DOMContentLoaded", () => {
    imagenesGaleria();
    behaviorSmooth();
})

//evenListeners
menu.addEventListener("click", abrirMenu);

function abrirMenu(){
    menuContenedor.classList.toggle("menuOpen");
    menu.classList.toggle("leftMenu")
    menuEnlaces.forEach(enlace => {
        enlace.addEventListener("click", cerrarMenu);
    })
}

function cerrarMenu(){
    menuContenedor.classList.toggle("menuOpen");
    menu.classList.toggle("leftMenu");
}


//Soporte a safari, probar si funciona en safari.
function behaviorSmooth (){
    menuEnlaces.forEach(function(enlace) {
        enlace.addEventListener("click",function(e){
            e.preventDefault()
            const seccion = document.querySelector(e.target.attributes.href.value);
            
            seccion.scrollIntoView({
                 behavior:'smooth'
             });
        })
    })
}


function imagenesGaleria(){
    for(let i = 0; i < imagenes.length; i++){
        imagenes[i].addEventListener("click", abrirGaleria);
    }
}

function abrirGaleria(e){
    const img = e.target.src;
    const divImg = document.createElement("div");
    const imgGrande = document.createElement("img");
    const cerrar = document.createElement("div");
    
    cerrar.innerHTML = `<p>X</p>`;
    cerrar.classList.add("cerrar");
    divImg.classList.add("fondoImg");
    imgGrande.classList.add("imgGaleria");
    imgGrande.src = img;
    //Cerramos GALERIA
    cerrar.addEventListener("click", () => {
        divImg.remove();  
    })
    
    
    divImg.appendChild(imgGrande);
    divImg.appendChild(cerrar);
    grupoImg.appendChild(divImg);
}

