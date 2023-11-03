let estudiante1Cursos = ['Matemáticas', 'Inglés', 'Programación'];
let estudiante2Cursos = ['Geografía', 'Español', 'Programación'];

function materias(arr, arr2){
    let resultado;
    for(materia of arr){
        for(mate of arr2){
            if(materia.includes(mate)){
                resultado = mate;
            }
        }
    }
    return resultado;
}

console.log(materias(estudiante1Cursos,estudiante2Cursos));