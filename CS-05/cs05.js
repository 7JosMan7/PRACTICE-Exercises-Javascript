let gente = ["María", "Dani", "Luis", "Juan", "Camila"];

//Escriba un comando que imprima todas las personas de la lista.
for(nombre of gente) {
    console.log(nombre);
}

//Escriba el comando para eliminar "Dani" del array.
if(gente.includes('Dani')) {
    gente.splice(gente.indexOf('Dani'), 1);
    console.log(gente);
}

//Escribe el comando para eliminar "Juan" del array.
if(gente.includes('Juan')) {
    gente.splice(gente.indexOf('Juan'), 1);
    console.log(gente);
}

//Escribe el comando para mover a "Luis" al frente de la matriz.
if(gente.includes('Luis')) {
    gente.splice(gente.indexOf('Luis'), 1);
    gente.unshift('Luis');
    console.log(gente);
}

//Escriba el comando para agregar su nombre al final de la matriz.
gente.push('Manuel');
console.log(gente);

//Usando un bucle, itere a través de este array y después de console.log "Maria", salga del bucle.
for(nombre of gente) {
    if(nombre === 'María') {
        console.log(nombre);
        break
    }else{
        console.log(nombre);
    }
}

//Escribe el comando que da el indexOf donde se encuentra "Maria".
console.log(gente.indexOf('María'));