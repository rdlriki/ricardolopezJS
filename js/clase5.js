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
            return montoCobrar*(1+ajusteTarjeta);
            break
        default:
            break
    }
}

function cuotasCredito (unPago, tresCuotas, seisCuotas, nueveCuotas, doceCuotas){
    this.unPago = unPago;
    this.tresCuotas = tresCuotas;
    this.seisCuotas = seisCuotas;
    this.nueveCuotas = nueveCuotas;
    this.doceCuotas = doceCuotas;
}

function mensajeCuotas(quotes, porcentaje){
    let ajust= porcentaje * 100;
    console.log("El pago con tarjeta en "+quotes,"cuotas tiene un recargo del "+ajust,"%")
}

function mensajeImporte(a,b,c){
    console.log("El importe a cobrar es: $"+cobrar(a,b,c))
}

//*****COMIENZO DEL PROGRAMA****///

alert("Ingrese los intereses en % de las cuotas en 1 pago, 3, 5, 9 y 12");
let unPago=parseInt(prompt("Ingrese el % de interes por el pago en 1 cuota:"))/100;
let tresCuotas=parseInt(prompt("Ingrese el % de interes por el pago en 3 cuotas:"))/100;
let seisCuotas=parseInt(prompt("Ingrese el % de interes por el pago en 6 cuotas:"))/100;
let nueveCuotas=parseInt(prompt("Ingrese el % de interes por el pago en 9 cuotas:"))/100;
let doceCuotas=parseInt(prompt("Ingrese el % de interes por el pago en 12 cuotas:"))/100;

let importe=parseInt(prompt("Ingrese el importe a abonar"));
console.log("Su importe es: $"+importe)
let test=false;
let modoPago=0;


let intereses = new cuotasCredito (unPago, tresCuotas, seisCuotas, nueveCuotas, doceCuotas);

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
            ajuste= intereses.unPago ;
            mensajeCuotas(cuotas,ajuste);
            mensajeImporte(importe,modoPago,ajuste);
            break;
        case 3:
            ajuste= intereses.tresCuotas;
            mensajeCuotas(cuotas,ajuste);
            mensajeImporte(importe,modoPago,ajuste);
            break;
        case 6:
            ajuste = intereses.seisCuotas;
            mensajeCuotas(cuotas,ajuste);
            mensajeImporte(importe,modoPago,ajuste);
            break;
        case 9:
            ajuste = intereses.nueveCuotas;
            mensajeCuotas(cuotas,ajuste);
            mensajeImporte(importe,modoPago,ajuste);
            break;
        case 12:
            ajuste = intereses.doceCuotas;
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