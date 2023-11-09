import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCategoriaDto } from '../../domain/dtos/categoria/create-categoria.dto';
import { UpdateCategoriaDto } from '../../domain/dtos/categoria/update-categoria.dto'; 

export class CategoriasController {
  constructor() {}

  public getCategoria = async (req: Request, res: Response) => {
    const categorias = await prisma.categoria.findMany();
    return res.json(categorias);
  };

  public getCategoriaById = async (req: Request, res: Response) => {
    const idCategoria = +req.params.id;

    if (isNaN(idCategoria)) return res.status(400).json({ error: 'El argumento idCategoria no es un número' });

    const categoria = await prisma.categoria.findFirst({
      where: { idCategoria },
    });

    return categoria ? res.json(categoria) : res.status(404).json({ error: `Categoría con id ${idCategoria} no encontrada` });
  };

  public createCategoria = async (req: Request, res: Response) => {
    const [error, createCategoriaDto] = CreateCategoriaDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const categoria = await prisma.categoria.create({
      data: createCategoriaDto!,
    });

    res.json(categoria);
  };

  public updateCategoria = async (req: Request, res: Response) => {
    const idCategoria = +req.params.id;
    const [error, updateCategoriaDto] = UpdateCategoriaDto.create({ ...req.body, idCategoria });

    if (error) return res.status(400).json({ error });

    const categoria = await prisma.categoria.findFirst({
      where: { idCategoria },
    });

    if (!categoria) return res.status(404).json({ error: `Categoría con id ${idCategoria} no encontrada` });

    const updatedCategoria = await prisma.categoria.update({
      where: { idCategoria },
      data: updateCategoriaDto!.values,
    });

    res.json(updatedCategoria);
  };

  public deleteCategoria = async (req: Request, res: Response) => {
    const idCategoria = +req.params.id;
    const categoria = await prisma.categoria.findFirst({
      where: { idCategoria },
    });

    if (!categoria) return res.status(404).json({ error: `Categoría con id ${idCategoria} no encontrada` });

    const deleted = await prisma.categoria.delete({
      where: { idCategoria },
    });

    return deleted ? res.json(deleted) : res.status(400).json({ error: `Categoría con id ${idCategoria} no encontrada` });
  };
}
