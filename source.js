let portfolioNav = document.getElementById("portfolioNav")
let contactoNav = document.getElementById("contactoNav")
let bioText = document.getElementById("bio")
let sobreMi = document.getElementById("sobreMi")
let fotoDemoreel = document.getElementById("demoreel")
let fotoAnimacion = document.getElementById("fotoAnimacion")
let fotoModelaje = document.getElementById("fotoModelaje")
let fotoArte = document.getElementById("fotoArte")
let demoreelText = document.getElementById("demoreel")
let animacionText = document.getElementById("animacion")
let modelajeText = document.getElementById("modelaje")
let arteText = document.getElementById("arte")
let contactoText = document.getElementById("contactoText")

let traducido = false

function traduccion() {
    if (traducido == true) {
        portfolioNav.innerHTML = "Portfolio"
        contactoNav.innerHTML = "Contact"
        bioText.innerHTML = "I'm George, I'm 23 years old and I'm a 2D and 3D Animation student in IES Ángel de Saavedra (Córdoba). I have a passion for animation, and I'd like to specialise in both 2D and 3D animation. No matter what I'm working on, I work hard and I'll give it my all. I'm not afraid to suggest new ideas or to learn from my mistakes. All in all, I can work on anything, be it modeling, texturing, rigging or animation."
        sobreMi.innerHTML = "About me"
        fotoDemoreel.src = "img/demoreel-thumb-eng.png"
        fotoAnimacion.src = "img/animacion-thumb-eng.png"
        fotoModelaje.src = "img/modelaje-thumb-eng.png"
        fotoArte.src = "img/arte-thumb-eng.png"
        demoreelText.innerHTML = "Demo Reel"
        animacionText.innerHTML = "Animation"
        modelajeText.innerHTML = "Modeling"
        arteText.innerHTML = "Art"
        contactoText.innerHTML = "Contact"

        traducido = false
    } else if (traducido == false){
        portfolioNav.innerHTML = "Portfolio"
        contactoNav.innerHTML = "Contacto"
        bioText.innerHTML = "Soy George, tengo 23 años y soy estudiante de Animaciones 2D y3D, juegos y entornos interactivos en el IES Ángel de Saavedra (Córdoba). Mi pasión es la animación, y busco especializarme en el apartado de animación tanto 2D como 3D. En cualquier proyecto soy una persona trabajadora y dedicada, y no tengo miedo a aportar ideas y de aprender de mis errores. No obstante, soy capaz de trabajar en cualquier ámbito, ya sea modelaje, texturizado, rigging, o animación."
        sobreMi.innerHTML = "Sobre Mí"
        fotoDemoreel.src = "img/demoreel-thumb.png"
        fotoAnimacion.src = "img/animacion-thumb.png"
        fotoModelaje.src = "img/modelaje-thumb.png"
        fotoArte.src = "img/arte-thumb.png"
        demoreelText.innerHTML = "Demo Reel"
        animacionText.innerHTML = "Animación"
        modelajeText.innerHTML = "Modelaje"
        arteText.innerHTML = "Arte"
        contactoText.innerHTML = "Contacto"

        traducido = true
    }
}

