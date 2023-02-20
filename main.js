const addUser = document.querySelector('#add-user');
const userName = document.querySelector('#new-user');
const name1 = document.querySelector('#name1');
const name2 = document.querySelector('#name2');
const name3 = document.querySelector('#name3');
const name4 = document.querySelector('#name4');
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
const users = [];

addUser.addEventListener('click', addNewUser);
btn1.addEventListener('click', botonClick1);
btn2.addEventListener('click', botonClick2);
btn3.addEventListener('click', botonClick3);
btn4.addEventListener('click', botonClick4);

function addNewUser() {
  let newUser = userName.value;

  users.push({
    name: newUser,
    saldo: [],
    total: 0
  });
  names();
  console.log(users);
}

function names() {
  name1.innerText = users[0].name + ': ';
  name2.innerText = users[1].name + ': ';
  name3.innerText = users[2].name + ': ';
  name4.innerText = users[3].name + ': ';
}

function calcularSaldos() {
  users[0].total = users[0].saldo.reduce((a, b) => a + b, 0);
  users[1].total = users[1].saldo.reduce((a, b) => a + b, 0);
  users[2].total = users[2].saldo.reduce((a, b) => a + b, 0);
  users[3].total = users[3].saldo.reduce((a, b) => a + b, 0);
}

function mostrarResultados() {
  person1.innerText = "$ " + users[0].total;
  person2.innerText = "$ " + users[1].total;
  person3.innerText = "$ " + users[2].total;
  person4.innerText = "$ " + users[3].total;
}

function mostrarEnConsola() {
  console.log(users[0].saldo, users[1].saldo, users[2].saldo, users[3].saldo);
  console.log(users[0].total, users[1].total, users[2].total, users[3].total);
}

function botonClick1() {
  let number1 = Number(input1.value);

  console.log('funciona!');

  users[0].saldo.push(number1 - (number1 / 4));
  users[1].saldo.push(number1 - (number1 + number1 / 4));
  users[2].saldo.push(number1 - (number1 + number1 / 4));
  users[3].saldo.push(number1 - (number1 + number1 / 4));
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick2() {
  let number2 = Number(input1.value);

  console.log('funciona!');

  users[0].saldo.push(number2 - (number2 + number2 / 4));
  users[1].saldo.push(number2 - (number2 / 4));
  users[2].saldo.push(number2 - (number2 + number2 / 4));
  users[3].saldo.push(number2 - (number2 + number2 / 4));
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick3() {
  let number3 = Number(input3.value);

  console.log('funciona!');
  
  users[0].saldo.push(number3 - (number3 + number3 / 4));
  users[1].saldo.push(number3 - (number3 + number3 / 4));
  users[2].saldo.push(number3 - (number3 / 4));
  users[3].saldo.push(number3 - (number3 + number3 / 4));
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick4() {

  let number4 = Number(input4.value);
  console.log('funciona!');
  
  users[0].saldo.push(number4 - (number4 + number4 / 4));
  users[1].saldo.push(number4 - (number4 + number4 / 4));
  users[2].saldo.push(number4 - (number4 + number4 / 4));
  users[3].saldo.push(number4 - (number4 / 4));
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}