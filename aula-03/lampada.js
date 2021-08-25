"use strict"
 
const lampada = document.getElementById('lampada')
 
function botoesLidaDesliga(estadoLiga, estadoDesliga){    
    const botaoLigar = document.getElementById('ligar')
    const botaoDesligar = document.getElementById('desligar')
 
    botaoLigar.disabled = estadoLiga
    botaoDesligar.disabled = estadoDesliga
}
 
function lampadaQuebrada (){
    const lampada = document.getElementById("lampada")
    return lampada.src.indexOf('quebrada') !== -1
}
 
function ligarLampada() {
    if (!lampadaQuebrada()){
        lampada.src = "img/ligada.jpg"
        botoesLidaDesliga(true, false)
    }   
}
 
function desligarLampada() {
 
    if (!lampadaQuebrada()){
        lampada.src = "img/desligada.jpg"
        botoesLidaDesliga(false, true)
    }
}
 
function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
    botoesLidaDesliga(true, true)
}
function piscar(){
    var intervalo = 0;
    var contador = 0;
    while(contador < 10){
        intervalo += 300;
        setTimeout("document.getElementById"('lamp').src="img/ligada.jpg", intervalo)
        intervalo +=300;
        setTimeout("document.getElementById"('lamp').src="img/desligada.jpg", intervalo)
        contador++;
    }
}
 
//eventos
document.getElementById('ligar').addEventListener("click", ligarLampada)
document.getElementById('desligar').addEventListener("click", desligarLampada)
document.getElementById('lampada').addEventListener("mouseover", ligarLampada)
document.getElementById('lampada').addEventListener("mouseleave", desligarLampada)
document.getElementById('lampada').addEventListener("dblclick", quebrarLampada)