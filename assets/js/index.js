console.log("Entro index.js");

let inpuntTitulo = document.getElementById("inpuntTitulo");
let inpuntEstreno = document.getElementById("inpuntEstreno");
let inpuntGenero = document.getElementById("inpuntGenero");
let inpuntImagen = document.getElementById("inpuntImagen");
let inpuntSinopsis = document.getElementById("inpuntSinpsis");



const btnAgregar = document.getElementById('btnAgregar');
const btnBorrar = document.getElementById('btnBorrarTodo');

const divPeliculas = document.getElementById("divPeliculas");
const alertSinPeliculas = document.getElementById("alertSinPeliculas");


class Pelicula{
    constructor(titulo, estreno, genero, imagen, sinopsis){
        this.titulo = titulo;
        this.estreno = estreno;
        this.genero = genero;
        this.imagen = imagen;
        this.sinopsis = sinopsis;
    }
}

function guardarPelicula(){
    let titulo = inpuntTitulo.value;
    let estreno = inpuntEstreno.value;
    let genero = inpuntGenero.value;
    let imagen = inpuntImagen.value;
    let sinopsis = inpuntSinopsis.value;
    let Pelicula = new Pelicula(
        titulo,
        estreno,
        genero,
        imagen,
        sinopsis
    );
    console.log(Pelicula);
    console.log("Entro función guardar pelicular");
}

function borrarTodo(){
    console.log("Entro a borrar todo");
}


btnAgregar.addEventListener("click", guardarPelicula);
btnBorrarTodo.addEventListener("click", borrarTodo);