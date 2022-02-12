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

    function cambiarImagen() {
        console.log("pasa por aquí");
        if (indice < 3) {
            imagenHTML.src = imagenes[indice];
            indice++;
        } else {
            indice = 0;
        }
    }

    setInterval(cambiarImagen, 2500);

})

const habilidadesOBJ = [
    { "descripcion": "Trabajo en equipo", "nivel": 8 },
    { "descripcion": "Manejo de lenguajes de programación", "nivel": 7 },
    { "descripcion": "Bilingue", "nivel": 6 },
    { "descripcion": "Habilidades matemáticas", "nivel": 7 },
    { "descripcion": "Síntesis de información", "nivel": 9 }]



const habilidadesJSON = JSON.stringify(habilidadesOBJ); // de obj a JSON

const habilidades = JSON.parse(habilidadesJSON); // de JSON a obj xdd


function imprimirCuadros(cantidad) {
    return " ▉".repeat(cantidad * 2)
}

let infoCuadro = `
    <tr>
        <th class="titulo-tabla"><h4>Habilidad</h4></th>
        <th class="titulo-tabla"><h4>Nivel</h4></th>
    </tr>
`
for (let i = 0; i < habilidades.length; i++) {
    infoCuadro += `<tr>
        <th>${habilidades[i].descripcion}</th>
        <th class="cuadros">${imprimirCuadros(habilidades[i].nivel)} </th>
        </tr>
            `
}

document.getElementById("habilidad-tabla").innerHTML += infoCuadro;






