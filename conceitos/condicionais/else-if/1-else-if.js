/*

if(condicao) {
    //code here
}else if(condicao){
    //code here
}
 
*/

const array = [2, 3, 4, 5, 6, 8, 10, 15];

console.log(`\nelse if`);
array.forEach(item => {//para cada item do array e verifica cada validação abaixo, a primeira condição que ele atender será validada
    if(item % 2 === 0){
        console.log(`O número ${item} é para`);
    }else if(item % 3 === 0){
        console.log(`O número ${item} é impar`);
    }else if(item % 5 === 0){
        console.log(`O número ${item} é divisível por 5.`);
    }
});

console.log('\nif');
array.forEach(item =>{

});

/*//neste caso um resultado pode ser relacionado a mais de uma condição

console.log(`\nif`);
array.forEach(item => {
    if(item % 2 === 0){
        console.log(`O número ${item} é divisível por 2.`);
    }
    if(item % 3 === 0){
        console.log(`O número ${item} é divisível por 3.`);
    }
    if(item % 5 === 0){
        console.log(`O número ${item} é divisível por 5.`);
    }
});

*/