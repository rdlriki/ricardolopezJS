
//CREACION DEL VECTOR PARA SELECCIONAR EL MODO DE PAGO Y SU DESCUENTO/AUMENTO
//VIA EFECTIVO, DEBITO, MP
let vectorAjuste = [ [0.9,10,"efectivo"], [1.1,10,"debito"],[1.05,5,"MercadoPago"] ]

//FUNCION PARA DEVOLVER EL MONTO A COBRAR
function cobrar(montoCobrar, comoPaga, ajusteTarjeta){
    if (comoPaga == 0){
        console.log("Pagar con "+vectorAjuste[comoPaga][2],"tiene un descuento de "+vectorAjuste[comoPaga][1],"%");
        return montoCobrar*vectorAjuste[comoPaga][0];
    }
    else if (comoPaga == 3) {
        return montoCobrar*(1+ajusteTarjeta);
    }
    else {
        console.log("Pagar con "+vectorAjuste[comoPaga][2],"tiene un ajuste de "+vectorAjuste[comoPaga][1],"%");
        return montoCobrar*vectorAjuste[comoPaga][0];
    }
}

//CLASE REFERENTE A LOS PORTENTAJES DE AUMENTO DE LAS TARJETAS DE CREDITO
class cuotasTarjetaCredito{
    constructor (porcentaje, decimal){
        this.porcentaje = porcentaje;
        this.decimal = decimal;
    }
}

//CUANDO SE PAGA CON TARJETA, SE INDICA LA CANTIDAD DE CUOTAS, EL PORCENTAJE Y EL RECARGO
function mensajeCuotas(quotes, porcentaje, decimal, importe){
    let ajust = importe*decimal;
    console.log("El pago con tarjeta en "+quotes,"cuotas tiene un interes del "+porcentaje,"%");
    console.log("El recargo es de $"+ajust)
}

//MENSAJE DE CUANTO TIENE QUE COBRAR
function mensajeImporte(a,b,c){
    console.log("El importe a cobrar es: $"+cobrar(a,b,c))
}

//*****COMIENZO DEL PROGRAMA****///
alert("Ingrese los intereses en % de las cuotas en 1 pago, 3, 6, 9 y 12");

//INICIALIZO VECTOR DE INTERESES E INICIALIZO VARIABLES 
let intTarjeta = [];
let cuota = 1;
let test=false;
let modoPago=0;

//ITERACION PARA CARGAR EL VECTOR CON LOS INTERESES POR PAGAR CON TARJETA
for (let j=0; j<5;j++){
    if (j>0) { cuota = j*3;}
    let quote = parseInt(prompt("Ingrese el % de interes por el pago en "+(cuota)+" cuotas:"));
    intTarjeta.push( new cuotasTarjetaCredito (quote, quote/100));
}

//MENSAJE PARA MOSTRAR CUANTO DEBERIA ABONAR
let importe=parseInt(prompt("Ingrese el importe a abonar"));
console.log("Su importe es: $"+importe)

//SELECCION DE MODO DE PAGO
modoPago=parseInt(prompt("Indique modo de pago: 1-Efectivo 2-Debito 3-MP 4-Credito"));

//LOOP PARA QUE SE ELIJA BIEN EL MODO DE PAGO
do{
    if (modoPago<1 || modoPago>4){
        test=true;
        alert("Por favor, ingrese: 1-Efectivo 2-Debito 3-MP 4-Credito")
        modoPago=parseInt(prompt("Indique modo de pago: 1-Efectivo 2-Debito 3-MP 4-Credito"));
    }
    else {
        test=false; //CONDICION PARA SALIR DEL LOOP
    }
}while (test)

//LE RESTO UNO PARA USARLO COMO INDICE PARA EL VECTOR
modoPago = modoPago - 1;

//SI SELECCIONO TARJETA, ESTE CONDICIONAL ES PARA SELECCIONAR LAS CUOTAS
if (modoPago==3){
    test=false;
    cuotas=parseInt(prompt("Ingrese la cantidad de cuotas: 1/3/6/9/12"));
    do{
        if (cuotas==1 || cuotas==3 || cuotas==6 || cuotas==9 || cuotas==12){  //CONDICION PARA SALIR DEL LOOP
            test=false;
        }
        else {
            test=true;
            alert("Por favor, Ingrese la cantidad de cuotas: 1/3/6/9/12");
            cuotas=parseInt(prompt("Ingrese la cantidad de cuotas: 1/3/6/9/12"));
        }
    }while (test)

//SELECCION DE ACUERDO A LA CUOTA INGRESADA
//DE ACUERDO A LA CUOTA, SE CONVOCAN LAS FUNCIONES MENSAJECUOTAS Y MENSAJEIMPORTE
    switch (cuotas){
        case 1:
            mensajeCuotas(cuotas,intTarjeta[0].porcentaje,intTarjeta[0].decimal,importe);
            mensajeImporte(importe,modoPago,intTarjeta[0].decimal);
            break;
        case 3:
            mensajeCuotas(cuotas,intTarjeta[1].porcentaje,intTarjeta[1].decimal,importe);
            mensajeImporte(importe,modoPago,intTarjeta[1].decimal);
            break;
        case 6:
            mensajeCuotas(cuotas,intTarjeta[2].porcentaje,intTarjeta[2].decimal,importe);
            mensajeImporte(importe,modoPago,intTarjeta[2].decimal);
            break;
        case 9:
            mensajeCuotas(cuotas,intTarjeta[3].porcentaje,intTarjeta[3].decimal,importe);
            mensajeImporte(importe,modoPago,intTarjeta[3].decimal);
            break;
        case 12:
            mensajeCuotas(cuotas,intTarjeta[4].porcentaje,intTarjeta[4].decimal,importe);
            mensajeImporte(importe,modoPago,intTarjeta[4].decimal);
            break;
        default:
            break;
    }
}
//EL ELSE ES PARA AQUELLOS MODOS DE PAGO EXCEPTO TARJETA DE CREDITO
    else{
        ajuste=0;
        mensajeImporte(importe,modoPago,ajuste);
}
