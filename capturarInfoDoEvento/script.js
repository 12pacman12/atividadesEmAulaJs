let elementoClicado = document.getElementById("elemento-clicado")
let botaoTempo = document.getElementById("botao-tempo")
let tempo = document.getElementById("tempo")

botaoTempo.addEventListener("click", function(evento){
console.log(evento.timeStamp );
tempo.innerText = evento.timeStamp;



});

document.addEventListener("click",function(e){

    console.log(e.target)
    elementoClicado.innerText = e.target.id
})

// Embora a propriedade target seja a mais usada para
//  acessar as informações do elemento que disparou o
//   evento, outras propriedades (como timeStamp, clientX,
//      clientY, type) podem ser usadas para trabalhar com 
//      informações do evento em si.