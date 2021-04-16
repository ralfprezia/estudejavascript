//AND lógico (&&)
exp1 && exp2

var a1 = true && true;      // t && t retorna true
var a2 = true && false;      // t && f retorna false
var a3 = false && true;      // f && f retorna false
var a4 = false && (3 == 4);      // f && f retorna false
var a5 = "Gato" && "Cão";      // t && t retorna Cão
var a6 = false && "Gato";      // f && t retorna false no caso var a6 recebe uma string
var a7 = "Gato" && false;      // t && f retorna false

//OR, OU lógico (||)
exp1 || exp2

var o1 = true || true;      // t || t retorna true
var o2 = true || false;      // t || f retorna true
var o3 = false || true;      // f || f retorna true
var o4 = false || (3 == 4);      // f || f retorna false
var o5 = "Gato" || "Cão";      // t || t retorna Gato
var o6 = false || "Gato";      // f || t retorna Gato
var o7 = "Gato" || false;      // t || f retorna Gato

//Not lógico (!)
//Nega a condição
!exp1
var n1 = !true;     // !t retorna false
var n2 = !false;     // !t retorna true
var n3 = !"Gato";     // !t retorna false pq string preenchida é verdadeiro
//Exemplos 
//Retorna true
" "
 1
 ['teste']
 //Retorna false
 ""
 0
 []

 //Conversão para boleanos
 !!
 //neste caso
 var a6 = false && "Gato";