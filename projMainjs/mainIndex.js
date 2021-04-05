
//FUNÇÕES sempre return!


function clicou()
{

    document.getElementById("agradecimento").innerHTML = "<>Obrigado por clicar</>";


   // document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";//seleciona o elemento pelo id e substitui o texto do HTML



    /*
    //document.getElementById("agradecimento");
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar");
    */
}

function redirecionar()
{
    window.open("https://github.com/ralfprezia"); //abre em outra janela

    //window.location.href = "https://github.com/ralfprezia";//abre na mesma janela
}

function trocar(elemento)
{
    elemento.innerHTML = "Confirmando mousemove!!!";
    //document.getElementById("mousemove").innerHTML = "Confirmando mousemove!!!";
    //alert("trocar texto");
    
}

function voltar(elemento)
{
    //elemento.innerHTML = "Passe o mouse aqui!";
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

function load()
{
    alert("Página carregada.");
}

function change(elemento)
{
    console.log(elemento.value);
}






/*
function validaIdade(idade)
{
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar
}

var idade = prompt("Digite a sua idade:");
console.log(validaIdade(idade));
*/







/*
function soma(n1, n2)
{
    return n1 + n2
}
alert(soma(5, 10));
*/







/* 
function setReplace(frase, nome, novo_nome)
{
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));

*/








/*
//DATA ATUAL
var d = new Date();
alert(d);//método que capta e envia a data completa e correta do dia do Usuário
//alert(d.getDate());
//alert(d.getDay());
//alert(d.getFullYear());
//alert(d.getHours());
//alert(d.getMilliseconds());
//alert(d.getMinutes());
//alert(d.getMonth());
//alert(d.getSeconds());
//alert(d.getTime);
//alert(d.getTimezoneOffset());
//alert(d.getUTCDate());
//alert(d.getUTCDay());
//alert(d.getUTCFullYear());
//alert(d.getUTCHours());
//alert(d.getUTCMilliseconds());
//alert(d.getUTCMinutes());
//alert(d.getUTCMonth());
//alert(d.getUTCSeconds());

*/








/*
Looping For
var i;
for (i = 0; i < 5; i++){
    console.log(i);
    alert(i);
};
*/










/*
//Looping While
var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count++
};
*/










/*//CONDICIONAL
//recebendo um dado do usuário e atribuindo na variável idade
var idade = prompt("Qual a sua idade?");//comando PROMPT == Console.WriteLine
if (idade >= 18){
    alert("maior idade");
}
else{
    alert("menor idade");
};
*/










/*
//Lista de dicionário

var frutas = [{ nome: "maçã", cor: "vermelha"},
 { nome: "pêra", cor: "amarelo clarinho"},
  { nome: "laranja", cor: "amarelo"}];
console.log(frutas);
alert(frutas[1].nome);
*/











/*
//DICIONÁRIO
var fruta = { nome: "maçã", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
alert(fruta.nome);
*/











/* ARRAY

var lista = ["maça", "pêra", "laranja"]

console.log(lista);
console.log(lista.toString);
console.log(lista.join(" - "));//imprime a string separada por um traço (-).
console.log(lista.join(" | "));//imprime a string separada por um traço pipeline (|).
console.log(lista.join("  "));//imprime a string separada por um espaço ( ).

//console.log(lista[0]);//maçã = 1° elemento do array.

//console.log(lista.toString()[0]);//a = 1? elemento da string "maçã".

//lista.push("uva");//método que adiciona uva na lista.

//lista.pop("maçã");//método que remove a maçã da lista.

//console.log(lista.reverse());//método que inverte a ordem na lista.

//console.log(lista.length);//passa o tamanho da lista.

//console.log(lista);//lista em formato de Array

//console.log(lista.toString());//lista em formato string ex = maçã,pêra,laranja,uva.

*/










/* //STRINGS E INTEIROS
var nome = "Ralf Prezia";
var idade = 37;
alert(nome + " tem " + idade + " anos.");
console.log(nome);
console.log(idade);
console.log(nome + " tem " + idade + " anos.") 
var idade2 = 10;
console.log(idade + idade2);//SOMA DAS IDADES
*/








/*
var idade = "37";//STRING
var idade2 = "10";//STRING
console.log(idade + idade2);//CONCATENARÁ AS DUAS STRINGS = 3710.
alert(idade + idade2);
 
var frase = "Japão é o melhor time do mundo";
console.log(frase);
console.log("Aqui usamos o replace onde trocamos o sujeito da frase:\n "
+ frase.replace("Japão", "Brasil"));//TROCA UMA PALAVRA POR OUTRA O CONSOLE
//alert(frase.replace("Japão", "Brasil"));//REALIZA A TROCA NA MSG DE ALERTA
console.log(frase.toUpperCase());//FRASE TODA EM MAIÚSCULA.
console.log(frase.toLowerCase());//frase toda em minúsculo.
*/