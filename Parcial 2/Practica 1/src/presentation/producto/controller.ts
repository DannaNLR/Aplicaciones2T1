import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { createProductoDto, updateProductoDto } from '../../domain/dtos';

export class productosController {
  constructor() {}

  public getProducto = async (req: Request, res: Response) => {
    const productos = await prisma.producto.findMany();
    return res.json(productos);
  };



  public getProductoById = async (req: Request, res: Response) => {
    const idproducto = +req.params.id;

    if (isNaN(idproducto)) return res.status(400).json({ error: 'El argumento idproducto no es un número' });

    const producto = await prisma.producto.findFirst({
      where: { idproducto },
    });

    return producto ? res.json(producto) : res.status(404).json({ error: `Producto con id ${idproducto} no encontrado` });
  };





  public createProducto = async (req: Request, res: Response) => {
    const [error, CreateProductoDto] = createProductoDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const producto = await prisma.producto.create({
      data: CreateProductoDto!,
    });

    res.json(producto);
  };




  public updateProducto = async (req: Request, res: Response) => {
    const idproducto = +req.params.id;
    const [error, UpdateProductoDto] = updateProductoDto.create({ ...req.body, idproducto });

    if (error) return res.status(400).json({ error });

    const producto = await prisma.producto.findFirst({
      where: { idproducto },
    });

    if (!producto) return res.status(404).json({ error: `Producto con id ${idproducto} no encontrado` });

    const updatedProducto = await prisma.producto.update({
      where: { idproducto },
      data: UpdateProductoDto!.values,
    });

    res.json(updatedProducto);
  };





  public deleteProducto = async (req: Request, res: Response) => {
    const idproducto = +req.params.id;
    const producto = await prisma.producto.findFirst({
      where: { idproducto },
    });

    if (!producto) return res.status(404).json({ error: `Producto con id ${idproducto} no encontrado` });

    const deleted = await prisma.producto.delete({
      where: { idproducto },
    });

    return deleted ? res.json(deleted) : res.status(400).json({ error: `Producto con id ${idproducto} no encontrado` });
  };
}