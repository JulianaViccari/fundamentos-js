const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala){
  const somaDasNotas = notasDaSala.reduce((acum, atual) => 
  atual + acum, 0)
  return somaDasNotas/notasDaSala.length;
}

console.log(`A média da sala de Javascript foi: ${mediaSala(salaJS)}`)
console.log(`A média da sala de Java foi: ${mediaSala(salaJava)}`)
console.log(`A média da sala de Python foi: ${mediaSala(salaPython)}`)

const notas = [6.5, 10, 8, 7.5];

const media = notas.reduce((acum, atual) => atual + acum, 0) /notas.length

console.log("Média solta " + media)