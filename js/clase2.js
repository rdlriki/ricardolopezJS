let nombre=prompt("Ingrese su nombre"); //INGRESO NOMBRE
let apellido=prompt("Ingrese su apellido"); //INGRESO APELLIDO

let num1=parseInt(prompt("Ingrese un numero")); //INGRESE NUMERO 1
let num2=parseInt(prompt("Ingrese otro numero")); //INGRESE NUMERO 2
let resta;

usuario = nombre + apellido; //HAGO NOMBREAPELLIDO

alert("Bienvenido " + usuario); //CARTEL DE ALERTA BIENVENIDO USUARIO

if (num1>num2){ //CONDICIONAL PARA INDICAR QUE NUMERO ES MAYOR, MENOS O SI SON IGUALES
    console.log("El primer numero (" + num1 + ") es mayor al segundo (" + num2 +")");
    resta =  num1 - num2; //HAGO LA RESTA PARA QUE EL NUMERO SEA POSITIVO
    }
    else if (num1<num2) {
        console.log("El segundo numero (" + num2 + ") es mayor al primero");
        resta = num2 - num1; //IDEM
    }
    else {
        console.log("Los dos numeros son iguales entre sí");
        resta = 0; //NUMEROS IGUALES, SE QUE LA RESTA ES 0
}

let multi = num1 * num2; //MULTIMPLICO AMBOS NUMEROS
let suma = num1 + num2 //SUMO LOS NUMEROS

//MUESTRO EN PANTALLA LOS RESULTADOS ARITMÉTICOS
console.log("La multiplicacion de ambos numeros es: " + multi);
console.log("La suma de ambos numeros es: " + suma);
console.log("La resta de ambos numeros es: " + resta);