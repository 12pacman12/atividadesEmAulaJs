let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let input = document.getElementById("quantidade-produto-01")
let bnt_menos = document.getElementById("btn-subtrair-produto-01")
let bnt_mais = document.getElementById("btn-adicionar-produto-01")
let linha = ("-");


let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
 
};




quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

console.log(input);
console.log(bnt_menos);
console.log(bnt_mais);


function somar(){
input.value = Number(input.value ) +1
}
function subtrair(){
input.value = Number(input.value ) -1
}

bnt_mais.addEventListener("click", somar);
bnt_menos.addEventListener("click",subtrair);

console.log(somar);

