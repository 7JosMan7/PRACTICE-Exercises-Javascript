let arr2 = [1, 2, 4, 5];
function multiplica() {
    let resultado = [];
    for (numero of arr2) {
        resultado.push(numero * 2);
    }
    return resultado;
}

console.log(multiplica());