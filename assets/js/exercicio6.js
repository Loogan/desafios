const BTN = document.getElementById("btn");
const RES = document.getElementById("res");
let inicio = 0;
let fim = 100;
var soma = 0;
var i
BTN.addEventListener("click", () => {
  for (i = inicio; i <= fim; i++) {
    soma += i;
  }
  RES.innerHTML = `A soma de todos os números de 0 a 100 é: ${soma}`;
  BTN.disabled = true;
});
