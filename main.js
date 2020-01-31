let currentGoldCount = 0
let goldCountElem = document.getElementById("gold-count")

let maiden = { total: 0, cost: 125, modifier: 3 }
let canon = { total: 0, cost: 25, modifier: 1 }

function pillageIsland() {
  currentGoldCount++
  updateGoldCount()
}

function updateGoldCount() {
  let goldCountTemplate =
    `<span class="gold-counter"><img src="./gold-coin.png" class="gold-coin"> ${currentGoldCount}</span>`

  goldCountElem.innerHTML = goldCountTemplate

  if (currentGoldCount <= 0) {
    currentGoldCount = 0
  }

  canonReady()
  maidenReady()
}

//CANON 

function canonReady() {
  if (currentGoldCount >= canon.cost) {
    document.getElementById("buy-canon").classList.remove("invisible")
    console.log("Canon Cost =", canon.cost)
  }
}

function buyCanon() {
  setInterval(canonFire, 3000)
  document.getElementById("buy-canon").classList.add("invisible")
  currentGoldCount = currentGoldCount - canon.cost

  canon.total++
  updateCanonCount()

  updateGoldCount()

  canon.cost = canon.cost + 5
}

function canonFire() {
  currentGoldCount++
  updateGoldCount()
}

function updateCanonCount() {
  let canonTemplate = `${canon.total}`
  document.getElementById("canon-total").innerHTML = canonTemplate
}

//MAIDEN

function maidenReady() {
  if (currentGoldCount >= maiden.cost) {
    document.getElementById("buy-maiden").classList.remove("invisible")
    console.log("Maiden Cost=", maiden.cost)
  }
}

function buyMaiden() {
  setInterval(maidenFire, 2000)
  document.getElementById("buy-maiden").classList.add("invisible")
  currentGoldCount = currentGoldCount - maiden.cost

  maiden.total++
  updateMaidenCount()

  updateGoldCount()

  maiden.cost = maiden.cost + 15
}

function maidenFire() {
  currentGoldCount = currentGoldCount + 3
  updateGoldCount()
}

function updateMaidenCount() {
  let maidenTemplate = `${maiden.total}`
  document.getElementById("maiden-total").innerHTML = maidenTemplate
}