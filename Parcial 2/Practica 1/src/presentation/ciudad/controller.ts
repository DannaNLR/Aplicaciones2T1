import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCiudadDto, UpdateCiudadDto } from '../../domain/dtos';

export class ControllerCiudad {
  constructor() {}

  public getCiudades = async (req: Request, res: Response) => {
    const ciudades = await prisma.ciudad.findMany();
    return res.json(ciudades);
  };

  public getCiudadById = async (req: Request, res: Response) => {
    const id_ciudad = +req.params.id;

    if (isNaN(id_ciudad)) return res.status(400).json({ error: 'El argumento de ID no es un número' });

    const ciudad = await prisma.ciudad.findFirst({
      where: { id_ciudad },
    });

    ciudad
      ? res.json(ciudad)
      : res.status(404).json({ error: `Ciudad con ID ${id_ciudad} no encontrada` });
  };

  public createCiudad = async (req: Request, res: Response) => {
    const [error, createCiudadDto] = CreateCiudadDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const ciudad = await prisma.ciudad.create({
      data: createCiudadDto!,
    });

    res.json(ciudad);
  };

  public updateCiudad = async (req: Request, res: Response) => {
    const id_ciudad = +req.params.id;
    const [error, updateCiudadDto] = UpdateCiudadDto.create({ ...req.body, id_ciudad });

    if (error) return res.status(400).json({ error });

    const ciudad = await prisma.ciudad.findFirst({
      where: { id_ciudad },
    });

    if (!ciudad) return res.status(404).json({ error: `Ciudad con ID ${id_ciudad} no encontrada` });

    const updatedCiudad = await prisma.ciudad.update({
      where: { id_ciudad },
      data: updateCiudadDto!.values,
    });

    res.json(updatedCiudad);
  }

  public deleteCiudad = async (req: Request, res: Response) => {
    const id_ciudad = +req.params.id;
    const ciudad = await prisma.ciudad.findFirst({
      where: { id_ciudad },
    });

    if (!ciudad) return res.status(404).json({ error: `Ciudad con ID ${id_ciudad} no encontrada` });

    const deleted = await prisma.ciudad.delete({
      where: { id_ciudad },
    });

    deleted
      ? res.json(deleted)
      : res.status(400).json({ error: `Ciudad con ID ${id_ciudad} no encontrada` });
  }
}
