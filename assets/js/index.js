console.log("Entro index.js");


function saludar(texto, callback){
    //console.log("Entro a funcion saludar");
    const textoMayusculas =  texto.toUpperCase();
    callback("Hola: " + textoMayusculas);
    //console.log(textoMayusculas);
}

function imprimir(parametro){
    console.log(parametro);
}

saludar("Kathy", imprimir);

//imprimir("Imprimir 1");
//imprimir("Imprimir 2");
//imprimir("Imprimir 3");