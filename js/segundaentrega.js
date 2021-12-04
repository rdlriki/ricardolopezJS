/*INICIALIZO VARIABLES*/
let cuotas; 
let apagarMedioPago = 0;
let apagarTarjeta = 0;
let pago = 0;


/*INICIALIZO LA VARIABLE JSON PARA RECUPERAR EL ARREGLO INTERESES TARJETA CREDITO*/
let cuotasInicialJSON = localStorage.getItem( "cuotasTarjetaCreditoJSON");
let cuotasInicialParse = JSON.parse( cuotasInicialJSON);

/*INICIALIZO LA VARIABLE JSON PARA RECUPERAR EL ARREGLO EFECTIVO DEBITO MP*/
let medioPagoInicialJSON = localStorage.getItem( "medioPagoEfeDebMpJSON");
let medioPagoInicialParse = JSON.parse( medioPagoInicialJSON);

//SECCIONES MEDIO DE PAGO / PAGAR TARJETA
let seccionMedioPago = document.getElementById("seccionMedioPago");
let seccionPagarTarjeta = document.getElementById("seccionPagarTarjeta");
let seccionPagar = document.getElementById("seccionPagar");

/*************DETECTO BOTONES************************/

//BOTON INGRESAR Y MODIFICAR CUOTAS
let modificarCuotas = document.getElementById("modificarCuotas");
let modificarMedioPagoEfeDebMp = document.getElementById("modificarMedioPagoEfeDebMp");

//BOTON ACEPTAR SECCION INGRESAR/MODIFICAR CUOTAS
let cuotasIngresadas = document.getElementById ("cuotasIngresadas");
let medioPagoIngresado = document.getElementById ("medioPagoIngresado");

//BOTON DE EFECTIVO / DEBITO / MERCADO PAGO / TARJETA DE CREDITO
let efectivo = document.getElementById ("efectivo");
let debito = document.getElementById ("debito");
let mercadoPago = document.getElementById ("mP");
let mostrarCuotasTarjeta = document.getElementById("botonCuotas");

//BOTON REINICIAR
let reiniciarCalculo = document.getElementById ("pagar")

/*PARA RECONOCER LOS BOTONES DE LAS CUOTAS SELECCIONADAS*/
let quote1 = document.getElementById("unaCuotas");
let quote3 = document.getElementById("tresCuotas");
let quote6 = document.getElementById("seisCuotas");
let quote9 = document.getElementById("nueveCuotas");
let quote12 = document.getElementById("doceCuotas");

/*PARA RECONOCER CUANDO SE INGRESAN LAS CUOTAS*/
let cuota1 = document.getElementById("cuotaUno");
let cuota3 = document.getElementById("cuotaTres");
let cuota6 = document.getElementById("cuotaSeis");
let cuota9 = document.getElementById("cuotaNueve");
let cuota12 = document.getElementById("cuotaDoce");

/*PARA RECONOCER CUANDO SE INGRESA EFCTIVO / DEBITO / MERCADO PAGO*/
let elijeEfectivo = document.getElementById("pagoEfectivo");
let elijeDebito = document.getElementById("pagoDebito");
let elijeMp = document.getElementById("pagoMp");


/*************DETECTO EL MONTO A PAGAR************************/
//EN PAGO SE GUARDA EL MONTO A PAGAR
let pagarMonto = document.getElementById("monto");


/*CONDICION QUE COMPRUEBA SI EL ARREGLO ESTÁ ALMACENADO O NO */
/*SI EL ARREGLO NO ESTA CREADO */
if (cuotasInicialParse==null){
    mensajeInicioTartjeta.style.display = "block";
    /*CREO EL ARREGLO AQUI GLOBAL Y LO INICIALIZO EN 0*/
    var cuotasTarjetaCredito = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
    seccionModificarCuotas.style.display = "none"; //OCUTLO EL BOTON MODIFICAR
} else {
    /*SI EL ARREGLO ESTA CREADO, LO RECUPERO*/
    mensajeInicioTartjeta.style.display = "none"; //OCULTO BOTON INGRESAR 
    seccionModificarCuotas.style.display = "block"; //MUESTRO BOTON MODIFICAR
    seccionIngresarCuotas.style.display = "none"; //OCULTO BOTON INGRESAR 

    let enJSON = localStorage.getItem( "cuotasTarjetaCreditoJSON"); //LEO ARREGLO ALMACENADO EN MEMORIA
    //LA VARIABLE ES VAR YA QUE LA INICIALIZO AQUI Y PASA A SER GLOBAL
    var cuotasTarjetaCredito = JSON.parse( enJSON); //CONVIERTO EL DATO EN JSON A ARREGLO
    
    console.log( cuotasTarjetaCredito ); //IMPRIMO PARA VER SI LO RECUPERO BIEN
}

