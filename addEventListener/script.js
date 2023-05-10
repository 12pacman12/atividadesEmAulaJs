let numero = document.querySelector("h2");
let bnt = document.querySelector("button");
let contagem = 0;
console.log(numero);
console.log(bnt);

function adicionarUm (){

    contagem = contagem +1;
    numero.innerText = contagem;
}

adicionarUm();

bnt.addEventListener("click", adicionarUm);