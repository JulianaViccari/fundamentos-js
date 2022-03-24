const nomesAlunos = ["ana Julia", "TereZa silva", "juliana zamana", "Eduardo VICCARI"];

const nomesAtualizados = nomesAlunos.map(nomes => nomes.toUpperCase())

console.log(nomesAtualizados)

const notas =  [7, 4.5, 8, 7.5]

const reprovados = nomesAtualizados.filter((aluno, indice) => notas[indice] < 5)
console.log(`Reprovados: ${reprovados} sua nota foi: ${notas[1]}`)