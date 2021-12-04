/*INICIALIZO VARIABLES*/
let cuotas; 
let apagarMedioPago = 0;
let apagarTarjeta = 0;
let flagIngresarCuota = 0;
let pago = 0;

/*INICIALIZO LA VARIABLE JSON PARA RECUPERAR EL ARREGLO*/
let inicioJSON = localStorage.getItem( "cuotasTarjetaCreditoJSON");
let inicioParse = JSON.parse( inicioJSON);

/*CONDICION QUE COMPRUEBA SI EL ARREGLO ESTÁ ALMACENADO O NO */
/*SI EL ARREGLO NO ESTA CREADO */
if (inicioParse==null){
    
    /*CREO EL ARREGLO AQUI GLOBAL Y LO INICIALIZO EN 0*/
    var cuotasTarjetaCredito = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
    seccionBotonModificar.style.display = "none"; //OCUTLO EL BOTON MODIFICAR
} else {
    /*SI EL ARREGLO ESTA CREADO, LO RECUPERO*/
    seccionBotonIngresar.style.display = "none"; //OCULTO BOTON INGRESAR 
    seccionBotonModificar.style.display = "block"; //MUESTRO BOTON MODIFICAR
    seccionIngresarCuotas.style.display = "none"; //OCULTO LA SECCION DE INGRESAR CUOTAS
    let enJSON = localStorage.getItem( "cuotasTarjetaCreditoJSON"); //LEO ARREGLO ALMACENADO EN MEMORIA
    //LA VARIABLE ES VAR YA QUE LA INICIALIZO AQUI Y PASA A SER GLOBAL
    var cuotasTarjetaCredito = JSON.parse( enJSON); //CONVIERTO EL DATO EN JSON A ARREGLO
    
    console.log( cuotasTarjetaCredito ); //IMPRIMO PARA VER SI LO RECUPERO BIEN
}

//SECCIONES MEDIO DE PAGO / PAGAR TARJETA
let seccionMedioPago = document.getElementById("seccionMedioPago");
let seccionPagarTarjeta = document.getElementById("seccionPagarTarjeta");

/*CONDICIONAL PARA OCULTAR / MOSTRAR SECCION DE SELECCION EL MEDIO DE PAGO */
if (apagarMedioPago == 0){
    seccionMedioPago.style.display = "none";
}
if (apagarTarjeta == 0){
    seccionPagarTarjeta.style.display = "none";
}


/*************DETECTO BOTONES************************/

//BOTON INGRESAR Y MODIFICAR CUOTAS
let ingresarCuotas = document.getElementById("ingresarCuotas");
ingresarCuotas = document.getElementById("modificarCuotas");

//BOTON ACEPTAR SECCION INGRESAR/MODIFICAR CUOTAS
let cuotasIngresadas = document.getElementById ("cuotasIngresadas");

//BOTON DE EFECTIVO
let efectivo = document.getElementById ("efectivo");
//BOTON DE DEBITO
let debito = document.getElementById ("debito");
//BOTON DE MERCADO PAGO
let mercadoPago = document.getElementById ("mP");
//BOTON TARJETA DE CREDITO
let mostrarCuotasTarjeta = document.getElementById("botonCuotas");
//BOTON REINICIAR
let reiniciarCalculo = document.getElementById ("reiniciar")


/*PARA RECONOCER CUANDO SE INGRESAN LAS CUOTAS*/
let cuota1 = document.getElementById("cuotaUno");
let cuota3 = document.getElementById("cuotaTres");
let cuota6 = document.getElementById("cuotaSeis");
let cuota9 = document.getElementById("cuotaNueve");
let cuota12 = document.getElementById("cuotaDoce");

/*************DETECTO EL MONTO A PAGAR************************/
//EN PAGO SE GUARDA EL MONTO A PAGAR
let pagarMonto = document.getElementById("monto");


/*************DETECTO LA CUOTA ELEGIDA************************/
//EN CUOTA SE GUARDA LA CUOTA A PAGAR
let quote = document.getElementById("cuota");


/*************DETECTO EVENTOS************************/
//EVENTO CLIC EN BOTON INGRESAR/MODIFICADOR CUOTAS
ingresarCuotas.addEventListener("click", function (e){
    console.log(cuotasTarjetaCredito);
    flagIngresarCuota = 1;
    seccionIngresarCuotas.style.display = "block";
})

cuotasIngresadas.addEventListener("click", function (e){
    flagIngresarCuota = 0;
    console.log(cuotasTarjetaCredito);
    let cuotasTarjetaCreditoJSON = JSON.stringify ( cuotasTarjetaCredito );
    localStorage.setItem( "cuotasTarjetaCreditoJSON" , cuotasTarjetaCreditoJSON);

    console.log(cuotasTarjetaCreditoJSON);

    seccionIngresarCuotas.style.display = "none";
    seccionBotonIngresar.style.display = "none"; //OCULTO BOTON INGRESAR 
    seccionBotonModificar.style.display = "block"; //MUESTRO BOTON MODIFICAR
    
})

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

//*****************DETECTA EVENTOS AL APRETAR ENTER******************** 

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
        mensaje.appendChild(parrafo0);
        //MUESTRO EL MEDIO DE PAGO
        seccionMedioPago.style.display = "block";
        apagarMedioPago = 1;
    }
});

