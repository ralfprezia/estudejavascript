/*--------------------------------Declarando funções -------------------------------*/
//Clássico
function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here';

/*--------------------------------------------------------------------------------------------*/

const arrowFn = () => {
    //Mais de uma expressão acresecenta o retorno explicito
    return 'Code here';
}

//Funções também são objetos
fn.prop = 'Posso criae propriedades';

console.log(fn());// executo a função
console.log((fn.prop));//declaro uma prop dentro da função que é umn objeto

//Receber parâmetros, passa função, retorna parâmetros
const  logValor = value => console.log(value);
const logFnResultado = fnParam => console.log(fnParam());

logFnResultado(fn);

//Receber um parametro memoriza e recebe outra na execução retornar funções
const controlFnExec => fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}
/*-------------------Outra forma------------------------------------- */
const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executará a função fn
handleFnExecution(); //Não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if(allowed){
            fnParam();
        }
    }
}