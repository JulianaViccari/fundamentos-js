const salaDePython = ['João', 'Ana', 'Rodrigo', 'Caio',
                      'Lara', 'Marjorie', 'Leo'];

const salaDeJavaScript = ['João', 'Juliana', 'Henrique', 'Eduardo',
                          'Maria Julia', 'Erida', 'Donizete', 'Carolina', 
                          'Osmair', 'Ana', 'Marcelo']

const salaUnica = salaDePython.concat(salaDeJavaScript); //concatena as duas arrays mas não altera arrays originais precisa salvar em um novo const[].

console.log(salaUnica);