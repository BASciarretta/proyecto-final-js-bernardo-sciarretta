//Remove de cards
let section = document.getElementById("section");
section.remove();

//Clase juegos
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

//Array de juegos
const juego1 = new juegos("WORLD OF WARCRAFT", 2005, "BLIZZARD", "MMO-RPG", true, 3000);
const juego2 = new juegos("GOD OF WAR", 2005, "SANTA MÓNICA STUDIO", "Acción", false, 1000);
const juego3 = new juegos("SUPER MARIO BROS", 1983, "NINTENDO", "Plataformas", false, 2500);
const juego4 = new juegos("THE LEGEND OF ZELDA", 1986, "NINTENDO", "Aventuras-RPG", true, 1000);
const juego5 = new juegos("RED DEAD REDEMPTION 2", 2018, "ROCKSTAR GAMES", "Sandbox-Aventuras", true, 3000);
const juego6 = new juegos("ELDEN RING", 2022, "FROMSOFTWARE", "RPG-Acción", false, 3500);

const videojuegos = [];

videojuegos.push(juego1, juego2, juego3, juego4, juego5, juego6);

//Función filter para juegos (disponibilidad)
function disponibilidad() {
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

//Barra de búsqueda
const input = document.getElementById("buscador_general");

//Botón
const boton_buscar = document.getElementById("boton_buscar");
boton_buscar.addEventListener("click", (e) => {
    disponibilidad();
    e.preventDefault();
});

boton_buscar.innerHTML += "<button id='boton_buscar'>Dark</button>";
boton_buscar.innerText = "Buscar";

// Storage y JSON
localStorage.clear();

function agregarALocalStorage(games) {
    const videojuegos = localStorage.getItem("videojuegos");
    let arrayVideojuegos = [];

    if (videojuegos !== null) {
        arrayVideojuegos = JSON.parse(videojuegos);
    }

    arrayVideojuegos.push(games);

    localStorage.setItem("videojuegos", JSON.stringify(arrayVideojuegos));
}

const container = document.getElementById("container");

videojuegos.forEach((games) => {
    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.innerText = games.titulo

    const li2 = document.createElement("li");
    li2.innerText = games.fabricante

    const li3 = document.createElement("li");
    li3.innerText = games.genero

    const li4 = document.createElement("li");
    li4.innerText = games.precio

    const button = document.createElement("button");
    button.addEventListener("click", () => {

        agregarALocalStorage(games);
    });
    button.innerText = "Comprar";
    ul.append(li1, li2, li3, li4, button);

    container.append(ul);
})
