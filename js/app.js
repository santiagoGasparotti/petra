const menu = document.querySelector("#menu");
const menuContenedor = document.querySelector(".navegacionEnlaces");
const menuEnlaces = document.querySelectorAll(".navegacionEnlaces .enlaceSeccion");
const body = document.querySelector("#inicio");
const enlacesActive = document.querySelectorAll(".seccionNavActive");

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
    menu.classList.toggle("leftMenu");
    body.classList.toggle("sinScroll");
    menuEnlaces.forEach(enlace => {
        enlace.addEventListener("click", cerrarMenu);
    })
}

function cerrarMenu(){
    menuContenedor.classList.toggle("menuOpen");
    menu.classList.toggle("leftMenu");
    body.classList.toggle("sinScroll");
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
    if(e.target.alt === "Salon de fiestas, jano's - Ituzaingo"){
        imgGrande.classList.add("imgGaleriaHorizontal")
    }else{
        imgGrande.classList.add("imgGaleria");
    }
    imgGrande.src = img;
    //Cerramos GALERIA
    cerrar.addEventListener("click", () => {
        divImg.remove();  
    })
    
    
    divImg.appendChild(imgGrande);
    divImg.appendChild(cerrar);
    grupoImg.appendChild(divImg);
}

const callback = (entries) => {
    entries.forEach(entry => {
        const claseNav = entry.target.classList[0];
        const sectorActivo = document.querySelector(".sectorActivo");
        if(entry.isIntersecting){
            //Comprobar si existe esta clase(estilo de la linea verde en el enlace), se borrara y luego se agregar al enlace 
            if(sectorActivo){
                sectorActivo.classList.remove("sectorActivo")
            }
            //Agregamos el enlace
            const enlaceActivoNav = document.querySelector(`[data-enlace="${claseNav}"]`);
            enlaceActivoNav.classList.add("sectorActivo")
        }
    })
}

const options = {
    threshold: 0.75
}

const observer = new IntersectionObserver(callback, options)
enlacesActive.forEach(enlace => observer.observe(enlace))
