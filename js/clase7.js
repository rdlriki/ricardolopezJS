function cargarVoto(){
    let dni = prompt("Ingrese su DNI");
    let voto = prompt("ingrese su voto: ");

    localStorage.setItem (dni,voto);
}

function resultado(){
    let votoA = 0;
    let votoB = 0;
    let votoNull = 0;
    
    for (let i = 0; i< localStorage.length ; i++){
        
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
/*
        console.log(clave);
        console.log(valor);
*/
        if (valor.toLocaleUpperCase() == "A"){
            votoA = votoA + 1;
        }
        else if (valor.toLocaleUpperCase() == "B" ){
            votoB = votoB + 1;
        }
        else if (valor.toLocaleUpperCase() == "" ){
            votoNull = votoNull + 1;
        }
    }
    if (votoA > votoB) {
        console.log ("Gano el A con " +votoA+ " votos");
        console.log ("El B tuvo: "+votoB+ " votos");
    }
    else if (votoB > votoA){
        console.log ("Gano el B con " +votoB);
        console.log ("El A tuvo: "+votoA+ " votos");
    }
    else {
        console.log ("empate con " +votoA);
    }
    console.log ("La cantidad de votos Nulos es: " +votoNull);
}

function limpiarStorage(){
    localStorage.clear();

    console.log ("Se borraron todos los datos almacenados")

}
