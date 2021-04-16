//break
console.log('Exemplo da utilização de break');

var index = 0;

while(true){
    index++;

    if(index > 2) {// se for maior que 2 sai do laço
        break;
    }

    console.log(index);
}

//Continue ele pode pular 
console.log('\nExemplo da utilização de continue');
const array = [1, 2, 3, 4, 5, 6];

for(let index = 0; index < array.length; index++) {
    const elemento = array[index];
    if(elemento % 2 === 0){// se for par não loga, pula a condição
        continue;
    }

    console.log(elemento);
}