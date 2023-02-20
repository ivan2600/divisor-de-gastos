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

btn1.addEventListener('click', botonClick1);
btn2.addEventListener('click', botonClick2);
btn3.addEventListener('click', botonClick3);
btn4.addEventListener('click', botonClick4);

function botonClick1() {
  let number1 = Number(input1.value);

  console.log('funciona!');

  const suma = number1 / 4;

  person1.innerText = "$ " + suma;  
  person2.innerText = "$ " + suma;  
  person3.innerText = "$ " + suma;  
  person4.innerText = "$ " + suma;  
}

function botonClick2() {
  
  let number2 = Number(input2.value);
  
  console.log('funciona!');
  const suma = number2 / 4;
  person1.innerText = "$ " + suma;  
  person2.innerText = "$ " + suma;  
  person3.innerText = "$ " + suma;  
  person4.innerText = "$ " + suma;  
}

function botonClick3() {
  let number3 = Number(input3.value);

  console.log('funciona!');
  const suma = number3 / 4;
  person1.innerText = "$ " + suma;  
  person2.innerText = "$ " + suma;  
  person3.innerText = "$ " + suma;  
  person4.innerText = "$ " + suma;  
}

function botonClick4() {

  let number4 = Number(input4.value);
  console.log('funciona!');
  const suma = number4 / 4;
  person1.innerText = "$ " + suma;  
  person2.innerText = "$ " + suma;  
  person3.innerText = "$ " + suma;  
  person4.innerText = "$ " + suma;  
}