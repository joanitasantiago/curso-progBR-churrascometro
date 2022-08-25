//Carne = 400gr por pessoa - +6 horas => 650g
//Cerveja = 1200 ml por pessoa - +6 horas => 2000ml
//Refrigerante/água = 1000 ml por pessoa - +6 horas => 1500ml
// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular(){

    let qtAdultos = inputAdultos.value;
    let qtCriancas = inputCriancas.value;
    let qtDuracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(qtDuracao) * qtAdultos + (carnePP(qtDuracao)/2 * qtCriancas);
    let qtdTotalCerveja = cervejaPP(qtDuracao) * qtAdultos;
    let qtdTotalBebida = bebidaPP(qtDuracao) * qtAdultos + (bebidaPP(qtDuracao)/2 * qtCriancas);
    
    resultado.innerHTML = `<p>${qtdTotalCarne/1000} KG de carne </p>`;
    resultado.innerHTML += `<p>${qtdTotalCerveja/1000} L de Cerveja </p>`;
    resultado.innerHTML += `<p>${qtdTotalBebida/1000} L de Refri/Água </p>`;

}


function carnePP(duracao){
    let qtd;
    duracao < 6 ? qtd = 400 : qtd = 650;
    return qtd;
}

function cervejaPP(duracao){
    let qtd;
    duracao < 6 ? qtd = 1200 : qtd = 2000;
    return qtd;
}

function bebidaPP(duracao){
    let qtd;
    duracao < 6 ? qtd = 1000 : qtd = 1500;
    return qtd;
}