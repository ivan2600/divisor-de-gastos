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
  if(e.target.classList.contains('btn-calcular4')){
    botonClick4();
  }
  if(e.target.classList.contains('btn-calcular5')){
    botonClick5();
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

function distribuirGasto(usuario, numero) {
  let porcentaje = numero / users.length;
  for (let i = 0; i < users.length; i++) {
    if (usuario == i) {
      users[i].saldo.push(porcentaje * (users.length -1));
    } else {
      users[i].saldo.push(porcentaje - (porcentaje * 2));
    }
  }
  console.log(porcentaje);
  console.log(users);
}

function calcularSaldos() {
  for (let i = 0; i < users.length; i++) {
    users[i].total = (users[i].saldo.reduce((a, b) => a + b, 0)).toFixed(2);
  }
}

function mostrarResultados() {
  for (let i = 0; i < users.length; i++) {
    const person = document.querySelector(`.persona${i}`);
    person.innerText = "Total: $ " + users[i].total;
  }
}

function mostrarEnConsola() {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].saldo);
    console.log(users[i].total);
  }
}

function botonClick0() {
  const input0 = document.querySelector('#calculo0');
  let number0 = Number(input0.value);
  let usuario = 0;

  console.log('usuario 0');

  distribuirGasto(usuario, number0);

  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick1() {
  const input1 = document.querySelector('#calculo1');
  let number1 = Number(input1.value);
  let usuario = 1;

  console.log('usuario 1');

  distribuirGasto(usuario, number1);

  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick2() {
  const input2 = document.querySelector('#calculo2');
  let number2 = Number(input2.value);
  let usuario = 2;

  console.log('usuario 2');

  distribuirGasto(usuario, number2);

  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick3() {
  const input3 = document.querySelector('#calculo3');
  let number3 = Number(input3.value);
  let usuario = 3;

  console.log('usuario 3');

  distribuirGasto(usuario, number3);

  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick4() {
  const input4 = document.querySelector('#calculo4');
  let number4 = Number(input4.value);
  let usuario = 4;

  console.log('usuario 4');

  distribuirGasto(usuario, number4);

  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function botonClick5() {
  const input5 = document.querySelector('#calculo5');
  let number5 = Number(input5.value);
  let usuario = 5;

  console.log('usuario 5');

  distribuirGasto(usuario, number5);

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

