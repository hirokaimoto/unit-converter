const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("convert-btn")

buttonEl.addEventListener("click", function() {
    let inputNumber = Number(inputEl.value)
    let lengthConvertion = convertLength(inputNumber)
    let volumeConvertion = convertVolume(inputNumber)
    let massConvertion = convertMass(inputNumber)

    console.log(inputEl.value)
    lengthEl.innerHTML = lengthConvertion
    volumeEl.innerHTML = volumeConvertion
    massEl.innerHTML = massConvertion
})


function convertLengthFeet(e) {
    let feetValue = e * 3.281
    return feetValue.toFixed(3)
}

function convertLength(e) {
    const feetValue = e * 3.281
    const meterValue = e / 3.281
    const final = `<h2>Length (Meter/Feet)</h2><p>${e} meters = ${feetValue.toFixed(3)} feet | ${e} feet = ${meterValue.toFixed(3)} meters</p>`
    return final
}

function convertVolume(e) {
    const gallonValue = e * 0.264
    const literValue = e / 0.264
    const final = `<h2>Volume (Liters/Gallons)</h2><p>${e} liters = ${gallonValue.toFixed(3)} gallons | ${e} gallons = ${literValue.toFixed(3)} liters</p>`
    return final
}

function convertMass(e) {
    const poundValue = e * 2.204
    const kiloValue = e / 2.204
    const final = `<h2>Mass (Kilograms/Pounds)</h2><p>${e} kilos = ${poundValue.toFixed(3)} pounds | ${e} pounds = ${kiloValue.toFixed(3)} kilos</p>`
    return final
}

console.log(convertMass(2))