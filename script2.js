var contador1 = 9;
var contador2 = 12;
var contador3 = 9;

var countElement1 = document.querySelector("#contador1");
var countElement2 = document.querySelector("#contador2");
var countElement3 = document.querySelector("#contador3");


function suma1(){
    contador1++;
    countElement1.innerText = contador1 + " Like(s)"
    console.log(contador1);
}
function suma2(){
    contador2++;
    countElement2.innerText = contador2 + " Like(s)"
    console.log(contador2);
}
function suma3(){
    contador3++;
    countElement3.innerText = contador3 + " Like(s)"
    console.log(contador3);
}