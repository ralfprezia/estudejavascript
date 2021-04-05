//Função que retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//Função que retorna um array quebrando a string por um delimitador
const splittedText = "Texto".split('x');//função SPLIT gera uma quebra pelo delimitador
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

//Função que busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');//('ValorProcurado', 'ValorSubstitutivo')
console.log('\nSubstituição de valor:', replacedText);

//Função que retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);//-1 = último caracter
console.log('\nUltima letra de uma string:', lastChar);

                                  //(start, end) limitadores
const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da primeira até a última posição na string:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor na string da segunda letra até a última:', secondToEnd);

//Função que retorna N caractéres a partir de uma posição
                                    //(start[0], 2 letras )
const twoCharBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs primeiras duas letras são:', twoCharBeforeFirstPos);