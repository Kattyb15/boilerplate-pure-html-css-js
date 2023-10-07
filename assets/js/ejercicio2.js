console.log("Entro ejercicio2.js");

let loading = document.getElementById("loading");
function saludar(texto, callback){
    //console.log("Entro a funcion saludar");
    const textoMayusculas =  texto.toUpperCase();
    setTimeout(()=>{
    callback("Hola: " + textoMayusculas);
    //loading.style.display = "none";
    },4000);
    //console.log(textoMayusculas);
}

function imprimir(parametro){
    console.log(parametro);
    console.log("Final");
}

saludar("Kathy", imprimir);


    //console.log("Entro despues de 4 segundos");
