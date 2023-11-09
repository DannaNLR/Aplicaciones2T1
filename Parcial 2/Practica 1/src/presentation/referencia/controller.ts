import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateReferenciaDto, UpdateReferenciaDto } from '../../domain/dtos';

export class ControllerReferencia {
  constructor() {}

  public getReferencias = async (req: Request, res: Response) => {
    const referencias = await prisma.referencia.findMany();
    return res.json(referencias);
  };

  public getReferenciaById = async (req: Request, res: Response) => {
    const id_referencia = +req.params.id;

    if (isNaN(id_referencia)) return res.status(400).json({ error: 'El argumento de ID no es un número' });

    const referencia = await prisma.referencia.findFirst({
      where: { id_referencia },
    });

    referencia
      ? res.json(referencia)
      : res.status(404).json({ error: `Referencia con ID ${id_referencia} no encontrada` });
  };

  public createReferencia = async (req: Request, res: Response) => {
    const [error, createReferenciaDto] = CreateReferenciaDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const referencia = await prisma.referencia.create({
      data: createReferenciaDto!,
    });

    res.json(referencia);
  };

  public updateReferencia = async (req: Request, res: Response) => {
    const id_referencia = +req.params.id;
    const [error, updateReferenciaDto] = UpdateReferenciaDto.create({ ...req.body, id_referencia });

    if (error) return res.status(400).json({ error });

    const referencia = await prisma.referencia.findFirst({
      where: { id_referencia },
    });

    if (!referencia) return res.status(404).json({ error: `Referencia con ID ${id_referencia} no encontrada` });

    const updatedReferencia = await prisma.referencia.update({
      where: { id_referencia },
      data: updateReferenciaDto!.values,
    });

    res.json(updatedReferencia);
  }

  public deleteReferencia = async (req: Request, res: Response) => {
    const id_referencia = +req.params.id;
    const referencia = await prisma.referencia.findFirst({
      where: { id_referencia },
    });

    if (!referencia) return res.status(404).json({ error: `Referencia con ID ${id_referencia} no encontrada` });

    const deleted = await prisma.referencia.delete({
      where: { id_referencia },
    });

    deleted
      ? res.json(deleted)
      : res.status(400).json({ error: `Referencia con ID ${id_referencia} no encontrada` });
  }
}
