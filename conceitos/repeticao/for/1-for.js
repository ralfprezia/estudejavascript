/**

for([espressãoInicial]; [condição]; [incremento])
    declaração

*/

const array = ['um', 'dois', 'três'];

for(let index = 0; index < array.length; index++) {
    const elemento = array[index];//lê o index e pega o valor de cada elemento no aaray
    console.log(`Elementos #${index}: ${elemento}.`);
}