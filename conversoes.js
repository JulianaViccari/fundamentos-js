// conversão implícita

const numero = 456;
const numeroString = "456";
 console.log(numero + numeroString);

 //conversao explicita
 console.log(numero + Number(numeroString));

 let telefone = 12341234;
console.log("O telefone é " + String(telefone));

//testando const
var respostaDeTudo = 42
let idade = 29
const pi = 3.14
{
  var respostaDeTudo = 3.14
  let idade = 42
  const pi = 29
  console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)