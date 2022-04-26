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

const juego1 = new juegos("WORLD OF WARCRAFT", 2005, "Blizzard", "MMO-RPG", true, 3000);
const juego2 = new juegos("GOD OF WAR", 2005, "Santa Mónica Studio", "Acción", false, 1000);
const juego3 = new juegos("SUPER MARIO BROS", 1983, "Nintendo", "Plataformas", false, 2500);
const juego4 = new juegos("THE LEGEND OF ZELDA", 1986, "Nintendo", "Aventuras-RPG", true, 1500);
const juego5 = new juegos("RED DEAD REDEMPTION 2", 2018, "Rockstar Games", "Sandbox-Aventuras", true, 3000);
const juego6 = new juegos("ELDEN RING", 2022, "FromSoftware", "RPG-Acción", false, 3500);

function stock() {
    let titulo = prompt("¿Qué juego desea buscar?").toUpperCase();
    const respuesta = videojuegos.filter(item => item.titulo === titulo);
    if (respuesta[0].disponibilidad === true) {
        console.log(respuesta);
        alert("El juego " + respuesta[0].titulo + " está disponible");
    } else if (respuesta[0].disponibilidad === false) {
        console.log(respuesta);
        alert("El juego " + respuesta[0].titulo + " no está disponible");
    } else {
        alert("ERROR: introduzca otro juego");
    }
}

const videojuegos = [];

videojuegos.push(juego1, juego2, juego3, juego4, juego5, juego6);
stock();