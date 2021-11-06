let cuotas=0;
function cobrar(montoCobrar, comoPaga, ajusteTarjeta){
    switch (comoPaga){
        case 1:
            console.log("Pagar con efectivo tiene un descuento del "+(1-0.9)*100,"%");
            return montoCobrar*0.9;
            break;
        case 2:
            console.log("Pagar con débito tiene un "+(1.1-1)*100,"% de recargo");
            return montoCobrar*1.10;
            break;
        case 3:
            console.log("Pagar con MercadoPago tiene un "+(1.05-1)*100,"% de recargo");
            return montoCobrar*1.05;
            break;
        case 4:
            return montoCobrar*ajusteTarjeta;
            break
        default:
            break
    }
}

function mensajeCuotas(quotes, porcentaje){
    let ajust=(porcentaje-1)*100;
    console.log("El pago con tarjeta en "+quotes,"cuotas tiene un recargo del "+ajust,"%")
}

function mensajeImporte(a,b,c){
    console.log("El importe a cobrar es: $"+cobrar(a,b,c))
}


let importe=parseInt(prompt("Ingrese el importe a abonar"));
console.log("Su importe es: $"+importe)
let test=false;
let modoPago=0;

modoPago=parseInt(prompt("Indique modo de pago: 1-Efectivo 2-Debito 3-MP 4-Credito"));

do{
    if (modoPago<1 || modoPago>4){
        test=true;
        alert("Por favor, ingrese: 1-Efectivo 2-Debito 3-MP 4-Credito")
        modoPago=parseInt(prompt("Indique modo de pago: 1-Efectivo 2-Debito 3-MP 4-Credito"));
    }
    else {
        test=false;
    }
}while (test)

if (modoPago==4){
    test=false;
    cuotas=parseInt(prompt("Ingrese la cantidad de cuotas: 1/3/6/9/12"));
    do{
    if (cuotas==1 || cuotas==3 || cuotas==6 || cuotas==9 || cuotas==12){
        test=false;
    }
    else {
        test=true;
        alert("Por favor, Ingrese la cantidad de cuotas: 1/3/6/9/12");
        cuotas=parseInt(prompt("Ingrese la cantidad de cuotas: 1/3/6/9/12"));
    }
    }while (test)


    switch (cuotas){
        case 1:
            ajuste=1.15;
            mensajeCuotas(cuotas,ajuste);
            mensajeImporte(importe,modoPago,ajuste);
            break;
        case 3:
            ajuste=1.2;
            mensajeCuotas(cuotas,ajuste);
            mensajeImporte(importe,modoPago,ajuste);
            break;
        case 6:
            ajuste=1.3;
            mensajeCuotas(cuotas,ajuste);
            mensajeImporte(importe,modoPago,ajuste);
            break;
        case 9:
            ajuste=1.4;
            mensajeCuotas(cuotas,ajuste);
            mensajeImporte(importe,modoPago,ajuste);
            break;
        case 12:
            ajuste=1.5;
            mensajeCuotas(cuotas,ajuste);
            mensajeImporte(importe,modoPago,ajuste);
            break;
        default:
            break;
    }
}
    else{
        ajuste=0;
        mensajeImporte(importe,modoPago,ajuste);
}