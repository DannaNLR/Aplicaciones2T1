import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateDireccionDto, UpdateDireccionDto } from '../../domain/dtos';

export class ControllerDireccion {
  constructor() {}

  public getDirecciones = async (req: Request, res: Response) => {
    const direcciones = await prisma.direccion.findMany();
    return res.json(direcciones);
  };

  public getDireccionById = async (req: Request, res: Response) => {
    const id_direccion = +req.params.id;

    if (isNaN(id_direccion)) return res.status(400).json({ error: 'El argumento de ID no es un número' });

    const direccion = await prisma.direccion.findFirst({
      where: { id_direccion },
    });

    direccion
      ? res.json(direccion)
      : res.status(404).json({ error: `Dirección con ID ${id_direccion} no encontrada` });
  };

  public createDireccion = async (req: Request, res: Response) => {
    const [error, createDireccionDto] = CreateDireccionDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const direccion = await prisma.direccion.create({
      data: createDireccionDto!,
    });

    res.json(direccion);
  };

  public updateDireccion = async (req: Request, res: Response) => {
    const id_direccion = +req.params.id;
    const [error, updateDireccionDto] = UpdateDireccionDto.create({ ...req.body, CI: id_direccion });

    if (error) return res.status(400).json({ error });

    const direccion = await prisma.direccion.findFirst({
      where: { id_direccion },
    });

    if (!direccion) return res.status(404).json({ error: `Dirección con ID ${id_direccion} no encontrada` });

    const updatedDireccion = await prisma.direccion.update({
      where: { id_direccion },
      data: updateDireccionDto!.values,
    });

    res.json(updatedDireccion);
  }

  public deleteDireccion = async (req: Request, res: Response) => {
    const id_direccion = +req.params.id;
    const direccion = await prisma.direccion.findFirst({
      where: { id_direccion },
    });

    if (!direccion) return res.status(404).json({ error: `Dirección con ID ${id_direccion} no encontrada` });

    const deleted = await prisma.direccion.delete({
      where: { id_direccion },
    });

    deleted
      ? res.json(deleted)
      : res.status(400).json({ error: `Dirección con ID ${id_direccion} no encontrada` });
  }
}
