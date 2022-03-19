
const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

// if(idadeCliente >= idadeMinima){
//   console.log("Pode beber cerveja")
// }else{
//   console.log("Suco")
// }
                                                       //condição      //true       //false
const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)