if (medioPagoInicialParse==null){
    mensajeInicioMedioPago.style.display = "block";
    /*CREO EL ARREGLO AQUI GLOBAL Y LO INICIALIZO EN 0*/
    var medioPagoEfeDebMp = [[0,0,0],[0,0,0],[0,0,0]];
    seccionModificarMedioPagoEfeDebMp.style.display = "none"; //OCUTLO EL BOTON MODIFICAR
} else {
    /*SI EL ARREGLO ESTA CREADO, LO RECUPERO*/
    mensajeInicioMedioPago.style.display = "none";
    seccionModificarMedioPagoEfeDebMp.style.display = "block"; //OCUTLO EL BOTON MODIFICAR
    seccionIngresarMedioPagoEfeDebMp.style.display = "none"; //OCULTO BOTON INGRESAR 

    let enJSON = localStorage.getItem( "medioPagoEfeDebMpJSON"); //LEO ARREGLO ALMACENADO EN MEMORIA
    //LA VARIABLE ES VAR YA QUE LA INICIALIZO AQUI Y PASA A SER GLOBAL
    var medioPagoEfeDebMp = JSON.parse( enJSON); //CONVIERTO EL DATO EN JSON A ARREGLO
    
    console.log( medioPagoEfeDebMp ); //IMPRIMO PARA VER SI LO RECUPERO BIEN
}


/*CONDICIONAL PARA OCULTAR / MOSTRAR SECCION DE SELECCION EL MEDIO DE PAGO */
if (apagarMedioPago == 0){
    seccionMedioPago.style.display = "none";
    seccionPagar.style.display = "none";
    seccionPagarTarjeta.style.display = "none";
}
if (apagarTarjeta == 0){
    seccionMedioPago.style.display = "none";
    seccionPagarTarjeta.style.display = "none";
    seccionPagar.style.display = "none";
}

//EVENTO CLIC EN BOTON INGRESAR/MODIFICADOR CUOTAS
modificarCuotas.addEventListener("click", function (e){
    console.log(cuotasTarjetaCredito);
    seccionIngresarCuotas.style.display = "block";
})

//EVENTO CLIC EN BOTON INGRESAR/MODIFICADOR EFECTIVO/DEBITO/MP
modificarMedioPagoEfeDebMp.addEventListener("click", function (e){
    console.log(medioPagoEfeDebMp);
    seccionIngresarMedioPagoEfeDebMp.style.display = "block";
})


/*CUANDO SE CARGAN LOS INTERESES DE LAS CUOTAS, SE GENERA EL ARRAY Y SE GUARDA LOCAL*/
cuotasIngresadas.addEventListener("click", function (e){
    console.log(cuotasTarjetaCredito);
    let cuotasTarjetaCreditoJSON = JSON.stringify ( cuotasTarjetaCredito );
    localStorage.setItem( "cuotasTarjetaCreditoJSON" , cuotasTarjetaCreditoJSON);

    console.log(cuotasTarjetaCreditoJSON);

    seccionIngresarCuotas.style.display = "none"
})

/*CUANDO SE CARGAN EL DESC./INTERES EFECTIVO/DEBITO/MP, SE GENERA EL ARRAY Y SE GUARDA LOCAL*/
medioPagoIngresado.addEventListener("click", function (e){
    console.log(medioPagoEfeDebMp);
    let medioPagoEfeDebMpJSON = JSON.stringify ( medioPagoEfeDebMp );
    localStorage.setItem( "medioPagoEfeDebMpJSON" , medioPagoEfeDebMpJSON);

    console.log(medioPagoEfeDebMpJSON);
    seccionIngresarMedioPagoEfeDebMp.style.display = "none"; //MUESTRO BOTON MODIFICAR

})

/////******REINICIA LA OPERACION
reiniciarCalculo.addEventListener("click", function(e){
    {location.reload(true);}

})


//FUNCION PARA GENERAR EL ARREGLO - INGRESA EL INDICE Y EL VALOR DE LA CUOTA
function generarArray(i,cuota){
    let primero = cuota;
    let segundo = primero / 100;
    let tercero = segundo + 1;

    cuotasTarjetaCredito[i] = [primero,segundo,tercero];
}

