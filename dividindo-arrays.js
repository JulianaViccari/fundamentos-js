const nomes = ['João', 'Juliana', 'Henrique', 'Eduardo',
              'Maria Julia', 'Erida', 'Donizete', 'Carolina', 
              'Osmair', 'Ana', 'Marcelo']
const sala1 = nomes.slice(0,nomes.length/2); //Separar um array em partes com slice()
const sala2 = nomes.slice(nomes.length/2);
const sala3 = nomes.slice(nomes.length/2);

console.log(`Sala 1 ${sala1}\nSala 2 ${sala2}`)