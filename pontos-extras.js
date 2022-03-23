const notas = [10, 6.5, 8 ,9.5]

const notasAtualizadas = notas.map( nota => nota <= 10 ? nota : ++nota)

console.log(notasAtualizadas)