//Remove de cards
let section = document.getElementById("section");
section.remove();

class juegos {
    constructor(titulo, anio, fabricante, genero, disponibilidad, precio) {
        this.titulo = titulo;
        this.anio = parseInt(anio);
        this.fabricante = fabricante;
        this.genero = genero;
        this.disponibilidad = disponibilidad;
        this.precio = parseInt(precio);
    }
}

const juego1 = new juegos("WORLD OF WARCRAFT", 2005, "BLIZZARD", "MMO-RPG", true, 3000);
const juego2 = new juegos("GOD OF WAR", 2005, "SANTA MÓNICA STUDIO", "Acción", false, 1000);
const juego3 = new juegos("SUPER MARIO BROS", 1983, "NINTENDO", "Plataformas", false, 2500);
const juego4 = new juegos("THE LEGEND OF ZELDA", 1986, "NINTENDO", "Aventuras-RPG", true, 1000);
const juego5 = new juegos("RED DEAD REDEMPTION 2", 2018, "ROCKSTAR GAMES", "Sandbox-Aventuras", true, 3000);
const juego6 = new juegos("ELDEN RING", 2022, "FROMSOFTWARE", "RPG-Acción", false, 3500);

const videojuegos = [];

videojuegos.push(juego1, juego2, juego3, juego4, juego5, juego6);

function filter() {
    let valor = input.value;
    const respuesta = videojuegos.filter(juego => juego.titulo.toLowerCase() === valor.toLowerCase());
    if (respuesta[0].disponibilidad === true) {
        alert("El juego " + respuesta[0].titulo + " está disponible");
    } else if (respuesta[0].disponibilidad === false) {
        alert("El juego " + respuesta[0].titulo + " no está disponible");
    } else {
        alert("ERROR: introduzca otro juego");
    }
}

let input = document.getElementById("buscador_general");

input.addEventListener("input", () => {

});

//Botón buscar
let boton = document.getElementById("boton_buscar");
boton.addEventListener("click", (e) => {
    filter();
    e.preventDefault();
});

boton.innerHTML += "<button id='boton_buscar'>Dark</button>";

let boton_buscar = document.getElementById("boton_buscar");
boton_buscar.innerText = "Buscar";

