const addUser = document.querySelector('#add-user');
const userName = document.querySelector('#new-user');
const namesTest = document.querySelector('#names-test');
const seleccionar = document.querySelector('#selection');
const quienRecibe = [];
const users = [];

const quienRecibeDepurado = [];

addUser.addEventListener('click', addNewUser);

namesTest.addEventListener('keydown', e => {
  for (let i = 0; i < users.length; i++) {
    if(e.target.classList.contains(`inputgasto${i}`)){
      if (e.keyCode == 13) {
        botonClick(i);
        document.querySelector(`.btn-calcular${i}`).focus();
      }
    }
  }
})

namesTest.addEventListener('click', e => {
  for (let i = 0; i < users.length; i++) {
    if(e.target.classList.contains(`btn-calcular${i}`)){
      botonClick(i);
    }
    if(e.target.classList.contains(`btn-pagar${i}`)){
      botonPagar(i);
    }
  }
})

seleccionar.addEventListener('click', e => {
  for (let i = 0; i < users.length; i++) {
    if(e.target.classList.contains(`inputwho${i}`)){
      // quienRecibe[i].push(i)
      reconocerCheckbox(i);
    }
    
  }
  if(e.target.classList.contains(`seleccionar`)){
    botonSeleccionar();
  }
})

function addNewUser() {
  let newUser = userName.value;
  if (newUser) {
    users.push({
    name: newUser,
    saldo: [],
    total: 0
    });  
    renderInputs(users);
  } else {
    alert('Escriba un nombre');
  }
  
  document.getElementById("formulario").reset();
  
  document.getElementById('new-user').addEventListener('keydown', inputCharacters);
  function inputCharacters(event) {
    if (event.keyCode == 13) {
      document.getElementById('add-user').focus();
    }
  }
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
    
    let resultado = users[i].total;
    if (resultado > 0) {
      person.innerText = "Tiene que recibir $ " + resultado;
      person.setAttribute('style', `color: green;`);
    } else if (resultado < 0) {
      person.setAttribute('style', `color: red;`);
      person.innerText = "Tiene que dar $ " + resultado;
    } else {
      person.innerText = "Está en cero";
      person.setAttribute('style', `color: black;`);
    }
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
  document.getElementById(`reset-input${test}`).reset();
}

function botonPagar(usuario) {
  renderCheckbox(users);
  //deberia tomar el valor del pago desde aca
}

function reconocerCheckbox(usuario) {
  
  if (document.getElementById(`wich-user${usuario}`).checked){
    quienRecibe.push(usuario);
  }    
  
}

function botonSeleccionar() {
  
  for (let i = 0; i < users.length; i++) {
    if (quienRecibe.includes(i)) {
      quienRecibeDepurado.push(i);
    }
  }
//  console.log(quienRecibeDepurado);

  let cantEnQueSeReparteElPago = quienRecibe.length;

  for (let i = 0; i < users.length; i++) {
    if (quienRecibeDepurado[i] == i) {
      const input = document.querySelector(`#calculo${i}`);
      let pago = Number(input.value);
      //console.log(`Usuario ${i}`, pago);

      users[i].saldo.push(pago / cantEnQueSeReparteElPago);
      document.getElementById(`reset-input${i}`).reset();
    }
  }
  calcularSaldos();
  mostrarResultados();
  mostrarEnConsola();
}

function renderInputs(arr) {
  let i = users.length-1;

  const userContainer = document.createElement('div');
  userContainer.setAttribute('class', 'user-container');
  const formTag = document.createElement('form');
  formTag.setAttribute('id', `reset-input${i}`);
  formTag.setAttribute('action', '#');
  formTag.setAttribute('class', 'form');
  const labelTag = document.createElement('label');
  labelTag.setAttribute('for', `calculo${i}`);
  const spanTag = document.createElement('span');
  spanTag.setAttribute('id', 'name1');
  spanTag.innerText = arr[i].name + ": ";
  const inputTag = document.createElement('input');
  inputTag.setAttribute('id', `calculo${i}`);
  inputTag.setAttribute('class', `inputgasto${i}`);
  inputTag.setAttribute('type', 'number');
  inputTag.setAttribute('placeholder', 'ingresar numero');

  namesTest.appendChild(userContainer);
  userContainer.appendChild(formTag);

  formTag.appendChild(labelTag);
  labelTag.appendChild(spanTag);
  labelTag.appendChild(inputTag);

  const buttonTag = document.createElement('button');
  buttonTag.setAttribute('class', `btn-calcular${i} calcular`);
  buttonTag.innerText = 'Calcular';
  const spanTotal = document.createElement('span');
  spanTotal.setAttribute('class', `persona${i} total`);
  spanTotal.innerText = "Total: $ 0.00";
  const buttonPagar = document.createElement('button');
  buttonPagar.setAttribute('class', `btn-pagar${i} pagar`);
  buttonPagar.innerText = 'Pagar';

  userContainer.appendChild(buttonTag);
  userContainer.appendChild(spanTotal);
  userContainer.appendChild(buttonPagar);
}

function renderCheckbox(arr) {
  for (let i = 0; i < arr.length; i++) {
    const selectionContainer = document.getElementById('selection');
    const whoDiv = document.createElement('div');
    whoDiv.setAttribute('class', 'who-container');
    const labelWho = document.createElement('label');
    labelWho.setAttribute('for', 'user-to-pay');
    const inputWho = document.createElement('input');
    inputWho.setAttribute('id', `wich-user${i}`);
    inputWho.setAttribute('class', `inputwho${i} inputwho`);
    inputWho.setAttribute('type', 'checkbox');
    const pWho = document.createElement('p');
    pWho.setAttribute('id', `usuario-paga${i}`);

    selectionContainer.appendChild(whoDiv);
    whoDiv.appendChild(labelWho);
    labelWho.appendChild(inputWho);
    labelWho.appendChild(pWho);

    pWho.innerText = arr[i].name;
  }
}