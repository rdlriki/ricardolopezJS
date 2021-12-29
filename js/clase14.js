/*INICIALIZO VARIABLES*/
let cuotas; 
let apagarMedioPago = 0;
let apagarTarjeta = 0;
let pago = 0;

$(document).ready(function(){

    /*************DETECTO BOTONES************************/

    //BOTON INGRESAR Y MODIFICAR CUOTAS
    $("#modificarCuotas").click(function(e){
        //EVENTO CLIC EN BOTON INGRESAR/MODIFICADOR CUOTAS

        console.log(cuotasTarjetaCredito);
        $("#seccionIngresarCuotas").toggle(1000);
    })

    $("#modificarMedioPagoEfeDebMp").click(function(e){
        //EVENTO CLIC EN BOTON INGRESAR/MODIFICADOR EFECTIVO/DEBITO/MP
        console.log(medioPagoEfeDebMp);
        $("#seccionIngresarMedioPagoEfeDebMp").toggle(1000);
    })

    //BOTON ACEPTAR SECCION INGRESAR/MODIFICAR CUOTAS
    $("#cuotasIngresadas").click(function(e){
        /*CUANDO SE CARGAN LOS INTERESES DE LAS CUOTAS, SE GENERA EL ARRAY Y SE GUARDA LOCAL*/
        console.log(cuotasTarjetaCredito);
        let cuotasTarjetaCreditoJSON = JSON.stringify ( cuotasTarjetaCredito );
        localStorage.setItem( "cuotasTarjetaCreditoJSON" , cuotasTarjetaCreditoJSON);
    
        console.log(cuotasTarjetaCreditoJSON);
    
        $("#seccionIngresarCuotas").hide();
        {location.reload(true);}

    })

    $("#medioPagoIngresado").click(function(e){
        /*CUANDO SE CARGAN EL DESC./INTERES EFECTIVO/DEBITO/MP, SE GENERA EL ARRAY Y SE GUARDA LOCAL*/
        console.log(medioPagoEfeDebMp);
        let medioPagoEfeDebMpJSON = JSON.stringify ( medioPagoEfeDebMp );
        localStorage.setItem( "medioPagoEfeDebMpJSON" , medioPagoEfeDebMpJSON);
    
        console.log(medioPagoEfeDebMpJSON);
        $("#seccionIngresarMedioPagoEfeDebMp").hide();//MUESTRO BOTON MODIFICAR
        {location.reload(true);}

    })

    //BOTON PAGAR
    $("#pagar").click(function () {

        //CARGO LA URL DE HARRY POTTER
        let urlHP = "http://hp-api.herokuapp.com/api/characters/students"

        //TRAIGO TODOS LOS DATOS DE LA PAGINA DE HARRY POTTER
        $.get(urlHP, function (datos) {

            //RECORRO LOS DATOS
            for (let personajes of datos) {
                //CUANDO ENCUENTRO HARRY POTTER, CARGO EL NOMBRE Y LA FOTO Y EL MENSAJE
                if (personajes.name === "Harry Potter") {
                    $("#mensajeGracias").fadeIn(400).append(`<div>
                                                        <h3> ${ personajes.name } </h3>
                                                        <h4> y nosotros le agradecemos su compra </h4>
                                                        <img src="${personajes.image}"></img>
                                                        <p>(mira como te mira ${ personajes.name })</p>
                                                </div>
                                                        `).delay(5000);
                

                }
                
            }
        })
        //HAGO APARECER EL BORON DE REINICIAR
        $("#seccionReiniciar").fadeIn(5000);
    })

    //BOTON REINICIAR
    $("#reiniciar").click(function(e){
        /////******REINICIA LA OPERACION

        {location.reload(true);}

    })


    //BOTON DE EFECTIVO / DEBITO / MERCADO PAGO / TARJETA DE CREDITO
    $("#efectivo").click(function(e){
        //AL SELECCIONAR EFECTIVO
        console.log("Paga en Efectivo")
        $("#efectivo").fadeOut(500);
        $("#debito").fadeOut(500);
        $("#mP").fadeOut(500);
        $("#botonCuotas").fadeOut(500);
    
        mensajeNoCredito(0);
    })

    $("#debito").click(function(e){
        //AL SELECCIONAR DEBITO, IDEM
        console.log("Paga con Debito")
        console.log("Paga en Efectivo")
        $("#efectivo").fadeOut(500);
        $("#debito").fadeOut(500);
        $("#mP").fadeOut(500);
        $("#botonCuotas").fadeOut(500);
    
        mensajeNoCredito(1);
    })


    $("#mP").click(function(e){
        //AL SELECCIONAR MERCADO PAGO, IDEM
        console.log("Paga con Mercado Pago")
        console.log("Paga en Efectivo")
        $("#efectivo").fadeOut(500);
        $("#debito").fadeOut(500);
        $("#mP").fadeOut(500);
        $("#botonCuotas").fadeOut(500);
    
        mensajeNoCredito(2);
    })

    $("#botonCuotas").click(function(e){
        $("#seccionPagarTarjeta").fadeIn(500);
    
        console.log("Paga en Efectivo")
        $("#efectivo").fadeOut(500);
        $("#debito").fadeOut(500);
        $("#mP").fadeOut(500);
        $("#botonCuotas").fadeOut(500);
    
        apagarTarjeta = 1;
    })

})

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

