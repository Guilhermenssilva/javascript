function clicar(){
    var a=parseFloat(prompt("DIgite o número:"));
    var b=parseFloat(prompt("DIgite o número:"));
    document.querySelector("#soma").innerHTML="A soma dos valores é:"+(a+b);
    document.querySelector("#subtracao").innerHTML="A subtração dos valores é:"+(a-b);
    document.querySelector("#multiplicacao").innerHTML="A multiplicação dos valores é:"+(a*b);
    document.querySelector("#divisao").innerHTML="A divisão dos valores é:"+(a%b);
    
}