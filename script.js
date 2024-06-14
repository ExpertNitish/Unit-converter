const btn = document.querySelector('button');
const input = document.querySelector('input');
let meters = document.querySelector('#meters');
let liters = document.querySelector('#liters');
let kilogram = document.querySelector('.kg');
let meter = 3.28084;
let liter = 0.264172;
let kilo = 2.20462;
let pound = 0.453592;
let gallons = 3.78541;
let feet = 0.3048;
let unit = ''

btn.addEventListener('click', function(){
  unit = input.value;
  meters.innerText = `${unit} meters = ${(unit * meter).toFixed(3)} feet | ${unit} feet = ${(unit * feet).toFixed(3)} meters`
  liters.innerText = `${unit} liters = ${(unit * liter).toFixed(3)} gallons | ${unit} gallons = ${(unit * gallons).toFixed(3)} liters`
  kilogram.innerText = `${unit} kilos =${(unit * kilo).toFixed(3)} pounds | ${unit} pounds = ${(unit * pound).toFixed(3)} kilos`
  input.value = "";
})

