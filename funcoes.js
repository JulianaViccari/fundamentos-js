// Declaração função
function print(nome){
  console.log(nome);
}

print("Oi Jú")

// formas de escrever funções

function somar(){ // função declarativa

  const result = 2 + 3;
  return result;
}
print(somar());

// expressão de função
const soma = function(num1, num2) {return num1 + num2}// função anonima
console.log(soma(1,1));

// Arrow function, uma função declarada de maneira mais compacta usando uma const. A arrow function também não tem suporte à hoisting.

const apresentar = nome => `Meu nome é ${nome}`

print(apresentar("Juliana"))
print(apresentar("Eduardo"))

//Hoisnting o JavaScript analisa todo o código procurando por variáveis declaradas com var e funções para trazer tais declarações para o início do código.

