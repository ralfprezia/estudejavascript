//Spread ...
var partes = ['ombro', 'joelhos'];
                //spread...
var musica = ['cabeca', ...partes, 'e', 'pés'];
/* //Resultado                     
var musica = ['cabeca', 'ombro', 'joelhos', 'e', 'pé']
*/
/*____________________________________________________________________*/

//função com 3 parâmetros
function fn(x, y, z) {}
var args = [0, 1, 2];//x=0, y=1, z=2
fn(...args);

/*____________________________________________________________________*/
