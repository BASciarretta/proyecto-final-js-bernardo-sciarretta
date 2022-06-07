//Objetos y array de juegos
class juegos {
  constructor(titulo, fabricante, genero, disponibilidad, precio) {
    this.titulo = titulo;
    this.fabricante = fabricante;
    this.genero = genero;
    this.disponibilidad = disponibilidad;
    this.precio = parseInt(precio);
  }
}

const juego1 = new juegos("STARCRAFT", "BLIZZARD", "RTS", false, 1000);
const juego2 = new juegos("GTA 5", "ROCKSTAR GAMES", "Sandbox-Acción", false, 1500);
const juego3 = new juegos("POKÉMON", "GAME FREAK", "Rol", false, 1000);
const juego4 = new juegos("SILENT HILL", "KONAMI", "Survival horror", false, 2000);
const juego5 = new juegos("CYBERPUNK 2077", "CD PROJEKT", "Sandbox-Acción", false, 3000);
const juego6 = new juegos("V RISING", "STUNLOCK STUDIOS", "MMORPG-Survival", false, 3500);
const juego7 = new juegos("WORLD OF WARCRAFT", "BLIZZARD", "MMO-RPG", true, 3000);
const juego8 = new juegos("GOD OF WAR", "SANTA MÓNICA STUDIO", "Acción", true, 1000);
const juego9 = new juegos("SUPER MARIO BROS", "NINTENDO", "Plataformas", true, 2500);
const juego10 = new juegos("THE LEGEND OF ZELDA", "NINTENDO", "Aventuras-RPG", true, 1000);
const juego11 = new juegos("RED DEAD REDEMPTION 2", "ROCKSTAR GAMES", "Sandbox-Aventuras", true, 3000);
const juego12 = new juegos("ELDEN RING", "FROMSOFTWARE", "RPG-Acción", true, 3500);

const videojuegos = [];

videojuegos.push(juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8, juego9, juego10, juego11, juego12);


//Buscador de juegos
function disponibilidad() {
  const input = document.getElementById("buscador_general");
  let valor = input.value;
  const respuesta = videojuegos.filter(juego => juego.titulo.toLowerCase() === valor.toLowerCase());
  (respuesta[0].disponibilidad === true) ? Swal.fire("El juego " + respuesta[0].titulo + " está disponible") : Swal.fire("El juego " + respuesta[0].titulo + " no está disponible");
}

//Botón de la barra de búsqueda
const boton_buscar = document.getElementById("boton_buscar");
boton_buscar.addEventListener("click", (e) => {
  disponibilidad();
  e.preventDefault();
});


//Generador de cards
const CardsJson = async () => {
  const respuesta = await fetch("/juegos.json")
  const juegos = await respuesta.json()

  cardsConteiner = document.querySelector('#CardsSection')

  for (const juego of juegos) {
    let Cards = document.createElement("div")
    Cards.classList.add("col-lg-4", "col-md-6", "col-sm-12", "p-2", "d-flex", "justify-content-evenly")
    Cards.innerHTML = (`<div class="">
    <div class="card border border-dark" style="width: 18rem">
    <img src=${juego.imagen} class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center">${juego.titulo}</h5>
        <p class="card-text d-flex justify-content-center card-text1">${juego.fabricante}</p>
        <p class="card-text d-flex justify-content-center card-text2">${juego.genero}</p>
        <p class="card-text d-flex justify-content-center card-text3">$${juego.precio}</p>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-dark boton">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>`);

    cardsConteiner.appendChild(Cards);

  }
}
CardsJson();


const Clickbutton = document.getElementsByClassName('boton');
console.log(Clickbutton)
