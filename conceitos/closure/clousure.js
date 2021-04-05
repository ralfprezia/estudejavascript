function init()//FUNÇÃO INIT
{
    const exemplo = "Essa variável";//CRIAÇÃO DA VARIÁVEL EXEMPLO
    const exemplo2= "Outra variável";
    const exemplo3= "Mais uma variável";

    //FUNÇÃO init(); Á CIMA RETORNANDO OUTRAS FUNÇÕES
    return function()
    {
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);
        
        return function(){
            console.log(`2 - O valor da variável exemplo é: ${exemplo2}.`);
            
            return function(){
                console.log(`3 - O valor da variável exemplo é: ${exemplo3}.`);
            }
        }
    }
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

/*

function init()//FUNÇÃO INIT
{
    const exemplo = "Essa variável";//CRIAÇÃO DA VARIÁVEL EXEMPLO

    //FUNÇÃO init(); Á CIMA RETORNANDO OUTRAS FUNÇÕES
    return function(exemplo)//ideal inserir a variável como parâmetro para saber de onde vem o retorno
    {
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);
        
        return function(exemplo){
            console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);
            
            return function(exemplo){
                console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);
            }
        }
    }
}
//TIPOS DE RETORNO

//init()()()();// NÃO RECOMENDADO A EXECUÇÃO DE TODAS AS FUNÇÕES DESTA FORMA

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

*/
