import { Ibook } from './models/libros'
import { book } from './models/libros'
import { books } from './models/libros'

const listaLibros = books.map(book=>{
    return{
      titulo:book.titulo,
      autor:book.autor,
      editorial:book.editorial,
      precio:book.precio
    }
  })
const listaLibros1 = books.map(book=>{
    return{
      titulo:book.titulo,
      autor:book.autor,
      genero:book.genero,
    }
  })
  const listabooks2 = books.map(book=>{
    return{
      titulo:book.titulo,
      precio:book.precio,
      formato:book.formato
    }
  })
  const listaLibros3 = books.map(book=>{
    return{
      titulo:book.titulo,
      estado:book.estado,
      precio:book.precio
    }
  })
  const listabooks4 = books.map(book=>{
    return{
      titulo:book.titulo,
      ubicacion:book.ubicacion,
      formato:book.formato
    }
  })
  const listabooks5 = books.map(book=>{
    return{
      titulo:book.titulo,
      formato:book.formato,
      fecha_publicacion:book.fecha_publicacion
    }
  })
  