/*************DETECTO EL MONTO A PAGAR************************/
//EN PAGO SE GUARDA EL MONTO A PAGAR
let pagarMonto = document.getElementById("monto");

/*PARA RECONOCER CUANDO SE INGRESA EFCTIVO / DEBITO / MERCADO PAGO*/
let elijeEfectivo = document.getElementById("pagoEfectivo");
let elijeDebito = document.getElementById("pagoDebito");
let elijeMp = document.getElementById("pagoMp");

/*INICIALIZO LA VARIABLE JSON PARA RECUPERAR EL ARREGLO INTERESES TARJETA CREDITO*/
let cuotasInicialJSON = localStorage.getItem( "cuotasTarjetaCreditoJSON");
let cuotasInicialParse = JSON.parse( cuotasInicialJSON);

/*INICIALIZO LA VARIABLE JSON PARA RECUPERAR EL ARREGLO EFECTIVO DEBITO MP*/
let medioPagoInicialJSON = localStorage.getItem( "medioPagoEfeDebMpJSON");
let medioPagoInicialParse = JSON.parse( medioPagoInicialJSON);



/*CONDICION QUE COMPRUEBA SI EL ARREGLO ESTÁ ALMACENADO O NO */
/*SI EL ARREGLO NO ESTA CREADO */
if (cuotasInicialParse==null){
    $("#mensajeInicioTartjeta").show();
    /*CREO EL ARREGLO AQUI GLOBAL Y LO INICIALIZO EN 0*/
    var cuotasTarjetaCredito = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
    $("#seccionModificarCuotas").hide();//OCUTLO EL BOTON MODIFICAR

} else {
    /*SI EL ARREGLO ESTA CREADO, LO RECUPERO*/
    $("#mensajeInicioTartjeta").hide(); //OCULTO BOTON INGRESAR
    $("#seccionModificarCuotas").show(); //MUESTRO BOTON MODIFICAR
    $("#seccionIngresarCuotas").hide(); //OCULTO BOTON INGRESAR 

    let enJSON = localStorage.getItem( "cuotasTarjetaCreditoJSON"); //LEO ARREGLO ALMACENADO EN MEMORIA
    //LA VARIABLE ES VAR YA QUE LA INICIALIZO AQUI Y PASA A SER GLOBAL
    var cuotasTarjetaCredito = JSON.parse( enJSON); //CONVIERTO EL DATO EN JSON A ARREGLO
    
    console.log( cuotasTarjetaCredito ); //IMPRIMO PARA VER SI LO RECUPERO BIEN
}

if (medioPagoInicialParse==null){
    $("#mensajeInicioMedioPago").show(); //OCULTO BOTON INGRESAR

    /*CREO EL ARREGLO AQUI GLOBAL Y LO INICIALIZO EN 0*/
    var medioPagoEfeDebMp = [[0,0,0],[0,0,0],[0,0,0]];
    $("#seccionModificarMedioPagoEfeDebMp").hide(); //OCUTLO EL BOTON MODIFICAR
} else {
    /*SI EL ARREGLO ESTA CREADO, LO RECUPERO*/
    $("#mensajeInicioMedioPago").hide(); //OCULTO BOTON INGRESAR
    $("#seccionModificarMedioPagoEfeDebMp").show(); //MUESTRO BOTON MODIFICAR
    $("#seccionIngresarMedioPagoEfeDebMp").hide(); //OCULTO BOTON INGRESAR 

    let enJSON = localStorage.getItem( "medioPagoEfeDebMpJSON"); //LEO ARREGLO ALMACENADO EN MEMORIA
    //LA VARIABLE ES VAR YA QUE LA INICIALIZO AQUI Y PASA A SER GLOBAL
    var medioPagoEfeDebMp = JSON.parse( enJSON); //CONVIERTO EL DATO EN JSON A ARREGLO
    
    console.log( medioPagoEfeDebMp ); //IMPRIMO PARA VER SI LO RECUPERO BIEN
}


