const D1 = document.getElementById('d1');
const D2 = document.getElementById('d2');
const BTN = document.getElementById('btn');
const RES = document.getElementById('res');

BTN.addEventListener('click', () => {

  if (D1.value === '' || D2.value === '') {
    alert('Preencha todos os campos');
    return;
  }

  if (D1.value <= 0 || D2.value <= 0) {
    alert('Os valores devem ser maiores que 0');
    return;
  }

  const area = (D1.value * D2.value) / 2;
  RES.innerHTML = `A área do losango é: ${area}`;
});
