//CLASSES

/*
'use strict';
class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
    super(4);//construtor do pai
    this.morde = 4;
    }
}

const pug = new Cachorro(false);
console.log(pug);
//BASICAMENTE É UMA FUNÇÃO COMO CLASSE
*/

/*
//NÃO FUNCIONA NO NODE!!!
//FUNÇÃO PESSOA COMO O NOME PRIVADO = não será exposto quando chamar newPessoa
'use strict';
function Person(initialName) {
    let name = initialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName) {
        name = newName;
    }
}
const p = new Person('Ralf');
*/


//FUNCIONA como modificador de acesso NO NODEJs
/*
'use strict';
class Person {
    #name = '';//declarado direto na classe, porém na utilização declaro com #
    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getname() {
        return this.#name;
    }
}
*/
/*_______________________________________________________________________________________*/
/*
//SEM ENCAPSULAMENTO

'use strict';
function Person(initialName) {
    var name = initialName;
    Object.defineProperty(this, 'name', {
        get: function() {
            return name;
        },
        set: function(value) {
            name = value;
        }
    });
}
*/

//COM ENCAPSULAMENTO
/*
'use strict';
class Person {
    #name = '';
    
    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}
*/
/*_______________________________________________________________________________________*/
//SEM IMPLEMENTAÇÃO STATIC
/*
'use strict';
function Person() {}

Person.walk = function() {
console.log('walking...');
}

console.log(Person.walk());
//"walking..."
*/

//COM IMPLEMENTAÇÃO STATIC ES6
/*
'use strict';
class Person {
    static walk() {//permite que chama sem instanciar
        console.log('walking...');
    }
}
console.log(Person.walk());
//"walking..."
*/




















