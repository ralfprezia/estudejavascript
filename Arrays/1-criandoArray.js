//Construindo ARRAY
/*1° forma
const arr = [1, 2, 3]; 
console.log(arr);
*/
/*2° forma 
const arr2 = new Array(1, 2, 3);
console.log(arr2);
*/

//ARRAY CHAMANDO A FUNÇÃO OF
/* 
const person = Array.of('Ralf', 'Ciça', 'Clarice');
console.log(person);
*/


//Não importa o tipo no parãmetro passado
/*
const numbersAndStrings = Array.of(1, 2, 'Sucesso', 'Dev');
console.log(numbersAndStrings);
*/

//FUNÇÃO ARRAY
/*
const arrayCom3Posicoes = Array(3);//se passar com um parãmetro ele retorna outrso vazios
console.log(arrayCom3Posicoes);
const arrayCom2Param = Array(2, 3);
console.log(arrayCom2Param);
 */

//FUNÇÃO ARRAY FROM = cria uma nova instãncia de array a partir de um parãmetro array-like ou iterable object
/* 
const divs = document.querySelectorAll('div');//este objeto é um NODE LIST
const arr = Array.from(divs);//chama o construtor Array.from que entrga um array

const divArray = Array.from(divs);//aqui transforma em array não é mais node list
console.log(divArray.shift());

*/

//INSERIR  ELEMENTOS
/* 
//PUSH - função que adiciona elementos no final do array e o retorno desta função é o tamanho do novo array.
const frutas = ['maça', 'banana'];
frutas.push('mamão');
console.log(frutas);
console.log(frutas.length);

const cesta = ['banana', 'melancia', 'abacate'];
const listaCesta = cesta.push('acerola');

console.log(cesta);
console.log(listaCesta);

*/

//REMOVER ELEMENTOS
//POP - função que remove o último elemento de um array e retorna o elemento removido
/* 
const cestaFrutas = ['banana', 'melancia', 'abacate'];
const itemRemovido = cestaFrutas.pop();

console.log(cestaFrutas);
console.log(itemRemovido);

*/

//UNSHIFT//ADICIONANDO ELEMENTO NO INÍCIO 
//e retornando o tamanho do novo array

/* 
const cestaFrutas = ['banana', 'melancia', 'abacate'];
const tamanhoArray = cestaFrutas.unshift('acerola');

console.log(tamanhoArray);
console.log(cestaFrutas);
*/

//SHIFT//REMOVE ELEMENTOS NO INÍCIO DO ARRAY e retorna item removido
/* 
const cestaFrutas = ['banana', 'melancia', 'abacate'];
const tamanhoArray = cestaFrutas.shift();

console.log(tamanhoArray);
console.log(cestaFrutas);
*/

//CONCAT//CONCATENANDO ARRAYS E RETORNANDO UM NOVO ARRAY(MERGE)
//Concat é tipo um (merge), uma função que cria um novo array apartir de dois criados, sem alterar os arrays originais
/* 
const cestaFrutas = ['banana', 'melancia', 'abacate'];
const salgados = ['coxinha', 'kibe'];

const alimentos = cestaFrutas.concat(salgados);
console.log(alimentos);
*/

//SLICE//Função que fatia o array selecionado e retorna um novo de acordo com o início e o fim, sem alterar a os arrays de origem.
/* 
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.slice(0, 2);//pega a posição 0 e para na posição 1 = [1, 2]
const arr3 = arr.slice(2);//pega o valor a partir do elemento inculindo 2  = [3, 4, 5]
const arr4 = arr.slice(-1);//pega a última posição = [5]
const arr5 = arr.slice(-3);//pega 3 posições a partir da última = [3, 4, 5]

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
*/

//SPLICE//função que altera o array referência  adicionando novos elementos enquanto remove elementos antigos 
/* 
const frutas = ['melanica', 'banana'];
frutas.splice(1, 0, 'acerola');//adicionado na posição 1 um novo elemento 'acerola'

frutas.splice(2, 1, 'laranja', 'amora');//remove o item da posição 2 e adiciona a partir da posição 2 dois novos elementos no array

console.log(frutas);
*/









