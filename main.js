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