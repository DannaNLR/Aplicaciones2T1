import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateRepartidorDto, UpdateRepartidorDto } from '../../domain/dtos';

export class RepartidoresController {
  constructor() {}

  public getRepartidor = async (req: Request, res: Response) => {
    const repartidor = await prisma.repartidor.findMany();
    return res.json(repartidor);
  };



  public getRepartidorById = async (req: Request, res: Response) => {
    const id_repartidor = +req.params.id;

    if (isNaN(id_repartidor)) return res.status(400).json({ error: 'El argumento idrepartidor no es un número' });

    const repartidor = await prisma.repartidor.findFirst({
      where: { id_repartidor },
    });

    return repartidor ? res.json(repartidor) : res.status(404).json({ error: `Repartidor con id ${id_repartidor} no encontrada` });
  };





  public createRepartidor = async (req: Request, res: Response) => {
    const [error, createRepartidorDto] = CreateRepartidorDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const repartidor = await prisma.repartidor.create({
      data: createRepartidorDto!,
    });

    res.json(repartidor);
  };




  public updateRepartidor = async (req: Request, res: Response) => {
    const id_repartidor = +req.params.id;
    const [error, updateRepartidorDto] = UpdateRepartidorDto.create({ ...req.body, id_repartidor });

    if (error) return res.status(400).json({ error });

    const repartidor = await prisma.repartidor.findFirst({
      where: { id_repartidor },
    });

    if (!repartidor) return res.status(404).json({ error: `Repartidor con id ${id_repartidor} no encontrada` });

    const updatedRepartidor = await prisma.repartidor.update({
      where: { id_repartidor },
      data: updateRepartidorDto!.values,
    });

    res.json(updatedRepartidor);
  };





  public deleteRepartidor = async (req: Request, res: Response) => {
    const id_repartidor = +req.params.id;
    const repartidor = await prisma.repartidor.findFirst({
      where: { id_repartidor },
    });

    if (!repartidor) return res.status(404).json({ error: `Repartidor con id ${id_repartidor} no encontrada` });

    const deleted = await prisma.repartidor.delete({
      where: { id_repartidor },
    });

    return deleted ? res.json(deleted) : res.status(400).json({ error: `Repartidor con id ${id_repartidor} no encontrada` });
  };
}