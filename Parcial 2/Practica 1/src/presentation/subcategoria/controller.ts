import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateSubCategoriaDto } from '../../domain/dtos/subcategoria/create-subCategoria.dto';
import { UpdateSubCategoriaDto } from '../../domain/dtos/subcategoria/update-subCategoria.dto';

export class SubCategoriaController {
  constructor() {}

  public getSubCategoria = async (req: Request, res: Response) => {
    const subCategorias = await prisma.subCategoria.findMany();
    return res.json(subCategorias);
  };

  public getSubCategoriaById = async (req: Request, res: Response) => {
    const idSubCategoria = +req.params.id;

    if (isNaN(idSubCategoria)) return res.status(400).json({ error: 'El argumento idSubCategoria no es un número' });

    const subCategoria = await prisma.subCategoria.findFirst({
      where: { idSubCategoria },
    });

    return subCategoria ? res.json(subCategoria) : res.status(404).json({ error: `SubCategoría con id ${idSubCategoria} no encontrada` });
  };

  public createSubCategoria = async (req: Request, res: Response) => {
    const [error, createSubCategoriaDto] = CreateSubCategoriaDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const subCategoria = await prisma.subCategoria.create({
      data: createSubCategoriaDto!,
    });

    res.json(subCategoria);
  };

  public updateSubCategoria = async (req: Request, res: Response) => {
    const idSubCategoria = +req.params.id;
    const [error, updateSubCategoriaDto] = UpdateSubCategoriaDto.create({ ...req.body, idSubCategoria });

    if (error) return res.status(400).json({ error });

    const subCategoria = await prisma.subCategoria.findFirst({
      where: { idSubCategoria },
    });

    if (!subCategoria) return res.status(404).json({ error: `SubCategoría con id ${idSubCategoria} no encontrada` });

    const updatedSubCategoria = await prisma.subCategoria.update({
      where: { idSubCategoria },
      data: updateSubCategoriaDto!.values,
    });

    res.json(updatedSubCategoria);
  };

  public deleteSubCategoria = async (req: Request, res: Response) => {
    const idSubCategoria = +req.params.id;
    const subCategoria = await prisma.subCategoria.findFirst({
      where: { idSubCategoria },
    });

    if (!subCategoria) return res.status(404).json({ error: `SubCategoría con id ${idSubCategoria} no encontrada` });

    const deleted = await prisma.subCategoria.delete({
      where: { idSubCategoria },
    });

    return deleted ? res.json(deleted) : res.status(400).json({ error: `SubCategoría con id ${idSubCategoria} no encontrada` });
  };
}
