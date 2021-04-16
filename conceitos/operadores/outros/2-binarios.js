//in
something in somethingItems

//Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;           //retorna true
3 in arvores;          //retorna true
6 in arvores;           //retorna false pq o array é de 5 posições
"cedro" in arvores;     //retorna false (devemos especificar o número do índice)cedro está no indice 3
                        //não o valor
"length" in arvores;    //retorna true (length é uma propriedade do array)

//Objetos predefinidos
"PI" in Math;            //returna true
var minhaString = new String("coral");
"length" in minhaString; //retorna true


//Obejtos personalizados 
var meuCaroo = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meuCaroo;        //retorna true
"modelo" in meuCaroo;       //retorna true

//instanceof
objeto instanceof tipoObjeto// verifica se dia é uma instancia do objeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date){
    //code here
}