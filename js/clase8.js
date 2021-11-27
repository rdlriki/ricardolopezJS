/*INICIALIZO */

let pago = document.getElementById("monto");
let cuotas;
let cuotasTarjetaCredito = [ [10,0.1,1.1], [20,0.2,1.2],[30,0.3,1.3],[40,0.4,1.4],[50,0.5,1.5] ]


//FUNCION PARA CUANDO SE PAGA EN EFECTIVO / DEBITO / MP
function mensajeNoCredito(modo){
    //GENERO LOS 2 PARRAGOS
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    if (modo == 1){
        parrafo1.innerHTML ="Por pagar en efectivo, tiene un descuento del 10%: $"+pago.value*0.1;
        parrafo2.innerHTML ="Su importe es: $"+pago.value*0.9;
    }
    if (modo == 2){
        parrafo1.innerHTML ="Por pagar con débito, tiene un incremento del 5%: $"+pago.value*0.05;
        parrafo2.innerHTML ="Su importe es: $"+pago.value*1.05;
    }
    if (modo == 3){
        parrafo1.innerHTML ="Por pagar com Mercado Pago, tiene un incremento del 15%: $"+pago.value*0.15;
        parrafo2.innerHTML ="Su importe es: $"+pago.value*1.15;
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
        parrafo2.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[0][1])*pago.value;
        parrafo3.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[0][2])*pago.value)
    }
    if (cuota == 3){
        parrafo1.innerHTML ="El pago con tarjeta en 3 cuotas tiene un interes del %"+(cuotasTarjetaCredito[1][0]);
        parrafo2.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[1][1])*pago.value;
        parrafo3.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[1][2])*pago.value)
    }
    if (cuota == 6){
        parrafo1.innerHTML ="El pago con tarjeta en 6 cuotas tiene un interes del %"+(cuotasTarjetaCredito[2][0]);
        parrafo2.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[2][1])*pago.value;
        parrafo3.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[2][2])*pago.value)
    }
    if (cuota == 9){
        parrafo1.innerHTML ="El pago con tarjeta en 9 cuotas tiene un interes del %"+(cuotasTarjetaCredito[3][0]);
        parrafo2.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[3][1])*pago.value;
        parrafo3.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[3][2])*pago.value)
    }
    if (cuota == 12){
        parrafo1.innerHTML ="El pago con tarjeta en 12 cuotas tiene un interes del %"+(cuotasTarjetaCredito[4][0]);
        parrafo2.innerHTML ="El recargo es de $"+(cuotasTarjetaCredito[4][1])*pago.value;
        parrafo3.innerHTML ="El monto a pagar es: $"+((cuotasTarjetaCredito[4][2])*pago.value)
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

//CUANDO SE INGRESA EL MONTO, SE INICIA ESTA FUNCION
function monto(){
    //LEO EL MONTO INGRESADO EN INPUT
    pago = document.getElementById("monto");

    //GENERO EL PARRAFO Y LE DOY ESTILO
    let parrafo0 = document.createElement("p");
    parrafo0.innerHTML ="Su importe es de: $"+pago.value;
    parrafo0.style.color = "violet";
    parrafo0.style.fontSize = "12px";
    
    //IMPACTOEN EL HTML
    mensaje.appendChild(parrafo0);

    //INDICACION DE COMO SIGUE EL PROCEDIMIENTO
    alert("Seleccione el medio de pago (Efectivo/Debito/MP) o las cuotas con Tarjeta de Credito")    
}

//SI SE ELIJE EFECTIVO, SE EJECUTA ESTA FUNCION
function efectivo(){
    //SI NO TIENE IMPORTE, MENSAJE DE ALERTA
    if (pago.value==0){
        alert("Debe ingresar monto")
    }
    else {
        mensajeNoCredito(1);
        pago.value=0;
    }
}

//SI SE ELIJE DEBITO, IDEM
function debito(){
    //SI NO TIENE IMPORTE, MENSAJE DE ALERTA
    if (pago.value==0){
        alert("Debe ingresar monto")
    }
    else {
        mensajeNoCredito(2);
        pago.value=0;
    }
}

//SI SE ELIJE MERCADO PAGO, IDEM
function mP(){
    //SI NO TIENE IMPORTE, MENSAJE DE ALERTA
    if (pago.value==0){
        alert("Debe ingresar monto")
    }
    else {
        mensajeNoCredito(3);
        pago.value=0;
    }
}

//SI SE INGRESAN LAS CUOTAS, AQUI LO CALCULOS
function calculoCuota(){

    //SI NO TIENE IMPORTE, MENSAJE DE ALERTA
    if (pago.value==0){
        alert("Debe ingresar monto")
    }
    else {
        //LEO LA CUOTA INGRESADA
        cuotas= document.getElementById("cuota");

        //CHEQUEO QUE HAYA INGRESADO UNA CUOTA VALIDA
        if (cuotas.value == 1 || cuotas.value == 3 || cuotas.value == 6 || cuotas.value == 9 || cuotas.value == 12) {
            if (cuotas.value == 1){
                mensajeCredito(1);
                pago.value=0;
                cuotas.value=0;
            }
            if (cuotas.value == 3){
                mensajeCredito(3);
                pago.value=0;
                cuotas.value=0;
            }
            if (cuotas.value == 6){
                mensajeCredito(6);
                pago.value=0;
                cuotas.value=0;
            }
            if (cuotas.value == 9){
                mensajeCredito(9);
                pago.value=0;
                cuotas.value=0;
            }
            if (cuotas.value == 12){
                mensajeCredito(12);
                pago.value=0;
                cuotas.value=0;
            }
        } else {
            //SI INGRESO MAL LA CUOTA, INDICA QUE REINGRESE VALOR VALIDO
            alert("Por favor, Ingrese la cantidad de cuotas: 1/3/6/9/12");
            cuotas.value=0;
        }
    }
}