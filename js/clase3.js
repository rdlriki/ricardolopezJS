
let numero=parseInt(prompt("Ingrese un numero"));
let duplicar=numero;
let i=0;
let j=1;
let k=0;

console.log("El numero ingresado es: "+numero);
j=prompt("Desea duplicar el numero ingreado? SALE CON ENTER!!!");

while (j!="") {
    numero=numero*2;
    i=i+1;
    j=prompt("Desea duplicar el numero ingreado? SALE CON ENTER!!!");
}


for ( k=0 ; k<i ; k=k+1 ){
    duplicar=duplicar*2;
}

console.log("Con While, el número se duplicó " +i,"veces con i y su resultado es: " +numero);
console.log("Con FOR, el número se duplicó " +k,"veces con k y su resultado es: " +duplicar);
