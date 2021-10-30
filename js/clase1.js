let nombre=prompt("Ingrese su nombre");
let apellido=prompt("Ingrese su apellido");
let anio=parseInt(prompt("Ingrese el año de su nacimiento"));

let anioactual = 2021; //GUARDO EL AÑO ACTUAL
let edad = anioactual-anio; //CALCULO LA EDAD

console.log("Bienvenido " + nombre +"" + apellido); //IMPRIMO NOMBRE APELLIDO
console.log("Si su cumpleaños ya pasó, usted tiene: " + edad); //IMPRIMO EDAD