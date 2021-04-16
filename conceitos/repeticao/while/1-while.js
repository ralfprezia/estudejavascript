/*

while (condição)
    declaração

*/

//SÓ EXECUTA SE FOR VERDADE

var n = 0;
var x = 0;
while (n < 3){//n vale 0// n vale 1// n vale 2// n vale 3 não é menor que 3, condição false, sai do loop 
    n++//n vale 1// n vale +1 = 2// n vale + 1 = 3// 
    x += n;     // 0 + 1 = 1//0 + 2 = 2//0 + 3 = 3//, 6
}

console.log(x);