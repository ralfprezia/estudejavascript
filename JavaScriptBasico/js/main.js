/*
var nome = "Ralf Prezia";//satring
var idade = 38;//number
var idade2 = 10;//number
var idade3 = "38";//string
var idade4 = "10";//string
var frase = "Japão é o melhor time do mundo!";//string
var n1 = 10;//number
var n2 = 5;//number
//alert("Bem vindo " + nome + " tem " + idade + " anos.");
//alert(nome + " " + idade3 + idade4);
console.log(nome);//Ralf Prezia
console.log(idade + idade2);//48
console.log(idade3 + idade4);//3810
console.log(frase.replace("Japão", "Brasil"));//.replace, substitui o segundo pelo primeiro nome
console.log(frase.toUpperCase());// altera a frase tudo letra maiúsculas
console.log(frase.toLowerCase());
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 % n2);
console.log(n1 / n2);
console.log(n1 * idade);
console.log(n1 + frase);
*/

/* 
var lista = ["maçã", "pera", "laranja"];
console.log(lista);//["maçã", "pera", "laranja"]
console.log(lista[0]);//maçã
console.log(lista[1]);//pera
console.log(lista[2]);//laranja
lista.push("uva");//adicionando um elemento na lista
console.log(lista);//["maçã", "pera", "laranja", "uva"]
console.log(lista.length);//me retorna o tamanho do array = 4
lista.pop();//retira o último elemnto
console.log(lista);
console.log(lista.length);// = 3 - retornando o tamanho do array após o pop
console.log(lista.reverse());//inverte a ordem no array
console.log(lista.toString());//tira a estrutura do array, no caso os colchetes e transforma em string
console.log(lista.join(" - "));//transforma em string e inclui o separador de sua escolha
console.log(lista.join(" / "));// outro exemplo usando a barra para separar
console.log(lista.join("  "));// outro exemplo usando o espaço para a separação
console.log(lista.join(""));// outro exemplo usando nada para espaçar
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);


var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[1].cor);
console.log(frutas[0].nome);
console.log(frutas[0].cor);
*/

/* 
var idade = prompt("Qual a sua idade?");//receber a resposta do usuário
if (idade >= 18) {
    console.log("Maior de idade");
}else {
   console.log("Menor de idade");
}

*/

/* //estrutura de repetição WHILE
var count = 0;
while(count <= 5) {
    console.log(count);//imprime os números de 0 até 5
    //alert(count);//OPCIONAL
    count = count + 1;// ou pode usar -> (count ++;)
};
*/

/*//estrutura de repetição FOR 
var count;

for(count = 0; count <=5; count++){
    alert(count);
    console.log(count);
}
*/

//DATA

var d = new Date();
console.log(d);
//console.log(d.getTime);
//console.log(d.getFullYear);
//console.log(d.getMonth);
//console.log(d.getDay);
//console.log(d.getMilliseconds);
//console.log(d.getSeconds);
//console.log(d.getMinutes);
//console.log(d.getHours);
//console.log(d.getDate);
//console.log(d.getTimezoneOffset);
//console.log(d.getUTCDate);
//console.log(d.getUTCMonth);
//console.log(d.getUTCFullYear);
//console.log(d.getUTCHours);
//console.log(d.getUTCMinutes);
//console.log(d.getUTCDay);
//console.log(d.getUTCMilliseconds);
//console.log(d.getUTCSeconds);
//console.log(d.setDate);