/*CONDICIONAL PARA OCULTAR / MOSTRAR SECCION DE SELECCION EL MEDIO DE PAGO */
if (apagarMedioPago == 0){
    $("#seccionMedioPago").hide();
    $("#seccionPagar").hide();
    $("#seccionReiniciar").hide();
    $("#seccionPagarTarjeta").hide();
    
}
if (apagarTarjeta == 0){
    $("#seccionMedioPago").hide();
    $("#seccionPagarTarjeta").hide();
    $("#seccionPagar").hide();
}




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
elijeEfectivo.addEventListener("keypress", function (e) {
    if (e.key  === "Enter") {  //reconoce cuando se apreta "Enter"
        let pagoEnEfectivo = e.target.value;
        console.log("Efectivo")
        generarArrayMedioPago(0, pagoEnEfectivo);
    }
})

elijeDebito.addEventListener("keypress", function (e) {
    if (e.key  === "Enter") {  //reconoce cuando se apreta "Enter"
        let cuotaTresPagos = e.target.value;
        console.log("Debito")
        generarArrayMedioPago(1, cuotaTresPagos);
    }
})

elijeMp.addEventListener("keypress", function (e) {
    if (e.key  === "Enter") {  //reconoce cuando se apreta "Enter"
        let cuotaSeisPagos = e.target.value;
        console.log("Mercado Pago")
        generarArrayMedioPago(2, cuotaSeisPagos);
    }
});

//AL INGRESAR LAS CUOTAS
cuota1.addEventListener("keypress", function (e) {
    if (e.key  === "Enter") {  //reconoce cuando se apreta "Enter"
        let cuotaUnPagos = e.target.value;
        console.log("1 pago")
        generarArray(0, cuotaUnPagos);
    }
})

cuota3.addEventListener("keypress", function (e) {
    if (e.key  === "Enter") {  //reconoce cuando se apreta "Enter"
        let cuotaTresPagos = e.target.value;
        console.log("3 pago")
        generarArray(1, cuotaTresPagos);
    }
})

cuota6.addEventListener("keypress", function (e) {
    if (e.key  === "Enter") {  //reconoce cuando se apreta "Enter"
        let cuotaSeisPagos = e.target.value;
        console.log("6 pago")
        generarArray(2, cuotaSeisPagos);
    }
});

cuota9.addEventListener("keypress", function (e) {
    if (e.key  === "Enter") {  //reconoce cuando se apreta "Enter"
        let cuotaNuevePagos = e.target.value;
        console.log("9 pago")
        generarArray(3, cuotaNuevePagos);
    }
});

cuota12.addEventListener("keypress", function (e) {
    if (e.key  === "Enter") {  //reconoce cuando se apreta "Enter"
        let cuotaDocePagos = e.target.value;
        console.log("12 pago")
        generarArray(4, cuotaDocePagos);
    }
});


//AL INGRESAR EL MONTO
pagarMonto.addEventListener("keypress", function (e) {
    if (e.key  === "Enter") {  //reconoce cuando se apreta "Enter"
        pago = e.target.value;
        console.log("Monto a Pagar")
        //GENERO EL PARRAFO Y LE DOY ESTILO
        let parrafo0 = document.createElement("p");
        parrafo0.innerHTML ="Su importe es de: $"+pago;


        //IMPACTOEN EL HTML
        $("#mensajeMonto").append(parrafo0).delay(1000);
        $("#mensajeMonto").css({ "color": "violet",
                                "font-size": "12px",
                                "font-weight": "bold"});
        //MUESTRO EL MEDIO DE PAGO
        $("#seccionMedioPago").fadeIn(500);

        apagarMedioPago = 1;
    }
});

quote1.addEventListener("click", function(e){
    console.log("Paga en 1 cuota")
    mensajeCredito(1);
    $("#unaCuotas").fadeOut(500);
    $("#tresCuotas").fadeOut(500);
    $("#seisCuotas").fadeOut(500);
    $("#nueveCuotas").fadeOut(500);
    $("#doceCuotas").fadeOut(500);
})

