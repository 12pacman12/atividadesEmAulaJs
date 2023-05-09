const titulo = document.querySelector("h2");
console.log(titulo);
titulo.style.color = "red";
titulo.style.fontSize = "3rem";

const btn = document.querySelector("button");
console.log(btn);
btn.style.backgroundColor = "purple";
btn.style.borderRadius = "20px";

const inputUser = document.getElementById("login-usuario");
const inputPassword = document.getElementById("login-senha");
console.log(inputUser);
console.log(inputPassword);
const errorUser = document.getElementsByClassName("error-text");
errorUser[1].classList.add("visible");
console.log(errorUser[1]);
inputUser.classList.add("correct");
inputPassword.classList.add("error");

// inputUser.classList.remove("error");