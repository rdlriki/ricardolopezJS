let porcLunes= 0.05;
let porcMiercoles= 0.15;
let porcSabado= 0.2;

let precioFinal=0;
let descuento=0;

function hacerDescuento ( diaIn, precioIn ){
    if (diaIn=="lunes"){
        return precioIn * porcLunes;
    }
    else if (diaIn=="miercoles"){
        return precioIn * porcMiercoles;
    }
    else if (diaIn=="sabado"){
        return precioIn * porcSabado;
    }
    else {
        return 0;
    }
}

function iva (precioIVA){
    return precioIVA * 0.21;
}

let precio=parseInt(prompt("Ingrese el precio a pagar"));
let dia=prompt("Ingrese el día");

console.log("Usted ingresó el día: "+dia);
console.log("El pecio resultó: "+precio);
console.log("El descuento para este día es: "+hacerDescuento(dia, precio));
switch (dia){
    case "lunes":
        console.log("El descuento de este dia es: 5%");
        break;
    case "miercoles":
        console.log("El descuento de este dia es: 15%");
        break;
    case "sabado":
        console.log("El descuento de este dia es: 20%");
        break;
    default:
        console.log("Este día no tiene descuento");
        break;
}
console.log("El IVA de ese producto es: " +iva(precio-(hacerDescuento(dia, precio))));
console.log("El precio final resulta: " +(precio - hacerDescuento(dia, precio) + iva(precio-(hacerDescuento(dia, precio)))));