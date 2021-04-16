/*ARROW FUNCTION*/

this.name = 'Nome no contexto de criação';
                             //referência de criação e escopo
const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}
/* FUNÇÃO NORMAL */
const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
}

/*a forma de cima é mais simplificada, porém são funções iguais 
isso quando as chaves e as funções são iguais.

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn: getNameArrowFn,
    getName: getName
}

*/

console.log(user.getNameArrowFn());
console.log(user.getName());