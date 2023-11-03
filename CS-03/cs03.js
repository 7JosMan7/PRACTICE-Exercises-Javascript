let arr3 = [1,2,3,4];

function producto(arr) {
    let suma = arr.reduce((resultado, elemento) => { return resultado + elemento });
    let producto = arr.reduce((resultado, elemento) => { return resultado * elemento });
    return `El resultado de la suma es: ${suma} y este es el producto: ${producto}`;
}

console.log(producto(arr3));