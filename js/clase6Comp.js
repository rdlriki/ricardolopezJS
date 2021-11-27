//GENERO EL CONSTRUCTOR DEL VECTOR CON LOS NOMBRES DE ALUMNOS Y SUS NOTAS
class notasAlumnos{
    constructor (nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
    }
}

//ALTA DEL VECTOR RESULTADOS
let resultados = [];

//ITERACION PARA CARGAR CON NOMBRES Y NOTAS
for (let j=0; j<5;j++){
    let name = (prompt("Ingrese el nombre del alumno"));
    let qualify = parseInt(prompt("Ingrese la nota"));
    
    resultados[j]=( new notasAlumnos (name, qualify));
}

//IMPRIMO EL VECTOR "DESORDENADO"
console.log(resultados);

//HAGO UNA COPIA DEL VECTOR
let ordenados = resultados;

//DOBLE ITERACION PARA ORDENAR EL VECTOR DE MENOR A MAYOR
for (let k = 0; k < 4; k++){
    for (let f = 0; f < 4 - k; f++){
        if (ordenados[f].nota > ordenados[f + 1].nota)
            {
                let aux=[];
                aux = ordenados[f];
                ordenados[f] = ordenados[f + 1];
                ordenados[f + 1] = aux;
        }
    }
}

//IMPRIMO EL VECTel OR ORDENADO
console.log(ordenados);