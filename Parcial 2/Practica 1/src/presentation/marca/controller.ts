import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { createMarcaDto, updateMarcaDto } from '../../domain/dtos';

export class marcasController {
  constructor() {}

  public getMarcas = async (req: Request, res: Response) => {
    const marca = await prisma.marca.findMany();
    return res.json(marca);
  };



  public getMarcaById = async (req: Request, res: Response) => {
    const idmarca = +req.params.id;

    if (isNaN(idmarca)) return res.status(400).json({ error: 'El argumento idmarca no es un número' });

    const marca = await prisma.marca.findFirst({
      where: { idmarca },
    });

    return marca ? res.json(marca) : res.status(404).json({ error: `Marca con id ${idmarca} no encontrada` });
  };





  public createMarca = async (req: Request, res: Response) => {
    const [error, CreateMarcaDto] = createMarcaDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const marca = await prisma.marca.create({
      data: CreateMarcaDto!,
    });

    res.json(marca);
  };




  public updateMarca = async (req: Request, res: Response) => {
    const idmarca = +req.params.id;
    const [error, UpdateMarcaDto] = updateMarcaDto.create({ ...req.body, idmarca });

    if (error) return res.status(400).json({ error });

    const marca = await prisma.marca.findFirst({
      where: { idmarca },
    });

    if (!marca) return res.status(404).json({ error: `Marca con id ${idmarca} no encontrada` });

    const updatedMarca = await prisma.marca.update({
      where: { idmarca },
      data: UpdateMarcaDto!.values,
    });

    res.json(updatedMarca);
  };





  public deleteMarca = async (req: Request, res: Response) => {
    const idmarca = +req.params.id;
    const marca = await prisma.marca.findFirst({
      where: { idmarca },
    });

    if (!marca) return res.status(404).json({ error: `Marca con id ${idmarca} no encontrada` });

    const deleted = await prisma.marca.delete({
      where: { idmarca },
    });

    return deleted ? res.json(deleted) : res.status(400).json({ error: `Marca con id ${idmarca} no encontrada` });
  };
}

