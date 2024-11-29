const N1 = document.getElementById('n1');
const N2 = document.getElementById('n2');
const BTN = document.getElementById('btn');
const NUMS = document.getElementById('nums');
const RES = document.getElementById('res');
const RES2 = document.getElementById('res2');

BTN.addEventListener('click', () => {

  if (N1.value === '' || N2.value === '') {
    alert('Preencha todos os campos');
    return;
  }

  if (N1.value <= 0 || N2.value <= 0) {
    alert('Os valores devem ser maiores que 0');
    return;
  }

  let soma = parseFloat(N1.value) + parseFloat(N2.value);
  let maior = "";
  let menor = "";
  
  if (parseFloat(N1.value) > parseFloat(N2.value)) {
    maior = N1.value;
    menor = N2.value;
  } else {
    maior = N2.value;
    menor = N1.value;
  }

  if (soma > 10) {
    NUMS.innerHTML = `Números digitados: ${maior} e ${menor}`;
    RES.innerHTML  = `Resultado da soma: ${soma}`;
    RES2.innerHTML = `Raiz cúbica da soma: ${Math.cbrt(soma).toFixed(2)}`;
  } else {
    NUMS.innerHTML = `Números digitados: ${menor} e ${maior}`;
    RES.innerHTML  = `Resultado da soma: ${soma}`;
    RES2.innerHTML = '';
  }
  } );
  