let linkProz = document.getElementById("link-proz")
let bntSubmit = document.querySelector("button[type=submit]"
)

linkProz.addEventListener("click",(e)=>{
e.preventDefault()
alert("Não foi possivel acessar o site")
})
bntSubmit.addEventListener("click", (e)=>{
    e.preventDefault()
    alert("Não foi possível enviar os dados do formulário")
})