function generarArrayMedioPago(j,medioPago){
    if (j==0){
        let pri = medioPago;
        let seg = pri / 100;
        let ter = 1 - seg;
    
        medioPagoEfeDebMp[j] = [pri,seg,ter];
    } else{
        let pri = medioPago;
        let seg = pri / 100;
        let ter = 1 + seg;
    
        medioPagoEfeDebMp[j] = [pri,seg,ter];
    }
}

//*****************DETECTA EVENTOS AL APRETAR ENTER******************** 

//AL SELECCIONAR EFECTIVO / DEBITO / MERCADO PAGO
elijeEfectivo.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //reconoce cuando se apreta "Enter"
        let pagoEnEfectivo = e.target.value;
        console.log("Efectivo")
        generarArrayMedioPago(0, pagoEnEfectivo);
    }
})

elijeDebito.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //reconoce cuando se apreta "Enter"
        let cuotaTresPagos = e.target.value;
        console.log("Debito")
        generarArrayMedioPago(1, cuotaTresPagos);
    }
})

elijeMp.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //reconoce cuando se apreta "Enter"
        let cuotaSeisPagos = e.target.value;
        console.log("Mercado Pago")
        generarArrayMedioPago(2, cuotaSeisPagos);
    }
});

//AL INGRESAR LAS CUOTAS
cuota1.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //reconoce cuando se apreta "Enter"
        let cuotaUnPagos = e.target.value;
        console.log("1 pago")
        generarArray(0, cuotaUnPagos);
    }
})

cuota3.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //reconoce cuando se apreta "Enter"
        let cuotaTresPagos = e.target.value;
        console.log("3 pago")
        generarArray(1, cuotaTresPagos);
    }
})

cuota6.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //reconoce cuando se apreta "Enter"
        let cuotaSeisPagos = e.target.value;
        console.log("6 pago")
        generarArray(2, cuotaSeisPagos);
    }
});

cuota9.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //reconoce cuando se apreta "Enter"
        let cuotaNuevePagos = e.target.value;
        console.log("9 pago")
        generarArray(3, cuotaNuevePagos);
    }
});

cuota12.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //reconoce cuando se apreta "Enter"
        let cuotaDocePagos = e.target.value;
        console.log("12 pago")
        generarArray(4, cuotaDocePagos);
    }
});


//AL INGRESAR EL MONTO
pagarMonto.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //reconoce cuando se apreta "Enter"
        pago = e.target.value;
        console.log("Monto a Pagar")
        //GENERO EL PARRAFO Y LE DOY ESTILO
        let parrafo0 = document.createElement("p");
        parrafo0.innerHTML ="Su importe es de: $"+pago;
        parrafo0.style.color = "violet";
        parrafo0.style.fontSize = "12px";
        
        //IMPACTOEN EL HTML
        mensajeMonto.appendChild(parrafo0);
        //MUESTRO EL MEDIO DE PAGO
        seccionMedioPago.style.display = "block";
        apagarMedioPago = 1;
    }
});

quote1.addEventListener("click", function(e){
    console.log("Paga en 1 cuota")
    mensajeCredito(1);
})

quote3.addEventListener("click", function(e){
    console.log("Paga en 3 cuota")
    mensajeCredito(3);
})

quote6.addEventListener("click", function(e){
    console.log("Paga en 6 cuota")
    mensajeCredito(6);
})

quote9.addEventListener("click", function(e){
    console.log("Paga en 9 cuota")
    mensajeCredito(9);
})

quote12.addEventListener("click", function(e){
    console.log("Paga en 12 cuota")
    mensajeCredito(12);
})


//AL SELECCIONAR EFECTIVO
efectivo.addEventListener("click", function(e){
    console.log("Paga en Efectivo")
    efectivo.style.display = "none";
    debito.style.display = "none";
    mP.style.display = "none";
    mostrarCuotasTarjeta.style.display = "none";

    mensajeNoCredito(0);
})

//AL SELECCIONAR DEBITO, IDEM
debito.addEventListener("click", function(e){
    console.log("Paga con Debito")
    console.log("Paga en Efectivo")
    efectivo.style.display = "none";
    debito.style.display = "none";
    mP.style.display = "none";
    mostrarCuotasTarjeta.style.display = "none";
    mensajeNoCredito(1);
})

//AL SELECCIONAR MERCADO PAGO, IDEM
mP.addEventListener("click", function(e){
    console.log("Paga con Mercado Pago")
    console.log("Paga en Efectivo")
    efectivo.style.display = "none";
    debito.style.display = "none";
    mP.style.display = "none";
    mostrarCuotasTarjeta.style.display = "none";
    mensajeNoCredito(2);
})