quote3.addEventListener("click", function(e){
    console.log("Paga en 3 cuota")
    mensajeCredito(3);
    $("#unaCuotas").fadeOut(500);
    $("#tresCuotas").fadeOut(500);
    $("#seisCuotas").fadeOut(500);
    $("#nueveCuotas").fadeOut(500);
    $("#doceCuotas").fadeOut(500);
})

quote6.addEventListener("click", function(e){
    console.log("Paga en 6 cuota")
    mensajeCredito(6);
    $("#unaCuotas").fadeOut(500);
    $("#tresCuotas").fadeOut(500);
    $("#seisCuotas").fadeOut(500);
    $("#nueveCuotas").fadeOut(500);
    $("#doceCuotas").fadeOut(500);
})

quote9.addEventListener("click", function(e){
    console.log("Paga en 9 cuota")
    mensajeCredito(9);
    $("#unaCuotas").fadeOut(500);
    $("#tresCuotas").fadeOut(500);
    $("#seisCuotas").fadeOut(500);
    $("#nueveCuotas").fadeOut(500);
    $("#doceCuotas").fadeOut(500);
})

quote12.addEventListener("click", function(e){
    console.log("Paga en 12 cuota")
    mensajeCredito(12);
    $("#unaCuotas").fadeOut(500);
    $("#tresCuotas").fadeOut(500);
    $("#seisCuotas").fadeOut(500);
    $("#nueveCuotas").fadeOut(500);
    $("#doceCuotas").fadeOut(500);
})



function mensajeNoCredito(modo){
    //GENERO LOS 2 PARRAGOS
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    let parrafo3 = document.createElement("p");

    if (modo == 0){
        parrafo1.innerHTML ="Por pagar en efectivo, tiene un descuento del %" +medioPagoEfeDebMp[modo][0];
        parrafo2.innerHTML ="Siendo el descuento: $"+pago*medioPagoEfeDebMp[modo][1];
        parrafo3.innerHTML ="Su importe es: $"+pago*medioPagoEfeDebMp[modo][2];

        //IMPACTO LOS PARRAFOS EN EL HTML
        $("#mensajeEfectivo").append(parrafo1);
        $("#mensajeEfectivo").append(parrafo2);
        $("#mensajeEfectivo").append(parrafo3);
        $("#mensajeEfectivo").css({"color": "white",
                                "font-size": "12px",
                                "font-style": "italic",
                                "font-weight": "bold"});
    }
    if (modo == 1){
        parrafo1.innerHTML ="Por pagar con débito, tiene un incremento del %"+medioPagoEfeDebMp[modo][0];
        parrafo2.innerHTML ="Siendo el interes: $"+pago*medioPagoEfeDebMp[modo][1];
        parrafo3.innerHTML ="Su importe es: $"+pago*medioPagoEfeDebMp[modo][2];
        //IMPACTO LOS PARRAFOS EN EL HTML
        $("#mensajeDebito").append(parrafo1);
        $("#mensajeDebito").append(parrafo2);
        $("#mensajeDebito").append(parrafo3);
        $("#mensajeDebito").css({   "color": "white",
                                    "font-size": "12px",
                                    "font-style": "italic",
                                    "font-weight": "bold"});
    }
    if (modo == 2){
        parrafo1.innerHTML ="Por pagar com Mercado Pago, tiene un incremento del %"+medioPagoEfeDebMp[modo][0];
        parrafo2.innerHTML ="Siendo el interes: $"+pago*medioPagoEfeDebMp[modo][1];
        parrafo3.innerHTML ="Su importe es: $"+pago*medioPagoEfeDebMp[modo][2];    
        //IMPACTO LOS PARRAFOS EN EL HTML
        $("#mensajeMp").append(parrafo1);
        $("#mensajeMp").append(parrafo2);
        $("#mensajeMp").append(parrafo3);
        $("#mensajeMp").css({   "color": "white",
                                "font-size": "12px",
                                "font-style": "italic",
                                "font-weight": "bold"});
    }
    $("#seccionPagar").show();

}

function mensajeCredito(cuota){
    //GENERO 3 PARRAFOS
    let parrafo4 = document.createElement("p");
    let parrafo5 = document.createElement("p");
    let parrafo6 = document.createElement("p");

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
    $("#mensajeCuotas").append(parrafo4);
    $("#mensajeCuotas").append(parrafo5);
    $("#mensajeCuotas").append(parrafo6);
    $("#mensajeCuotas").css({   "color": "white",
                                "font-size": "12px",
                                "font-style": "italic",
                                "font-weight": "bold"});
    

    $("#seccionPagar").show();
}