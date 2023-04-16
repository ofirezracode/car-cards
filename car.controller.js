'use strict'

function onInit() {
  renderCars()
}

function renderCars() {
  let carsHTML = ''
  const cars = createCars()
  console.log('cars', cars)

  carsHTML += cars
    .map((car) => {
      let carHTML = `
    <article class="card">
      <header class="card-header">
        <h2 class="card-title">${car.title}</h2>
        <h3 class="card-subtitle">${car.subTitle}</h3>
      </header>
      <img src="${car.img}" />`

      carHTML += car.desc.map((para) => `<p class="card-para">${para}</p>`).join('')

      carHTML += `
      <p class="card-price">${cars.price}</p>
      <button class="card-btn">Buy</button>
    </article>
    `
      return carHTML
    })
    .join('')

  const elCardsContainer = document.querySelector('.cards-container')
  elCardsContainer.innerHTML = carsHTML
}
