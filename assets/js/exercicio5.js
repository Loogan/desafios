const NUM = document.getElementById('num');
const BTN = document.getElementById('btn');
const RES1 = document.getElementById('res1');
const RES2 = document.getElementById('res2');
const RES3 = document.getElementById('res3');
const numeros = [];

BTN.addEventListener('click', () => {
  if (NUM.value === '') {
    alert('Preencha todos os campos');
    return;
  }
  
  numeros.push(NUM.value);
  RES1.innerHTML = `Números digitados: ${numeros}`;
  RES2.innerHTML = `Menor número digitado: ${Math.min(...numeros)}`;
  RES3.innerHTML = `Maior número digitado: ${Math.max(...numeros)}`;
});
