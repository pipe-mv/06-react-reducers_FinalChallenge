export const TYPES = {
    CREATE_DATA: "CREATE_DATA",
    READ_ALL_DATA:"READ_ALL_DATA",
    // READ_ONE_DATA:"READ_ONE_DATA",
    UPDATE_DATA:"UPDATE_ONE_DATA",
    DELETE_DATA:"DELETE_DATA",
    NO_DATA:"NO_DATA",
}

//en este caso no se utilizo el "READ_ONE_DATA" ya que cuando se da click en el botón de editar
//este automaticamente trae el ID de todos estos elementos que se encuentran en memoria
// y por lo tanto no habria que hacer una nueva solicitud a una API, pero cuando se requiera
//hacer una nueva solicitud a la API si se requiere hacer un "READ_ONE_DATA" ya que por efectos
// de eficiencia de la aplicación solo se pide la solicitud del item en particular a la API
