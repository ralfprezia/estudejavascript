let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
    console.log(i);     // logs "0", "1", "2", "foo"//foo é uma propriedade
}

for (let i of arr) {// só executa os valores do array
    console.log(i);     // logs "3", "5", "7"
}