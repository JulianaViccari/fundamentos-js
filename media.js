let notas = [6.5, 10, 8, 7.5];
notas.push(9); //adiciona valor, na ultima posição do array
notas.pop(); // retira o ultimo do valor array
console.table(notas)

 const media = (notas) =>{
   let result = 0;
   for(i = 0; i < notas.length; i++){
     result += notas[i] 
   }
   return result / notas.length
};
console.log(`Sua média foi: ${media(notas)}`);