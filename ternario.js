
// const nome = "Leo";
// const idade = 23;
// const bebidaMaior = "cerveja";
// const bebidaMenor = "suco";

// // if(idadeCliente >= idadeMinima){
// //   console.log("Pode beber cerveja")
// // }else{
// //   console.log("Suco")
// // }
//                                                        //condição      //true       //false
// const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}`
// console.log(pedido)

const nome ="Eduardo";
const peso = 100;
const altura = 1.81;

let imc = peso / (altura * altura);

let ideal = 25;
let sobrePeso = 30;
let magreza = 18;
let resultadoOk = "Parabéns você está ótimo!!! ";
let resultadoRuim = "Cuidado, procure um médico!!!"

const resultado = `${nome} com um peso de: ${peso} klgramas e altura de: ${altura} centímetros seu imc foi: ${imc} ${imc <= ideal && imc <= sobrePeso && imc >= magreza ? resultadoOk : resultadoRuim}`;
console.log(resultado)