mostrarCuotasTarjeta.addEventListener("click", function(e){
    seccionPagarTarjeta.style.display = "block";
    console.log("Paga en Efectivo")
    efectivo.style.display = "none";
    debito.style.display = "none";
    mP.style.display = "none";
    mostrarCuotasTarjeta.style.display = "none";
    apagarTarjeta = 1;
})


function mensajeNoCredito(modo){
    //GENERO LOS 2 PARRAGOS
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    let parrafo3 = document.createElement("p");
    parrafo1.style.fontSize = "12px";
    parrafo2.style.fontSize = "12px";
    parrafo3.style.fontSize = "12px";

    if (modo == 0){
        parrafo1.innerHTML ="Por pagar en efectivo, tiene un descuento del %" +medioPagoEfeDebMp[modo][0];
        parrafo2.innerHTML ="Siendo el descuento: $"+pago*medioPagoEfeDebMp[modo][1];
        parrafo3.innerHTML ="Su importe es: $"+pago*medioPagoEfeDebMp[modo][2];

        //IMPACTO LOS PARRAFOS EN EL HTML
        mensajeEfectivo.appendChild(parrafo1);
        mensajeEfectivo.appendChild(parrafo2);
        mensajeEfectivo.appendChild(parrafo3);
    }
    if (modo == 1){
        parrafo1.innerHTML ="Por pagar con débito, tiene un incremento del %"+medioPagoEfeDebMp[modo][0];
        parrafo2.innerHTML ="Siendo el interes: $"+pago*medioPagoEfeDebMp[modo][1];
        parrafo3.innerHTML ="Su importe es: $"+pago*medioPagoEfeDebMp[modo][2];
        //IMPACTO LOS PARRAFOS EN EL HTML
        mensajeDebito.appendChild(parrafo1);
        mensajeDebito.appendChild(parrafo2);
        mensajeDebito.appendChild(parrafo3);
        }
    if (modo == 2){
        parrafo1.innerHTML ="Por pagar com Mercado Pago, tiene un incremento del %"+medioPagoEfeDebMp[modo][0];
        parrafo2.innerHTML ="Siendo el interes: $"+pago*medioPagoEfeDebMp[modo][1];
        parrafo3.innerHTML ="Su importe es: $"+pago*medioPagoEfeDebMp[modo][2];    
        //IMPACTO LOS PARRAFOS EN EL HTML
        mensajeMp.appendChild(parrafo1);
        mensajeMp.appendChild(parrafo2);
        mensajeMp.appendChild(parrafo3);
    }
    seccionPagar.style.display = "block";

}

function mensajeCredito(cuota){
    //GENERO 3 PARRAFOS
    let parrafo4 = document.createElement("p");
    let parrafo5 = document.createElement("p");
    let parrafo6 = document.createElement("p");
    parrafo4.style.fontSize = "12px";
    parrafo5.style.fontSize = "12px";
    parrafo6.style.fontSize = "12px";

    if (cuota == 1){
        parrafo4.innerHTML ="El pago con tarjeta en 1 cuota tiene un interes del %"+(cuotasTarjetaCredito[0][0]);
        parrafo5.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[0][1])*pago;
        parrafo6.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[0][2])*pago)
    }
    if (cuota == 3){
        parrafo4.innerHTML ="El pago con tarjeta en 3 cuotas tiene un interes del %"+(cuotasTarjetaCredito[1][0]);
        parrafo5.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[1][1])*pago;
        parrafo6.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[1][2])*pago)
    }
    if (cuota == 6){
        parrafo4.innerHTML ="El pago con tarjeta en 6 cuotas tiene un interes del %"+(cuotasTarjetaCredito[2][0]);
        parrafo5.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[2][1])*pago;
        parrafo6.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[2][2])*pago)
    }
    if (cuota == 9){
        parrafo4.innerHTML ="El pago con tarjeta en 9 cuotas tiene un interes del %"+(cuotasTarjetaCredito[3][0]);
        parrafo5.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[3][1])*pago;
        parrafo6.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[3][2])*pago)
    }
    if (cuota == 12){
        parrafo4.innerHTML ="El pago con tarjeta en 12 cuotas tiene un interes del %"+(cuotasTarjetaCredito[4][0]);
        parrafo5.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[4][1])*pago;
        parrafo6.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[4][2])*pago)
    }

    //IMPACTO EN EL HTML
    mensajeCuotas.appendChild(parrafo4);
    mensajeCuotas.appendChild(parrafo5);
    mensajeCuotas.appendChild(parrafo6);

    seccionPagar.style.display = "block";

}