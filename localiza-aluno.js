const alunos = ['João', 'Juliana', 'Henrique', 'Eduardo'];

const mediasAlunos = [ 10, 9, 6, 7];

let listaNotasEAlunos = [alunos, mediasAlunos];

const exibiNomeNota = (nomeDoAluno) => {
  if(listaNotasEAlunos[0].includes(nomeDoAluno)){ // includes() verifica se parametro(valor) esta incluso no array retornando true/false

    let indice = listaNotasEAlunos[0].indexOf(nomeDoAluno) // indexOf() traz o número do indice do parametro.

    if(listaNotasEAlunos[1][indice] >= 7){
      return listaNotasEAlunos[0][indice] + ", sua média é " + listaNotasEAlunos[1][indice] + " Parabéns!!"
    }else{
      return listaNotasEAlunos[0][indice] + ", sua média é " + listaNotasEAlunos[1][indice] + " Precisa se dedicar mais!!"
    }
  }else{
    return "Aluno não esta cadastrado"
  }
}

console.log(exibiNomeNota("Henrique"))