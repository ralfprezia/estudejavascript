//Declarando a variável
const meuNumero = 12.4032;

//Função que transforma número para string
const numeroParaString = meuNumero.toString();
console.log('Número transformado em string: ', typeof numeroParaString);//typeof => Retorna o tipo da variável

//Função que retorna números com casas decimais
const duasCasasDecimais = meuNumero.toFixed(2);
console.log('\nNúmero com duas casas decimais:', duasCasasDecimais);

//Transforma uma string em float             parsefloat permite casas decimais
console.log('\nString parseada para float:', parseFloat('13.22'));

//Transforma uma string em int
console.log('\nString parseada para int:', parseInt('13.20'));