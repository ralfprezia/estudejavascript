function getName(){
    return "Ralf Franco Prezia Carneiro";
}

function logFn(fn)//recebe uma função como parâmetro
{
    console.log(fn());//retorna o conteúdo de getName à cima
    //return fn(());//retorna somente a execução
}
const logFnResult = logFn;//atribui o retorno para a variável logFnResult
/*
const obj = //criando um outro objeto e atribuindo a função logFn
{
    logFn : logFn//atribuindo a função
}
const arr = [logFn]//criando um ARRAY
*/

logFnResult(getName);//função pode ser passado por argumentos