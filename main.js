const addUser = document.querySelector('#add-user');
const userName = document.querySelector('#new-user');
const namesTest = document.querySelector('#names-test');
const users = [];

addUser.addEventListener('click', addNewUser);
namesTest.addEventListener('click', e => {
  for (let i = 0; i < users.length; i++) {
    if(e.target.classList.contains(`btn-calcular${i}`)){
      botonClick(i);
    }
  }
})

function addNewUser() {
  let newUser = userName.value;

  users.push({
    name: newUser,
    saldo: [],
    total: 0
  });
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

function botonClick(test) {
  const input = document.querySelector(`#calculo${test}`);
  let gasto = Number(input.value);

  console.log(`Usuario ${test}`);

  distribuirGasto(test, gasto);

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
  buttonTag.setAttribute('class', `btn-calcular${i} calcular`);
  buttonTag.innerText = 'Calcular';
  const spanTotal = document.createElement('span');
  spanTotal.setAttribute('class', `persona${i} total`);
  spanTotal.innerText = "Total: $ 0.00";

  namesTest.appendChild(buttonTag);
  namesTest.appendChild(spanTotal);
}

