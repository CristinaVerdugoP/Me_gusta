var contador = 3;
var countElement = document.querySelector("#contador");

function suma(){
    contador++;
    countElement.innerText = contador + " Like(s)"
    console.log(contador);
}