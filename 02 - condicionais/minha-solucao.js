//Objetivo:
//Calcular o valor de uma viagem

let precoEtanol=5.79;
let precoGasolina=6.66;
let distKm=100;

let consumoPorLitro=10;

let gastoPorKm;
let gastoTotal;




let tipoCombustivel='gasolina';

if (tipoCombustivel ==='gasolina'){
    gastoPorKm = precoGasolina/consumoPorLitro;

    gastoTotal = gastoPorKm*distKm;

}

if (tipoCombustivel==='Etanol'){
    gastoPorKm = precoEtanol/consumoPorLitro;

    gastoTotal = gastoPorKm*distKm;
}

console.log('O gasto total na viagem usando '+tipoCombustivel+'será de R$ '+ gastoTotal.toFixed(2))