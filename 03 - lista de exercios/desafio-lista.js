
/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


// SOLUÇÃO DA LISTA

// (1)
// let nota1=5;
// let nota2=10;
// let nota3=10;

// let media = (nota1+nota2+nota3)/3;

// if (media < 5){
//     console.log(media.toFixed(2)+' Reprovado')
// }else if(media <= 7){
//     console.log(media.toFixed(2)+' Recuperação')
// }else {
//     console.log(media.toFixed(2)+' Passou de semestre')
// }

//---------------------------------------------------

// // (2)
// // importante! na fórmula a altura precisa ser calculada em metros.

// let peso=80;
// let altura=180;

// var imc = peso / ((altura/100) * (altura/100)); // converti cm para m.

// if ( imc < 18.5){
//     console.log(imc.toFixed(4)+ ' Abaixo do peso')
// } else if(imc <=25){
//     console.log(imc.toFixed(4)+ ' Peso normal')
// } else if(imc <= 30){
//     console.log(imc.toFixed(4)+ ' Acima do peso')
// } else if(imc <= 40){
//     console.log(imc.toFixed(4)+ ' Obeso')
// } else {
//     console.log(imc.toFixed(4)+ ' obesidade Grave')
// }

// // está dando um resultado estranho


// --------------------------------

// (3)

let preco=100;
let condicao ='esqueci a carteira';

// Código Condição de pagamento:
// 1 - À vista Débito, recebe 10% de desconto;
// 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

switch(condicao){
    case 1:
        preco = preco*0.9;
        break;
    case 2:
        preco = preco*0.85;
        break; 
    case 3:        
        // em duas vezes o preço continua o mesmo
        break;
    case 4:
        preco = preco*1.1;
        break;
    default:
        console.log('informar a forma de pagamento')
        break;
}

console.log('O valor do produto eh ' + preco.toFixed(2));

