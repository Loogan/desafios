const LADO1 = document.getElementById("l1");
const LADO2 = document.getElementById("l2");
const BTN = document.getElementById("btn");
const RES = document.getElementById("res");

BTN.addEventListener("click", () => {
  if (LADO1.value === "" || LADO2.value === "") {
    alert("Preencha todos os campos");
    return;
  }

  if (LADO1.value <= 0 || LADO2.value <= 0) {
    alert("Os valores devem ser maiores que 0");
    return;
  }

  // S = √[(d1 / 2)² + (d2 / 2)²] esta é a formula
  const lado = Math.sqrt((LADO1.value/2)**2 + (LADO2.value/2)**2);

  RES.innerHTML = `O lado do losango é: ${lado.toFixed(2)}`;
});
