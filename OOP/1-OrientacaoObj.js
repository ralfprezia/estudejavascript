//FUNÇÕES
/* 
'use strict';
function Animal(){//função construtora
    this.qtdepatas = 4;
}

const cachorro = new Animal();//criou um novo objeto herdando do _proto_prototype dela
console.log(cachorro.qtdepatas);

*/
/* 
//OUTRO EXEMPLO
function Pessoa(name, idade, sexo) {// Pessoa é o construtor
    this.name = name;
    this.idade = idade;
    this.sexo = sexo;
}

const p = new Pessoa('Ralf', 37, 'Masculino');
console.log(p);
*/
/* 
'use strict';
function Animal() {
    this.qtdePatas = 4;
}

const gato = new Animal();

console.log(gato.__proto__ === Animal.prototype);//objeto criado aponta para o criador

console.log(Animal.__proto__ === Function.prototype);//entidade aponta para a função criadora
//true
*/

/*
'use strict';
function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Gato(ranrona) {
    Animal.call(this, 4);

    this.ranrona = ranrona;
}

const persa = new Gato(false);
console.log(persa);
/* Gato {qtdePatas: 4, ranrona: false} 
*/



/* 
//IMPLEMENTAÇÃO DE NOVOS MÉTODOS DENTRO DA ENTIDADE(obj)
'use strict';
function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {}
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function() {
        console.log('Au! au!');
    }
}

const persa = new Cachorro(false);
const pitbull = new Cachorro(true);
*/

//TODAS AS INSTANCIAS RECEBEM A AÇÃO PELO __proto__

'use strict';
function Animal() {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    Animal.call(this, 4);
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);//cachorro é derivado de animal
Cachorro,prototype.latir = function() {
    console.log('Au! au!');
}

const persa = new Cachorro(false);
const pitbull = new Cachorro(true);