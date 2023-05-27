let titulo = document.querySelector("h1");

titulo.style.color = "#D4210D" // adiciona um estilo de cor ao elemento capturado

titulo.style.fontSize = "2.4rem" // altera o tamanho da fonte do elemento capturado

let section = document.querySelector("section");



section.classList// classList permite consultar e manipular a lista de classes do elemento. Escrevesse um par de parentes após o nome do método e passamos uma string como argumento.

sections.classList.contains("container-produtos")//O método contains() recebe uma string com o nome de uma determinada classe, verifica se o elemento possui ou não essa classe e retorna um valor booleano.

sections.classList.add("container-produtos")//Com o método add(), adicionamos uma classe ao elemento selecionado.

sections.classList.remove("container-produtos")//Usamos o método remove() para remover uma classe da lista de classes do elemento.

sections.classList.toggle("visible")//O método toggle() funciona como um interruptor, ou seja, se o elemento possui a classe passada como argumento, o método a remove. Caso ele não a possua, o toggle() adiciona.



//Para implementar a interatividade nos nossos sites, precisamos nos fazer três perguntas:
//quem? oque? quando?



let botao = document.querySelector("button");

let texto = document.querySelector("p");
//Geralmente, temos dois elementos: um que ativa a interatividade e outro que sofre as alterações.

//Oque? -> definimos o comportamento da interatividade usando lógica de programação dentro de uma função.

function mudarCor( ){
    texto.style.color = "blue"
  }

//Quando? -> se refere ao tipo de evento. Exemplo: 
// click, input, ganhando foco, precionar uma tecla, entre outros.

//Método addEventListener()
//recebe dois argumentos: o primeiro é uma string com o tipo de evento e o segundo é uma função, que define o comportamento a ser executado quando o evento for chamado.

botao.addEventListener("click", mudarCor)

//Também é possível definir o comportamento diretamente no segundo argumento do eventListener. Para isso, usamos funções anônimas comuns ou arrow functions.
botao.addEventListener("click", ( ) => {

    texto.style.color = "blue"
  
  })

  //Temos vários eventos que nos permitem definir com precisão os gatilhos das interatividades que queremos implementar. As três principais categorias são eventos de mouse, de teclado e de formulário.

  //Eventos de mouse
  //São os eventos gerados por algum tipo de interação do usuário usando o mouse como referência.
  //
  //mouseover qndo o cursor do mouse passa por cima de um elemento
  //mouseout qndo o cursor deixa de estar em cima de um elemento
  //
  //click -> quando precionamos e soltamos o botão esquerdo do mouse
  //dblclick -> quando clicamos duas vezes com o botão esquerdo do mouse









