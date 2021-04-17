/* 
//SINGLETON
function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;//uma vez instanciado ele sempre retornará a mesma instância. 
}

const p = new Pessoa.call(({name: 'Ralf'}));

const p2 = new Pessoa.call(({name: 'Custon Name'}));

console.log(p);
console.log(p2);
*/


//DECORATOR, sem sintaxe de decorator
//esta função só vai ser executada quando o usuário for autenticado

/* 
let loggedIn = false;//só executa se for true

function callIfAuthenticatd(fn) {
    return !!loggedIn && fn();
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAuthenticatd(() => sum(2, 3)));
loggedIn = true;
console.log(callIfAuthenticatd(() => sum(2, 3)));
loggedIn = false;
console.log(callIfAuthenticatd(() => sum(2, 3)));
loggedIn = true;

*/


// SINTAX DECORATOR typescript
/* 
function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;//somente para leitura!!!
}

class Job {
    @reandoly
    title() { return 'CEO'}
}
*/
/* 
//SINTAX PARA ANGULAR
@Componet({
    selector: 'app-reactive-favorite-color',
    template: `
    Favorite Color: <input type="text" [ formControl]="favoriteColorControl">
    `
        
})
export class FavoriteColorComponent {
    FavoriteColorControl = new FormControl('');
}
*/

//OBSERVABLE
/* 
class Observable {
    constructor() {
        this.observables = [];
    }

    subescribe(fn) {
        this.observables.push(fn);
    }

    notify(data) {
        this.observables.forEach(fn => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subescribe(logData1);
o.subescribe(logData2);
o.subescribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');
*/

//MODULE
/* 
let nome = 'default';

function getName() {
    return nome;
}

function setName(novoNome) {
    nome = novoNome;
}

nodule.exports = {
    getName,
    setName
};

//____________NO_NODE_______________
const {getName, setName} = require('./endereco.js');

console.log(getName());
console.log(setName('Ralf'));
console.log(getName());

*/