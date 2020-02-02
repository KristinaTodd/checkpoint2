let currentGoldCount = 0
let goldCountElem = document.getElementById("gold-count")


let maiden = { total: 0, cost: 125, modifier: 3 }
let canon = { total: 0, cost: 25, modifier: 1 }
let parrot = { total: 0, cost: 200, modifier: 1 }
let ship = { total: 0, cost: 750, modifier: 10 }
let hat = { total: 0, cost: 1200, modifier: 0 }

function pillageIsland() {
  currentGoldCount = currentGoldCount + (1 * parrot.modifier) + (1 * hat.modifier)
  updateGoldCount()
}

function updateGoldCount() {
  let goldCountTemplate =
    `<span class="gold-counter"> <h2>${currentGoldCount}</h2></span>`

  goldCountElem.innerHTML = goldCountTemplate

  if (currentGoldCount <= 0) {
    currentGoldCount = 0
  }

  hatReady()
  parrotReady()
  canonReady()
  maidenReady()
  shipReady()
  maidenNotReady()
  canonNotReady()
  shipNotReady()
  parrotNotReady()
}

//TODO consolidate all single item buy functions into one function that takes in the item being bought
//TODO consolidate hat & parrot into one function


//PARROT

function buyParrot() {
  parrot.modifier++
  parrot.total++

  currentGoldCount = currentGoldCount - parrot.cost
  updateGoldCount()

  document.getElementById("buy-parrot").classList.add("invisible")
  document.getElementById("parrot-image").classList.remove("invisible")
  document.getElementById("parrot-desc").classList.remove("invisible")

  Swal.fire({
    position: 'top-end',
    title: 'You purchased a Parrot!',
    showConfirmButton: false,
    timer: 1500
  })
}

function parrotReady() {
  if (currentGoldCount >= parrot.cost && parrot.total == 0) {
    document.getElementById("buy-parrot").classList.remove("invisible")
  }
}

function parrotNotReady() {
  if (currentGoldCount < parrot.cost) {
    document.getElementById("buy-parrot").classList.add("invisible")
  }
}

//PIRATE HAT

function buyHat() {
  hat.modifier = 2
  hat.total++

  currentGoldCount = currentGoldCount - hat.cost
  updateGoldCount()

  document.getElementById("buy-hat").classList.add("invisible")
  document.getElementById("hat-image").classList.remove("invisible")
  document.getElementById("hat-desc").classList.remove("invisible")

  Swal.fire({
    position: 'top-end',
    title: 'You upgraded your Captain Hat!',
    showConfirmButton: false,
    timer: 2000
  })
}

function hatReady() {
  if (currentGoldCount >= hat.cost && hat.total == 0) {
    document.getElementById("buy-hat").classList.remove("invisible")
  }
}

function hatNotReady() {
  if (currentGoldCount < hat.cost) {
    document.getElementById("buy-hat").classList.add("invisible")
  }
}
//CANON 

function canonReady() {
  if (currentGoldCount >= canon.cost) {
    document.getElementById("buy-canon").classList.remove("invisible")
  }
}

function buyCanon() {
  setInterval(canonFire, 3000)

  currentGoldCount = currentGoldCount - canon.cost

  canon.total++
  updateCanonCount()
  updateCanonMod()


  updateGoldCount()

  canon.cost = canon.cost + 5
  updateCanonCost()

  Swal.fire({
    position: 'top-end',
    title: 'You purchased a canon!',
    showConfirmButton: false,
    timer: 1500
  })
}

function canonFire() {
  currentGoldCount++
  updateGoldCount()
}

function updateCanonCount() {
  let canonTemplate = `${canon.total}`
  document.getElementById("canon-total").innerHTML = canonTemplate
}

function canonNotReady() {
  if (currentGoldCount < canon.cost) {
    document.getElementById("buy-canon").classList.add("invisible")
  }
}

function updateCanonMod() {
  let canonMod = canon.total * 0.33
  let currentCanonMod = canonMod.toFixed(2)

  let template =
    `<span class="text-center">Generating ${currentCanonMod} GPS</span>`

  document.getElementById("canon-mod").innerHTML = template
}

function updateCanonCost() {
  let template =
    `Cost: ${canon.cost}<img src="./gold-coin.png" class="shoppe-gold">`

  document.getElementById("canon-cost").innerHTML = template
}
//MAIDEN

function maidenReady() {
  if (currentGoldCount >= maiden.cost) {
    document.getElementById("buy-maiden").classList.remove("invisible")
  }
}

function buyMaiden() {
  setInterval(maidenFire, 2000)

  currentGoldCount = currentGoldCount - maiden.cost

  maiden.total++
  updateMaidenCount()
  updateMaidenMod()


  updateGoldCount()

  maiden.cost = maiden.cost + 15
  updateMaidenCost()

  Swal.fire({
    position: 'top-end',
    title: 'You purchased a Pirate Maiden!',
    showConfirmButton: false,
    timer: 1500
  })
}

function maidenFire() {
  currentGoldCount = currentGoldCount + 3
  updateGoldCount()
}

function updateMaidenCount() {
  let maidenTemplate = `${maiden.total}`
  document.getElementById("maiden-total").innerHTML = maidenTemplate
}

function maidenNotReady() {
  if (currentGoldCount < maiden.cost) {
    document.getElementById("buy-maiden").classList.add("invisible")
  }
}

function updateMaidenMod() {
  let maidenMod = maiden.total * 1.5
  let currentMaidenMod = maidenMod.toFixed(1)

  let maidenTemplate = `<span class="text-center">Generating ${currentMaidenMod} GPS</span>`

  document.getElementById("maiden-mod").innerHTML = maidenTemplate
}

function updateMaidenCost() {
  let template =
    `Cost: ${maiden.cost}<img src="./gold-coin.png" class="shoppe-gold">`

  document.getElementById("maiden-cost").innerHTML = template
}

//PIRATE SHIP 
function shipReady() {
  if (currentGoldCount >= ship.cost) {
    document.getElementById("buy-ship").classList.remove("invisible")
  }
}

function buyShip() {
  setInterval(shipFire, 1000)

  currentGoldCount = currentGoldCount - ship.cost
  updateGoldCount()

  ship.total++
  updateShipCount()
  updateShipMod()


  ship.cost = ship.cost + 150
  updateShipCost()

  Swal.fire({
    position: 'top-end',
    title: 'You purchased a Pirate Ship!',
    showConfirmButton: false,
    timer: 1500
  })
}

function shipFire() {
  currentGoldCount = currentGoldCount + 10
  updateGoldCount()
}

function updateShipCount() {
  let shipTemplate = `${ship.total}`
  document.getElementById("ship-total").innerHTML = shipTemplate
}

function shipNotReady() {
  if (currentGoldCount < ship.cost) {
    document.getElementById("buy-ship").classList.add("invisible")
  }
}

function updateShipMod() {
  let currentShipMod = ship.total * 10

  let shipTemplate =
    `<span class="text-center">Generating ${currentShipMod} GPS</span>`

  document.getElementById("ship-mod").innerHTML = shipTemplate
}

function updateShipCost() {
  let template =
    `Cost: ${ship.cost}<img src="./gold-coin.png" class="shoppe-gold">`

  document.getElementById("ship-cost").innerHTML = template
}

//TODO set all current data to save locally

// function savePlayers() {
//   window.localStorage.setItem("players", JSON.stringify(players))
// }


