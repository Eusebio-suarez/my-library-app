import { Ibook } from './models/biblioteca'
import { book } from './models/biblioteca'
import { books } from './models/biblioteca'

let menu="Menú:\n\n";
    menu+="1. Agregar un libro\n"
    menu+="2. Quitar el libro de encima de la pila\n";
    menu+="3. Mostrar la pila actual de libros\n";
    menu+="4. listar libros\n"
    menu+="Seleccione una opción (1-4):\n";

let menulistar="listar libros\n\n"
    menulistar+="1.listar por titulo,autor,editorial,\n"
    menulistar+="2.listar por titulo,autor,genero,\n"
    menulistar+="3.listar por titulo,precio,formato,\n"
    menulistar+="4.listar por titulo,estado,precio,\n"
    menulistar+="5.listar por titulo,ubicacion,formato,\n"
    menulistar+="6.listar por titulo,formato,fecha_publicacion,\n"
    menulistar+="7.listar por titulo,formato,precio,\n"
    menulistar+="8.listar por titulo,ubicacion,isbn,\n"
    menulistar+="9.listar por titulo,ubicacion,idioma,\n"
    menulistar+="10.listar por titulo,autor,descripcion,\n"
    menulistar+="11.listar por titulo,ubicacion,isbn,\n" 
    menulistar+="12.listar libros con descuento\n"  
    menulistar+="13.listar libros por titulo, Autor, Editorial, Precio y descuento\n"
    menulistar+="Seleccione una opción (1-13):\n";


let libroeliminado
let opcion;
while (opcion !== "si") {
    opcion = prompt(menu);
    switch (opcion) {
        case "1":
            let titulo = prompt("Ingrese el título del libro:");
            let autor = prompt("Ingrese el autor del libro:");
            let genero = prompt("ingrese el genero del libro")
            let idioma = prompt("ingrese el idioma del libro")
            let precio = prompt("ingrese el precio del libro")
            let formato = prompt("ingrese el formato del libro")
            let isbn = prompt("ingrese el numero de isbn del libro")
            let descripcion = prompt("ingrese el idioma del libro")
            let estado = prompt("ingrese el estado del libro")
            let ubicacion = prompt("ingrese la ubicacion del libro")
            let fecha_publicacion = prompt("ingrese el año de publicacion del libro")
            let editorial = prompt("ingrese la editorial del libro")
            let paginas = prompt("ingrese el numero de paginas del libro")
            let dimensiones = prompt("ingrese las dimenciones del libro")
            let peso = prompt("ingrese el peso del libro")

            let nuevoLibro = {titulo: titulo, autor: autor, genero: genero, idioma: idioma, precio: parseInt(precio),
              formato: formato, isbn: isbn, descripcion: descripcion, estado: estado, ubicacion: ubicacion,
              fecha_publicacion: fecha_publicacion, editorial: editorial, paginas: parseInt(paginas),
              dimensiones: dimensiones, peso: peso};
            agregarLibroALaPila(nuevoLibro);
            console.log("Libro agregado a la pila:",nuevoLibro);
            opcion=prompt("desea salir? escriba si/no")
            break;
        case "2":
            libroeliminado=libros.pop()
            console.log("Libro eliminado de la pila:",libroeliminado);
            opcion=prompt("desea salir? escriba si/no")
            break;
        case "3":
            console.log(libros)
            opcion=prompt("desea salir? escriba si/no")
            break;
        case "4":
            let opcionlistar=prompt(menulistar)
            switch (opcionlistar){
                case "1":
                console.table(listaLibros)
                opcion=prompt("desea salir? escriba si/no")
                    break
                case "2":
                console.table(listaLibros1)
                opcion=prompt("desea salir? escriba si/no")
                    break  
                case "3":
                console.table(listaLibros2)
                opcion=prompt("desea salir? escriba si/no")
                    break  
                case "4":
                console.table(listaLibros3)
                opcion=prompt("desea salir? escriba si/no")
                    break
                case "5":
                console.table(listaLibros4)
                opcion=prompt("desea salir? escriba si/no")
                    break
                }
            break 
        }
    }