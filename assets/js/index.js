let arreglo1 = [
    "Chilaquiles", 
    "Tacos", 
    "Tostadas", 
    "Flautas",
    "Enmoladas"
];


console.log(arreglo1[0], "-Posición 0");
console.log(arreglo1[1], "-Posición 1");
console.log(arreglo1[2], "-Posición 2");
console.log(arreglo1[3], "-Posición 3");
console.log(arreglo1[4], "-Posición 4");

//console.log("La comida del día es: " + arreglo1[3]);
console.log(`La comida del día es: ${arreglo1[3]}`);


arreglo1[4] ="Quesadilla";
console.log(arreglo1[4], "nueva posicion 4");
console.log("Mutación de arreglo", arreglo1);

//let nombreUsuario = prompt("Cual es tu nombre?");
//let apellidoUsuario = prompt("Cual es tu apellido?");

//console.log(`El nombre del usuario es: ${nombreUsuario} ${apellidoUsuario}`);

//arreglo1[5] = nombreUsuario +" "+ apellidoUsuario;
arreglo1[5] = "burrito";

console.log(arreglo1, "hay un nombre en lugar de comida");

console.log("El largo del arreglo es:", arreglo1.length);

//arreglo1.push("Sopa Tortilla");

//El ultimo fue burrito
//arreglo1.pop();
//El ultimo fue quesadilla
//arreglo1.pop();

//lo manda al principio del arreglo
//arreglo1.shift();
let largoarreglo = arreglo1.length;
let posicionMenosDos = largoarreglo -2;
console.log(arreglo1[posicionMenosDos]);

//arreglo1.splice(2,1);
//Primer parametro es el index(posicion) segundo es la cantidad de elemento
//arreglo1.splice(1,1);

arreglo1.splice(6,1, "Sopes");

console.log(arreglo1);