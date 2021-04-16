const user = //criou um usuário com duas propriedades - name e lastName
{
    name: 'Ralf',
    lastName: 'Franco Prezia Carneiro'
}
/*
//Recupera as chaves do objeto
console.log('Propriedades do objeto user:', object.Keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array contendo [ nome_prop, valor_prop ] é um araay de araays!
console.log('\nLista de propriedades e valores:', Object.entries(user));
*/
//Mergear propriedades do objeto - concatena strings
Object.assign(user, {fullName: 'Ralf Franco Prezia Carneiro'});//adicionando o fullName ao user

console.log('\nAdiciona a propriedade fullName no objeto user', user);              //m e r g e a n d o
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 37}));//adiciono a idade no user

//Previne todas as alterações em um objeto congela literalmente
const newObj = { foo: 'bar'};
object.freeze(newObj);//não permite alteração e remoção 

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto, não permite criar nem deletar
const person = { name: 'Ralf' };
object.seal(person); //somente altera as propriedades//não deleta 

person.name = 'Ralf Prezia';
delete person.name;
person.age = 37;

console.log('\nVariável person após as alterações:', person);