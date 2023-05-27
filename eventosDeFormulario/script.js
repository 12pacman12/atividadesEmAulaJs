let inputEmail = document.getElementById("email");
let inputIdade = document.getElementById("idade");
let formulario = document.querySelector("form");
let inputEnd = document.getElementById("endereço")
let inputDocumento = document.getElementById("documento")


inputEmail.addEventListener("focus", ()=>{
    inputEmail.style.backgroundColor = "lightgreen"
});

inputEmail.addEventListener("blur",(e)=>{
    e.target.style.backgroundColor = ""
})

inputIdade.addEventListener("change", ()=>{
    alert("Certeza que quer alterar os dados?")
})

inputEnd.addEventListener("focus", ()=>{
    inputEnd.style.backgroundColor = "purple"
})
inputEnd.addEventListener("blur", ()=>{
    inputEnd.style.backgroundColor = ""
})

inputDocumento.addEventListener("focus", (e)=>{
e.target.style.backgroundColor = "green"
})

inputDocumento.addEventListener("blur", (e)=>{
e.target.style.backgroundColor = ""
})
inputDocumento.addEventListener("change", ()=>{
    alert("tem certeza de que deseja mudar a data?")
})

formulario.addEventListener("submit", ()=>{
    alert("Dados enviados com sucesso")
})