const botonEnviar = document.getElementById('enviar');
const unInput = document.getElementById('dato');

botonEnviar.addEventListener('click', resetearInput);

function resetearInput () {
  console.log(unInput.value);
}