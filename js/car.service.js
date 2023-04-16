'use strict'

const CARS_AMOUNT = 16

const TITLES = ['Audumea', 'Fiakibasa', 'Mitsubashi', 'Subalipesha']
const SUB_TITLES = ['NEW', 'SECOND&nbspHAND', 'TARANTA']
const IMAGES = ['img/audu-mea.png', 'img/fiak-ibasa.png', 'img/mitsu-bashi.png', 'img/subali-pesha.png']

function createCars() {
  const cars = []

  for (let i = 0; i < CARS_AMOUNT; i++) {
    cars.push(createCar())
  }

  return cars
}

function createCar() {
  const carType = getRandomInt(0, 4)
  const carCondition = getRandomInt(0, 3)
  let carPrice
  if (carCondition === 0) {
    carPrice = getRandomInt(2500, 10001)
  } else if (carCondition === 1) {
    carPrice = getRandomInt(750, 2501)
  } else if (carCondition === 2) {
    carPrice = getRandomInt(250, 751)
  }

  const descriptionAmount = getRandomInt(1, 4)
  const description = []
  for (let i = 0; i < descriptionAmount; i++) {
    description.push(makeLorem(16))
  }

  return {
    title: TITLES[carType],
    subTitle: SUB_TITLES[carCondition],
    img: IMAGES[carType],
    desc: description,
    price: carPrice,
  }
}
