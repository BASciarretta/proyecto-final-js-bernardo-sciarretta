const CardsJson = async () => {
  const respuesta = await fetch("/juegos.json")
  const juegos = await respuesta.json()

  for (const juego of juegos) {
    let Cards = document.createElement("section")
    Cards.innerHTML = (`<div class="col-lg-4 col-md-6 col-sm-12 p-2 d-flex justify-content-evenly">
    <div class="card border border-dark" style="width: 18rem">
    <img src=${juego.imagen} class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center">${juego.titulo}</h5>
        <p class="card-text d-flex justify-content-center card-text1">${juego.fabricante}</p>
        <p class="card-text d-flex justify-content-center card-text2">${juego.genero}</p>
        <p class="card-text d-flex justify-content-center card-text3">${juego.precio}</p>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-dark">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>`)

    document.body.appendChild(Cards);
  }
}

CardsJson();


