const contactForm = document.getElementById("contacto-form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const nombreValue = nombre.value;
    const emailValue = email.value;
    const mensajeValue = mensaje.value;

    if (!nombreValue | !emailValue | !mensajeValue) {
        alert("Debe completar todos los campos.");
        return;
    }
    
    console.log(nombreValue);
    console.log(emailValue);
    console.log(mensajeValue);

    alert("Su solicitud ha sido enviada.")
});


window.addEventListener('load', () => {

    const imagenHTML = document.getElementById("carrusel");
    let imagenes = [];


    imagenes[0] = "./imagenes/img1.jpg"
    imagenes[1] = "./imagenes/img2.jpg"
    imagenes[2] = "./imagenes/img3.jpg"
    imagenHTML.src = imagenes[0];

    let indice = 0;

    function cambiarImagen(){
        console.log("pasa por aquí");
        if (indice < 3){
            imagenHTML.src = imagenes[indice];
            indice++;
        }else{
            indice = 0;
        }
    }

    setInterval(cambiarImagen, 2500);

})
