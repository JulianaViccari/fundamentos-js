//const notas = [10, 6.5, 8, 7.5];

//let somaDasNotas = 0;

//notas.forEach( nota => {
//  somaDasNotas += nota
//})

//let media = somaDasNotas/notas.length;

//console.log(media);
const notas1 = [10, 6.5, 8 ,7.5] 
const notas2 = [9, 6, 6] 
const notas3 = [8.5, 9.5] 
                      //10   //9   //7
const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  let soma = 0
  for (let j = 0; j < notasGerais[i].length; j++) {
    soma += notasGerais[i][j];
  }
  media += soma / notasGerais[i].length;
}



console.log(media/ notasGerais.length)