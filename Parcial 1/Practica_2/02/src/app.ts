// import { envs } from './config/plugins/envs.plugin'
import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();
// Como segundo paso se crea el producto, para esto se creo una funcion asincrona crearProducto
const crearCliente= async ()=>{
    const cliente = await prisma.cliente.create({
      data: {
        CI: 123456, // Asigna el CI (ID) del cliente
        nombre: "Jonathan",
        apellido: "Marin",
        telefono: "1234567890",
        correo: "jonathan@ejemplo.com",
        contrasena: "hola",
        tipoCliente: {
          connect: { idtipo: 1 }  // Conecta con el tipo de cliente correspondiente (cámbialo según sea necesario)
        },
          comentarios: {
            create: {
                idproducto: 1,
                comentario:"El producto esta perfecto"
            },
          },
        },
      });
    console.log(crearCliente);
}
const crearTipo= async ()=>{
      const tipocliente = await prisma.tipoCliente.create({
        data: {
            tipocliente: "usuario",
            descripcion: "usuario normal",
            clientes: {
              create: {
                CI: 123456, // Asigna el CI (ID) del cliente
                nombre: "Jonathan",
                apellido: "Marin",
                telefono: "1234567890",
                correo: "jonathan@ejemplo.com",
                contrasena: "hola",
              },
            },
          },
        });
      console.log(tipocliente);
}
const leerCliente= async ()=>{
  const cliente= await prisma.cliente.findMany({
      include:{
          comentarios:true
      }
      , where:{
          CI:123456
      }
  })
  console.log(cliente)
}
const leerTipo= async ()=>{
  const tipoCliente= await prisma.tipoCliente.findMany({
      include:{
          clientes:true
      }
      , where:{
          idtipo:1
      }
  })
  console.log(tipoCliente)
}
const actualizarCliente= async ()=>{
  const cliente= await prisma.cliente.update({
      data:{
          nombre:"Adonis"
      },
      where:{
          CI:123456
      }
  })
}

const actualizarTipo= async ()=>{
  const tipoCliente= await prisma.tipoCliente.update({
      data:{
          descripcion:"Administrador"
      },
      where:{
          idtipo:1
      }
  })
}

const eliminarComentario= async ()=>{
  const comentario= await prisma.comentarioProducto.delete({
      where:{
          idcomentario:1
      }
  })
}

const eliminarCliente= async ()=>{
  const cliente= await prisma.cliente.delete({
      where:{
          CI:123456
      }
  })
}

const eliminarTipo= async ()=>{
  const tipoCliente= await prisma.tipoCliente.delete({
      where:{
          idtipo:1
      }
  })
}

(async ()=>{
  // await createUser()
  await eliminarTipo()

})()