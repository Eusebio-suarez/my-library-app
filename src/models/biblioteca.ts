export interface Ibook{
  titulo: string, 
  autor: string ,
  genero: string,
  idioma: string ,
  precio: number ,
  formato: string,
  isbn: string,
  descripcion: string ,
  estado : string ,
  ubicacion : string ,
  fecha_publicacion : number, 
  editorial : string ,
  paginas : number ,
  dimenciones : string ,
  peso : string ,
  disponible : boolean,
}

 export class book implements Ibook{
  titulo: string;
  autor: string ;
  genero: string;
  idioma: string;
  precio: number;
  formato: string;
  isbn: string;
  descripcion: string;
  estado : string;
  ubicacion : string;
  fecha_publicacion : number; 
  editorial : string;
  paginas : number;
  dimenciones : string ;
  peso : string ;
  disponible : boolean


  constructor(  
    titulo: string,
    autor: string ,
    genero: string,
    idioma: string ,
    precio: number ,
    formato: string,
    isbn: string,
    descripcion: string ,
    estado : string ,
    ubicacion : string ,
    fecha_publicacion : number, 
    editorial : string ,
    paginas : number ,
    dimenciones : string ,
    peso : string ,
    disponible : boolean,

  )
    {
    this.titulo=titulo,
    this.autor=autor,
    this.genero=genero,
    this.idioma=idioma,
    this.precio=precio,
    this.formato=formato,
    this.isbn=isbn,
    this.descripcion=descripcion,
    this.estado=estado,
    this.ubicacion=ubicacion,
    this.fecha_publicacion=fecha_publicacion,
    this.editorial=editorial,
    this.paginas=paginas,
    this.dimenciones=dimenciones,
    this.peso=peso,
    this.disponible=disponible
  }
}
 
 export const books: book[] =[
  new book(
    titulo= "Cien años de soledad",
    autor="Gabriel García Márquez",
    genero= "Realismo mágico",
    idioma= "Español",
    precio= 20,
    formato="Tapa blanda",
    isbn="978-84-376-0494-6",
    decripcio="La saga familiar de los Buendía en Macondo, una obra maestra de la literatura latinoamericana.",
    estado= "Usado",
    ubicacion="Librería Páginas Perdidas",
    fecha_publicacion=1967,
    editorial= "Sudamericana",
    paginas=432,
    dimenciones="12 x 20 cm",
    peso= "0.8 kg",
    disponible = true
  ),
  new book(
    titulo= "1984",
    autor= "George Orwell",
    genero= "Distopía",
    idioma= "Inglés",
    precio= 50,
    formato= "Ebook",
    isbn="978-0451524935",
    decripcio= "Una visión sombría del futuro donde el Gran Hermano todo lo ve.",
    estado= "Como nuevo",
    ubicacion= "Tienda Digital",
    fecha_publicacion= 1949,
    editorial= "Sudamericana",
    paginas= 328,
    dimenciones= "Digital",
    peso="1 kg",
    disponible = true
  ),
  new book(
    titulo= "Orgullo y prejuicio",
    autor="Jane Austen",
    genero= "Romance",
    idioma= "Inglés",
    precio= 10,
    formato= "Tapa blanda",
    isbn= "978-1503290567",
    decripcio= "Una comedia romántica sobre la sociedad inglesa del siglo XIX.",
    estado= "Nuevo",
    ubicacion= "Librería Romántica",
    fecha_publicacion= 1813,
    editorial= "Sudamericana",
    paginas= 279,
    dimenciones= "13 x 20 cm",
    peso="0.6 kg",
    disponible = true
  )
]




