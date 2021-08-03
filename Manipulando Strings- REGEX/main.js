
//IIFE
(function(win,doc){//parâmetros win e doc, são passados para indicar as variáveis a baixo.
    'use strict';//

    let btn = doc.querySelector('#btn');
    btn.addEventListener('click', ()=>{
        let email = doc.querySelector('#email').value;
        let texto = doc.querySelector('#texto').value;

        let regex =/(?<=@)[^.]+/gim;          //expressões regulares - Regex - utiliza duas barras// e suas flags g = toda expressão i = ignorar maiúsculas ou minusculas m = considera multiplas linhas.
        //tudo que estiver antes do @ = (?<=@), descarta e posteriormente pega tudo = [^.],
        // ou seja o regex recebe só o servidor do email.
        let server = email.match(regex);
        doc.querySelector('.result').innerHTML=`
        Seu servidoe de email é ${server}`;//a variável server é mostrada concatenada sendo retornada para o usuário
        console.log(texto.replaceAll(' ','_'));

        let regex2 = /[\d\s]+/gim; ////pega todos os digitos(\d) e todos os espaços(\s) em branco- substitui por (_)
        console.log(texto.replaceAll(regex2,'_'));
        //checagem se determinada palavra existe dentro do regex2
        console.log(texto.includes('bolsas'));
        if(texto.includes('bolsas')){
            alert('Palavra existe!'); 
        }
        else {
            alert('Palavra não existe!');
        }
        //dividir a string - retornará um array com as strings separadas por um espaço
        console.log(texto.split(' '));
        console.log(texto.split(' ')[3]);//eu seleciono para mostrar a posição específica!



    },false);

})(window, document);//variável passada dentro da função preservando o seu estado global.