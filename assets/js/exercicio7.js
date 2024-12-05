const NUM = document.getElementById('num');
const BTN = document.getElementById('btn');
const RES = document.getElementById('res');
let sequencia = [];

BTN.addEventListener('click', () => {

  if (NUM.value === '') {
    alert('Preencha todos os campos');
    return;
  }

  if (NUM.value <= 0) { 
    alert('Os valores devem ser maiores que 0');
    return;
  }

  for (i = 0; i <= NUM.value; i++) {
    sequencia.push(i);
    RES.innerHTML = `A sequencia de 0 até ${NUM.value} é: ${sequencia}.`;
  }
});
