const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn-calcular');
const result = document.querySelector('#result');

btn.addEventListener('click', botonClick)

function botonClick(event) {
   // console.log({event})
   // event.preventDefault()
    const suma = input1.value + input2.value;
    result.innerText = "Resultado: " + suma;  
}
