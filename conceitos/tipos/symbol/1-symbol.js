const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos

console.log('symbol é ugual a symbol2', symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Ralf',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Franco Prezia Carneiro'
}

console.log(user);

//Symbols criam propriedades que não são enumeraveis
for (const key in user){
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no obejto user:', Object.getOwnPropertySymbols(user));//função que mostra todos os simbolos do objeto

//Acessando todas as propeiedades de objeto
console.log('Todas as propriedades do objeto user:', Reflect.ownKeys(user));

//Criar um enum
const directions = {
    UP   : Symbol('UP'),
    DOWN : Symbol('DOWN'),
    LEFT : Symbol('LEFT'), 
    RIGHT : Symbol('RIGHT'),  
};