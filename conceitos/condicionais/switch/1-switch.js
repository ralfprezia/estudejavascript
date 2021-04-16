/*

switch (expressão){
    caso valor1:
        [break;]
    caso valueN:
        [break;]

    default:
        [break;]
}

*/

const fruta = 'pera';

switch(fruta){
    case 'banana':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00 /kg');
        break;
    default:
        console.log('Produto fora do estoque');
        break;    
}