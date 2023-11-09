
import { IProducto } from "./interfacs/IProducto";

const productos: IProducto[] = [
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

console.log("\nUsando for in:");
for (let i = 0; i < 3; i++) {
  for (const index in productos) {
    const producto = productos[index];
    console.log("ID de Producto:", producto.idProducto, "Nombre:", producto.nombre, 
      "Descripción:", producto.descripcion, "Precio:", producto.precio, 
      "Categoría:", producto.categoria);
  }
  console.log("-----------------------------");
}

console.log("Usando forEach:");
for (let i = 0; i < 3; i++) {
  productos.forEach((producto) => {
    console.log("ID de Producto:", producto.idProducto, "Nombre:", producto.nombre, 
      "Descripción:", producto.descripcion, "Precio:", producto.precio, 
      "Categoría:", producto.categoria);
  });
  console.log("-----------------------------");
}

console.log("\nUsando for of:");
for (let i = 0; i < 3; i++) {
  for (const producto of productos) {
    console.log("ID de Producto:", producto.idProducto, "Nombre:", producto.nombre, 
      "Descripción:", producto.descripcion, "Precio:", producto.precio, 
      "Categoría:", producto.categoria);
  }
  console.log("-----------------------------");
}

