const productos = [
  {
    idProducto: 1,
    nombre: 'Laptop HP Envy x360',
    descripcion: 'Portátil 2 en 1 con pantalla táctil',
    precio: 999.99,
    categoria: 'Electrónica',
  },
  {
    idProducto: 2,
    nombre: 'Zapatillas Nike Air Max',
    descripcion: 'Zapatillas deportivas para correr',
    precio: 129.99,
    categoria: 'Calzado',
  },
  {
    idProducto: 3,
    nombre: 'Calentador deportivo',
    descripcion: 'Calentador deportivas para correr',
    precio: 110.99,
    categoria: 'Pantalón',
  },
  {
    idProducto: 4,
    nombre: 'Mouse Razer Deathadder V2',
    descripcion: 'Raton para laptos o pc',
    precio: 80.99,
    categoria: 'Perifericos',
  },
  {
    idProducto: 5,
    nombre: 'Realme 6 PRO',
    descripcion: 'Telefono movil',
    precio: 80.99,
    categoria: 'Celular',
  }

];

function obtenerProductoPorID(id, callback) {
  const productoEncontrado = productos.find(producto => producto.idProducto === id);
  if (!productoEncontrado) {
    return callback("No se encontró el producto");
  }
  return callback(null, productoEncontrado);
}

obtenerProductoPorID(2, (error, producto) => {
  if (error) {
    console.log(error);
  }
  console.log(producto);
});
