let currentGoldCount = 0
let goldCountElem = document.getElementById("gold-count")

let autoItems = {
  maiden: { total: 0, cost: 125, modifier: 3 },
  ship: { total: 0, cost: 750, modifier: 10 },
  canon: { total: 0, cost: 25, modifier: 1 }
}


let parrot = { total: 0, cost: 200, modifier: 1 }

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
  saveGame()
  hatReady()
  parrotReady()
  canonReady()
  maidenReady()
  shipReady()

}

function buyAuto(autoItem) {
  currentGoldCount = currentGoldCount - autoItems[autoItem].cost
  updateGoldCount()
  saveGame()

  if (autoItem == 'canon') {
    setInterval(canonFire, 3000)
    autoItems.canon.total++
    updateCanonCount()
    updateCanonMod()
    autoItems.canon.cost = autoItems.canon.cost + 5
    updateCanonCost()

    Swal.fire({
      position: 'top-end',
      title: 'You purchased a canon!',
      showConfirmButton: false,
      timer: 1500
    })
  } else if (autoItem == 'maiden') {
    setInterval(maidenFire, 2000)

    autoItems.maiden.total++
    updateMaidenCount()
    updateMaidenMod()


    autoItems.maiden.cost = autoItems.maiden.cost + 15
    updateMaidenCost()

    Swal.fire({
      position: 'top-end',
      title: 'You purchased a Pirate Maiden!',
      showConfirmButton: false,
      timer: 1500
    })
  } else if (autoItem == 'ship') {
    setInterval(shipFire, 1000)

    autoItems.ship.total++
    updateShipCount()
    updateShipMod()

    autoItems.ship.cost = autoItems.ship.cost + 150
    updateShipCost()

    Swal.fire({
      position: 'top-end',
      title: 'You purchased a Pirate Ship!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

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
  } else if (currentGoldCount < parrot.cost) {
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
  } else if (currentGoldCount < hat.cost) {
    document.getElementById("buy-hat").classList.add("invisible")
  }
}

//CANON 

function canonReady() {
  if (currentGoldCount >= autoItems.canon.cost) {
    document.getElementById("buy-canon").classList.remove("invisible")
  } else if (currentGoldCount < autoItems.canon.cost) {
    document.getElementById("buy-canon").classList.add("invisible")
  }
}


function canonFire() {
  currentGoldCount++
  updateGoldCount()
}

function updateCanonCount() {
  let canonTemplate = `${autoItems.canon.total}`
  document.getElementById("canon-total").innerHTML = canonTemplate
}


function updateCanonMod() {
  let canonMod = autoItems.canon.total * 0.33
  let currentCanonMod = canonMod.toFixed(2)

  let template =
    `<span class="text-center">Generating ${currentCanonMod} GPS</span>`

  document.getElementById("canon-mod").innerHTML = template
}

function updateCanonCost() {
  let template =
    `Cost: ${autoItems.canon.cost}<img src="./gold-coin.png" class="shoppe-gold">`

  document.getElementById("canon-cost").innerHTML = template
}
//MAIDEN

function maidenReady() {
  if (currentGoldCount >= autoItems.maiden.cost) {
    document.getElementById("buy-maiden").classList.remove("invisible")
  } else if (currentGoldCount < autoItems.maiden.cost) {
    document.getElementById("buy-maiden").classList.add("invisible")
  }
}

function maidenFire() {
  currentGoldCount = currentGoldCount + 3
  updateGoldCount()
}

function updateMaidenCount() {
  let maidenTemplate = `${autoItems.maiden.total}`
  document.getElementById("maiden-total").innerHTML = maidenTemplate
}

function updateMaidenMod() {
  let maidenMod = autoItems.maiden.total * 1.5
  let currentMaidenMod = maidenMod.toFixed(1)

  let maidenTemplate = `<span class="text-center">Generating ${currentMaidenMod} GPS</span>`

  document.getElementById("maiden-mod").innerHTML = maidenTemplate
}

function updateMaidenCost() {
  let template =
    `Cost: ${autoItems.maiden.cost}<img src="./gold-coin.png" class="shoppe-gold">`

  document.getElementById("maiden-cost").innerHTML = template
}

//PIRATE SHIP 
function shipReady() {
  if (currentGoldCount >= autoItems.ship.cost) {
    document.getElementById("buy-ship").classList.remove("invisible")
  } else if (currentGoldCount < autoItems.ship.cost) {
    document.getElementById("buy-ship").classList.add("invisible")
  }
}

function shipFire() {
  currentGoldCount = currentGoldCount + 10
  updateGoldCount()
}

function updateShipCount() {
  let shipTemplate = `${autoItems.ship.total}`
  document.getElementById("ship-total").innerHTML = shipTemplate
}

function updateShipMod() {
  let currentShipMod = autoItems.ship.total * 10

  let shipTemplate =
    `<span class="text-center">Generating ${currentShipMod} GPS</span>`

  document.getElementById("ship-mod").innerHTML = shipTemplate
}

function updateShipCost() {
  let template =
    `Cost: ${autoItems.ship.cost}<img src="./gold-coin.png" class="shoppe-gold">`

  document.getElementById("ship-cost").innerHTML = template
}


function saveGame() {
  window.localStorage.setItem("game-stats", JSON.stringify(autoItems))
  window.localStorage.setItem("gold", JSON.stringify(currentGoldCount))
  window.localStorage.setItem("parrot", JSON.stringify(parrot))
  window.localStorage.setItem("hat", JSON.stringify(hat))
}


