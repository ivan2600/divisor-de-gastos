const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const btn1 = document.querySelector('#btn-calcular1');
const btn2 = document.querySelector('#btn-calcular2');
const btn3 = document.querySelector('#btn-calcular3');
const btn4 = document.querySelector('#btn-calcular4');
const person1 = document.querySelector('#person1');
const person2 = document.querySelector('#person2');
const person3 = document.querySelector('#person3');
const person4 = document.querySelector('#person4');
const saldos1 = [];
const saldos2 = [];
const saldos3 = [];
const saldos4 = [];
let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;

btn1.addEventListener('click', botonClick1);
btn2.addEventListener('click', botonClick2);
btn3.addEventListener('click', botonClick3);
btn4.addEventListener('click', botonClick4);

function calcularSaldos() {
  total1 = saldos1.reduce((a, b) => a + b, 0);
  total2 = saldos2.reduce((a, b) => a + b, 0);
  total3 = saldos3.reduce((a, b) => a + b, 0);
  total4 = saldos4.reduce((a, b) => a + b, 0);
}

function mostrarResultados() {
  person1.innerText = "$ " + total1;
  person2.innerText = "$ " + total2;
  person3.innerText = "$ " + total3;
  person4.innerText = "$ " + total4;
}

function mostrarEnConsola() {
  console.log(saldos1, saldos2, saldos3, saldos4);
  console.log(total1, total2, total3, total4);
}

function botonClick1() {
  let number1 = Number(input1.value);

  console.log('funciona!');

  saldos1.push(number1 - (number1 * 1.75));
  saldos2.push(number1 * 0.25);
  saldos3.push(number1 * 0.25);
  saldos4.push(number1 * 0.25);
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick2() {
  let number2 = Number(input1.value);

  console.log('funciona!');

  saldos1.push(number2 * 0.25);
  saldos2.push(number2 - (number2 * 1.75));
  saldos3.push(number2 * 0.25);
  saldos4.push(number2 * 0.25);
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick3() {
  let number3 = Number(input3.value);

  console.log('funciona!');
  
  saldos1.push(number3 * 0.25);
  saldos2.push(number3 * 0.25);
  saldos3.push(number3 - (number3 * 1.75));
  saldos4.push(number3 * 0.25);
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick4() {

  let number4 = Number(input4.value);
  console.log('funciona!');
  
  saldos1.push(number4 * 0.25);
  saldos2.push(number4 * 0.25);
  saldos3.push(number4 * 0.25);
  saldos4.push(number4 - (number4 * 1.75));
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}