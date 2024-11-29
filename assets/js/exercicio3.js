const PRECO = document.getElementById('preco');
const BTN = document.getElementById('btn');
const RES = document.getElementById('res');

BTN.addEventListener('click', () => {

  if (PRECO.value === '') {
    alert('Preencha todos os campos');
    return;
  }

  if (PRECO.value <= 0) {
    alert('Os valores devem ser maiores que 0');
    return;
  }

  const desconto = PRECO.value - (PRECO.value * 9/100);
  RES.innerHTML = `Preço do produto com desconto: R$ ${(desconto).toFixed(2)}`;
});
