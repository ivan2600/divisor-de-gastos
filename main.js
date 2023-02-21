const addUser = document.querySelector('#add-user');
const userName = document.querySelector('#new-user');
const btn1 = document.querySelector('#btn-calcular1');
const btn2 = document.querySelector('#btn-calcular2');
const btn3 = document.querySelector('#btn-calcular3');
const btn4 = document.querySelector('#btn-calcular4');
const namesTest = document.querySelector('#names-test');
const users = [];

addUser.addEventListener('click', addNewUser);
namesTest.addEventListener('click', e => {
  if(e.target.classList.contains('btn-calcular0')){
    botonClick0();
  }
  if(e.target.classList.contains('btn-calcular1')){
    botonClick1();
  }
  if(e.target.classList.contains('btn-calcular2')){
    botonClick2();
  }
  if(e.target.classList.contains('btn-calcular3')){
    botonClick3();
  }
})

function addNewUser() {
  let newUser = userName.value;

  users.push({
    name: newUser,
    saldo: [],
    total: 0
  });
  
  console.log(users);
  renderInputs(users);
}

function calcularSaldos() {
  users[0].total = users[0].saldo.reduce((a, b) => a + b, 0);
  users[1].total = users[1].saldo.reduce((a, b) => a + b, 0);
  users[2].total = users[2].saldo.reduce((a, b) => a + b, 0);
  users[3].total = users[3].saldo.reduce((a, b) => a + b, 0);
}

//for (resultado of arr)

function mostrarResultados() {
  const person0 = document.querySelector('.persona0');
  const person1 = document.querySelector('.persona1');
  const person2 = document.querySelector('.persona2');
  const person3 = document.querySelector('.persona3');
  const person4 = document.querySelector('.persona4');
  person0.innerText = "Total: $ " + users[0].total;
  person1.innerText = "Total: $ " + users[1].total;
  person2.innerText = "Total: $ " + users[2].total;
  person3.innerText = "Total: $ " + users[3].total;
  person4.innerText = "Total: $ " + users[4].total;
}

function mostrarEnConsola() {
  console.log(users[0].saldo, users[1].saldo, users[2].saldo, users[3].saldo);
  console.log(users[0].total, users[1].total, users[2].total, users[3].total);
}

function botonClick0() {
  const input0 = document.querySelector('#calculo0');
  let number0 = Number(input0.value);

  console.log('funciona!');

  users[0].saldo.push(number0 - (number0 / 4));
  users[1].saldo.push(number0 - (number0 + number0 / 4));
  users[2].saldo.push(number0 - (number0 + number0 / 4));
  users[3].saldo.push(number0 - (number0 + number0 / 4));
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick1() {
  const input1 = document.querySelector('#calculo1');
  let number1 = Number(input1.value);

  console.log('funciona!');

  users[0].saldo.push(number1 - (number1 + number1 / 4));
  users[1].saldo.push(number1 - (number1 / 4));
  users[2].saldo.push(number1 - (number1 + number1 / 4));
  users[3].saldo.push(number1 - (number1 + number1 / 4));
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick2() {
  const input2 = document.querySelector('#calculo2');
  let number2 = Number(input2.value);

  console.log('funciona!');
  
  users[0].saldo.push(number2 - (number2 + number2 / 4));
  users[1].saldo.push(number2 - (number2 + number2 / 4));
  users[2].saldo.push(number2 - (number2 / 4));
  users[3].saldo.push(number2 - (number2 + number2 / 4));
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick3() {
  const input3 = document.querySelector('#calculo3');
  let number3 = Number(input3.value);
  console.log('funciona!');3  
  users[0].saldo.push(number3 - (number3 + number3 / 4));
  users[1].saldo.push(number3 - (number3 + number3 / 4));
  users[2].saldo.push(number3 - (number3 + number3 / 4));
  users[3].saldo.push(number3 - (number3 / 4));
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function renderInputs(arr) {
  let i = users.length-1;

  const labelTag = document.createElement('label');
  labelTag.setAttribute('for', `calculo${i}`);
  const spanTag = document.createElement('span');
  spanTag.setAttribute('id', 'name1');
  spanTag.innerText = arr[i].name + ": ";
  const inputTag = document.createElement('input');
  inputTag.setAttribute('id', `calculo${i}`);
  inputTag.setAttribute('type', 'number');
  inputTag.setAttribute('placeholder', 'ingresar numero');

  namesTest.appendChild(labelTag);
  labelTag.appendChild(spanTag);
  labelTag.appendChild(inputTag);

  const buttonTag = document.createElement('button');
  buttonTag.setAttribute('class', `btn-calcular${i}`);
  //buttonTag.setAttribute('class', 'calcular');
  buttonTag.innerText = 'Calcular';
  const spanTotal = document.createElement('span');
  spanTotal.setAttribute('class', `persona${i}`);
  spanTotal.innerText = "Total: $ 0.00";

  namesTest.appendChild(buttonTag);
  namesTest.appendChild(spanTotal);
}

