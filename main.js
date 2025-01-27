const addUser = document.querySelector('#add-user');
const userName = document.querySelector('#new-user');
const namesTest = document.querySelector('#names-test');
const seleccionar = document.querySelector('#selection');
const whoPayDiv = document.querySelector('#who-pay');
const showDetailSection = document.querySelector('#show-detail');
const quienRecibe = [];
const quienRecibeDepurado = [];
const users = [];
let pago;
let personaQueEstaPagando;

addUser.addEventListener('click', addNewUser);

userName.addEventListener('keydown', e => {
  if (e.keyCode == 13) {
    addUser.focus();
  }
})

namesTest.addEventListener('keydown', e => {
  for (let i = 0; i < users.length; i++) {
    if(e.target.classList.contains(`inputgasto${i}`)){
      if (e.keyCode == 13) {
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

whoPayDiv.addEventListener('click', e => {
  for (let i = 0; i < users.length; i++) {
    if(e.target.classList.contains(`inputwho${i}`)){
      reconocerCheckbox(i);
    }
  }
  if(e.target.classList.contains(`seleccionar`)){
    botonSeleccionar();
  }
  if(e.target.classList.contains(`x-close`)){
    removeWhoPayDiv();
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
  mostrarDetalle(test);
  document.getElementById(`reset-input${test}`).reset();
  pago = 0;
  personaQueEstaPagando = 0;
  reiniciarQuienRecibeArr();
}

function botonPagar(usuario) {
  const input = document.querySelector(`#calculo${usuario}`);
  pago = Number(input.value);
  personaQueEstaPagando = usuario;

  if (input.value) {
    renderWhoPayDiv();
    renderCheckbox(users);
  } else {
    alert('ingrese un numero');
  }

  document.getElementById(`reset-input${usuario}`).reset();
  personaQueEstaPagando = usuario;
  reiniciarQuienRecibeArr();
}

function reconocerCheckbox(usuario) {
  const checkbox = document.getElementById(`wich-user${usuario}`);
  
  if (checkbox.checked) {
    if (!quienRecibe.includes(usuario)) {
      quienRecibe.push(usuario);
    }
  } else {
    const index = quienRecibe.indexOf(usuario);
    if (index > -1) {
      quienRecibe.splice(index, 1);
    }
  }
}

function reiniciarQuienRecibeArr() {
  for (let i = quienRecibeDepurado.length; i > 0; i--) {
    quienRecibeDepurado.pop();    
  }
  for (let i = quienRecibe.length; i > 0; i--) {
    quienRecibe.pop();    
  }
}

function botonSeleccionar() {

  for (let i = 0; i < users.length; i++) {
    if (quienRecibe.includes(i)) {
      quienRecibeDepurado.push(i);
      }
    }
  let cantEnQueSeReparteElPago = quienRecibeDepurado.length;
  if (quienRecibeDepurado.length < 1) {
    alert('seleccione quien recibe el pago');
  } else {
    for (let i = 0; i < quienRecibeDepurado.length; i++) {
      let monto = pago / cantEnQueSeReparteElPago;
      users[quienRecibeDepurado[i]].saldo.push(monto - (monto * 2));
    }
    users[personaQueEstaPagando].saldo.push(pago);
    document.getElementById(`reset-input${personaQueEstaPagando}`).reset();
    calcularSaldos();
    mostrarResultados();
    mostrarEnConsola();
    removeWhoPayDiv()
  }
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
  labelTag.setAttribute('class', `label-input`);
  const spanTag = document.createElement('span');
  spanTag.setAttribute('id', 'name1');
  spanTag.innerText = arr[i].name + ": ";
  const inputTag = document.createElement('input');
  inputTag.setAttribute('id', `calculo${i}`);
  inputTag.setAttribute('class', `inputgasto${i} input-number`);
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
  const inputDescripcion = document.createElement('input');
  inputDescripcion.setAttribute('class', `descripcion${i} descripcion`);
  inputDescripcion.setAttribute('type', 'text');
  inputDescripcion.setAttribute('placeholder', 'ingresar descripción');


  userContainer.appendChild(buttonTag);
  userContainer.appendChild(buttonPagar);
  userContainer.appendChild(spanTotal);
  formTag.appendChild(inputDescripcion);
}

function renderCheckbox(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (personaQueEstaPagando != i) {
      const selectionContainer = document.getElementById('selection');
      const whoDiv = document.createElement('div');
      whoDiv.setAttribute('class', 'who-container');
      const labelWho = document.createElement('label');
      labelWho.setAttribute('class', 'user-to-pay');
      const inputWho = document.createElement('input');
      inputWho.setAttribute('id', `wich-user${i}`);
      inputWho.setAttribute('class', `inputwho${i} inputwho`);
      inputWho.setAttribute('type', 'checkbox');
      const pWho = document.createElement('p');
      pWho.setAttribute('id', `usuario-paga${i}`);
      pWho.setAttribute('class', 'name-pay');

      selectionContainer.appendChild(whoDiv);
      whoDiv.appendChild(labelWho);
      labelWho.appendChild(inputWho);
      labelWho.appendChild(pWho);

      pWho.innerText = arr[i].name;
    }
  }
}

function renderWhoPayDiv() {
  const whoPaySectionDiv = document.getElementById('who-pay');
  whoPaySectionDiv.setAttribute('class', 'who-desing');
  const xClose = document.createElement('img');
  xClose.setAttribute('class', 'x-close');
  xClose.setAttribute('src', './x-close.png');
  xClose.setAttribute('alt', 'close');
  const h2Who = document.createElement('h2');
  h2Who.setAttribute('id', 'who-title');
  h2Who.innerText = '¿a quien se le paga?';
  const whoDivSelection = document.createElement('div');
  whoDivSelection.setAttribute('id', 'selection');
  const seleccionarButton = document.createElement('button');
  seleccionarButton.setAttribute('class', 'seleccionar');
  seleccionarButton.innerText = 'Seleccionar';

  whoPaySectionDiv.appendChild(xClose);
  whoPaySectionDiv.appendChild(h2Who);
  whoPaySectionDiv.appendChild(whoDivSelection);
  whoPaySectionDiv.appendChild(seleccionarButton);
}

function removeWhoPayDiv() {
  const whoPaySectionDiv = document.getElementById('who-pay');
  whoPaySectionDiv.removeAttribute('class', 'who-desing');
  const h2Who = document.getElementById('who-title');
  const whoDivSelection = document.getElementById('selection');
  const seleccionarButton = document.querySelector('.seleccionar');
  const xClose = document.querySelector('.x-close');

  whoPaySectionDiv.removeChild(xClose);
  whoPaySectionDiv.removeChild(h2Who);
  whoPaySectionDiv.removeChild(whoDivSelection);
  whoPaySectionDiv.removeChild(seleccionarButton);
}

function mostrarDetalle(test) {
  const input = document.querySelector(`#calculo${test}`);
  let gasto = Number(input.value);

  const datoDescripcion = document.querySelector(`.descripcion${test}`);
  const datoDesc = datoDescripcion.value;

  const detalle = document.createElement('p');
  detalle.textContent = `${users[test].name} => $${gasto} => ${datoDesc}`;

  showDetailSection.appendChild(detalle);

}
