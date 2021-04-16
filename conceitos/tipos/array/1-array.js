const users = ['Ralf', 'Pedro', 'Clarice'];//array criado
//como se fosse um enum
const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('F')
}
/*---------------------------- */
const persons = [ 
    {
    name: 'Ralf',
    age: 37,
    gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 18,
        gender: gender.MAN
    },
    {
        name: 'Clarice',
        age: 77,
        gender: gender.WOMAN
    }
];


//Retornar a quantidade de itens de um array
console.log('Items:', persons.length);

//Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

//Iterar os itens do array, 
persons.forEach(person, index, arr => {//para cada item 
console.log(`Nome: ${person.name}`);//poderia ser assim para pegar o index e o array/`Nome: ${person.name} index: ${index}`, arr);executa uma função, além disso pode pegar o index e o array também
});


//Filtrar array, não altera ele retorna um novo array a partir do que for criado no caso apenas homens
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

//o Map permite o Retorno de um novo array ou seja nunca iremos alterar o original e sim criar sempre um novo com o map
const personWithCourse = persons.map(person => {
    person.course = 'Introdução ao javascript';//adicionando esta frase no array(objeto)
    return person;
});

console.log('\nPessoas com a adição do course:', personWithCourse);

//Função reduce = Trasformar um array em outro tipo
const toatlAge = persons.reduce((age, person) => {//pegamos as idades das pessoas
    age += person.age;//realizamos a soma das idades
    return age;//retornamos a propriedade para fazer o reduce 
}, 0);//age inicia com o valor de 0
console.log('\nSoma de idade das pessoas', totalAge);//resultado da soma de todas as idades

//funções e arraays tbm são objetos e podem ser chamados


//Juntando operações encadeadas e retornando arrays
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);
console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);