quote.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //reconoce cuando se apreta "Enter"
        cuotas = e.target.value;
        console.log("Ingreso cuotas")

        //CHEQUEO QUE HAYA INGRESADO UNA CUOTA VALIDA
        if (cuotas == 1 || cuotas == 3 || cuotas == 6 || cuotas == 9 || cuotas == 12) {
            if (cuotas == 1){
                mensajeCredito(1);
                pago=0;
                cuotas=0;
            }
            if (cuotas == 3){
                mensajeCredito(3);
                pago=0;
                cuotas=0;
            }
            if (cuotas == 6){
                mensajeCredito(6);
                pago=0;
                cuotas=0;
            }
            if (cuotas == 9){
                mensajeCredito(9);
                pago=0;
                cuotas=0;
            }
            if (cuotas == 12){
                mensajeCredito(12);
                pago=0;
                cuotas=0;
            }
        } else {
            //SI INGRESO MAL LA CUOTA, INDICA QUE REINGRESE VALOR VALIDO
            alert("Por favor, Ingrese la cantidad de cuotas: 1/3/6/9/12");
            cuotas=0;
        }
    }
})



//AL SELECCIONAR EFECTIVO
efectivo.addEventListener("click", function(e){
    //SI NO TIENE IMPORTE, MENSAJE DE ALERTA
    if (pago==0){
        alert("Debe ingresar monto")
    }
    else {
        mensajeNoCredito(1);
        pago=0;
    }
})

//AL SELECCIONAR DEBITO, IDEM
debito.addEventListener("click", function(e){
    //SI NO TIENE IMPORTE, MENSAJE DE ALERTA
    if (pago==0){
        alert("Debe ingresar monto")
    }
    else {
        mensajeNoCredito(2);
        pago=0;
    }
})

//AL SELECCIONAR MERCADO PAGO, IDEM
mP.addEventListener("click", function(e){
    //SI NO TIENE IMPORTE, MENSAJE DE ALERTA
    if (pago==0){
        alert("Debe ingresar monto")
    }
    else {
        mensajeNoCredito(3);
        pago=0;
    }
})

mostrarCuotasTarjeta.addEventListener("click", function(e){
    seccionPagarTarjeta.style.display = "block";
    apagarTarjeta = 1;
})




//FUNCION PARA CUANDO SE PAGA EN EFECTIVO / DEBITO / MP
function mensajeNoCredito(modo){
    //GENERO LOS 2 PARRAGOS
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    if (modo == 1){
        parrafo1.innerHTML ="Por pagar en efectivo, tiene un descuento del 10%: $"+pago*0.1;
        parrafo2.innerHTML ="Su importe es: $"+pago*0.9;
    }
    if (modo == 2){
        parrafo1.innerHTML ="Por pagar con débito, tiene un incremento del 5%: $"+pago*0.05;
        parrafo2.innerHTML ="Su importe es: $"+pago*1.05;
    }
    if (modo == 3){
        parrafo1.innerHTML ="Por pagar com Mercado Pago, tiene un incremento del 15%: $"+pago*0.15;
        parrafo2.innerHTML ="Su importe es: $"+pago*1.15;
    }

    //LE DOY ESTILO A LOS PARRAFOS
    parrafo1.style.color = "red";
    parrafo1.style.fontSize = "14px";
    parrafo2.style.color = "red";
    parrafo2.style.fontSize = "14px";

    //IMPACTO LOS PARRAFOS EN EL HTML
    mensaje.appendChild(parrafo1);
    mensaje.appendChild(parrafo2);
}

function mensajeCredito(cuota){
    //GENERO 3 PARRAFOS
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    let parrafo3 = document.createElement("p");
    if (cuota == 1){
        parrafo1.innerHTML ="El pago con tarjeta en 1 cuota tiene un interes del %"+(cuotasTarjetaCredito[0][0]);
        parrafo2.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[0][1])*pago;
        parrafo3.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[0][2])*pago)
    }
    if (cuota == 3){
        parrafo1.innerHTML ="El pago con tarjeta en 3 cuotas tiene un interes del %"+(cuotasTarjetaCredito[1][0]);
        parrafo2.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[1][1])*pago;
        parrafo3.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[1][2])*pago)
    }
    if (cuota == 6){
        parrafo1.innerHTML ="El pago con tarjeta en 6 cuotas tiene un interes del %"+(cuotasTarjetaCredito[2][0]);
        parrafo2.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[2][1])*pago;
        parrafo3.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[2][2])*pago)
    }
    if (cuota == 9){
        parrafo1.innerHTML ="El pago con tarjeta en 9 cuotas tiene un interes del %"+(cuotasTarjetaCredito[3][0]);
        parrafo2.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[3][1])*pago;
        parrafo3.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[3][2])*pago)
    }
    if (cuota == 12){
        parrafo1.innerHTML ="El pago con tarjeta en 12 cuotas tiene un interes del %"+(cuotasTarjetaCredito[4][0]);
        parrafo2.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[4][1])*pago;
        parrafo3.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[4][2])*pago)
    }
    
    //LE DOY ESTILO A LOS 3 PARRAFOS
    parrafo1.style.color = "blue";
    parrafo1.style.fontSize = "14px";
    parrafo2.style.color = "blue";
    parrafo2.style.fontSize = "14px";
    parrafo3.style.color = "blue";
    parrafo3.style.fontSize = "14px";

    //IMPACTO EN EL HTML
    mensaje.appendChild(parrafo1);
    mensaje.appendChild(parrafo2);
    mensaje.appendChild(parrafo3);
}