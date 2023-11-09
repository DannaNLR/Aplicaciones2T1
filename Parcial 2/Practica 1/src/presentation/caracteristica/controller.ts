import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';

import { CreateCaracteristicaDto } from '../../domain/dtos/caracteristica/create-caracteristica.dto';
import { UpdateCaracteristicaDto } from '../../domain/dtos/caracteristica/update-caracteristica.dto';

export class CaracteristicasController {
  constructor() {}

  public getCaracteristica = async (req: Request, res: Response) => {
    const caracteristicas = await prisma.caracteristica.findMany();
    return res.json(caracteristicas);
  };

  public getCaracteristicaById = async (req: Request, res: Response) => {
    const idCaracteristica = +req.params.id;

    if (isNaN(idCaracteristica)) return res.status(400).json({ error: 'El argumento idCaracteristica no es un número' });

    const caracteristica = await prisma.caracteristica.findFirst({
      where: { idCaracteristica },
    });

    return caracteristica ? res.json(caracteristica) : res.status(404).json({ error: `Característica con id ${idCaracteristica} no encontrada` });
  };

  public createCaracteristica = async (req: Request, res: Response) => {
    const [error, createCaracteristicaDto] = CreateCaracteristicaDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const caracteristica = await prisma.caracteristica.create({
      data: createCaracteristicaDto!,
    });

    res.json(caracteristica);
  };

  public updateCaracteristica = async (req: Request, res: Response) => {
    const idCaracteristica = +req.params.id;
    const [error, updateCaracteristicaDto] = UpdateCaracteristicaDto.create({ ...req.body, idCaracteristica });

    if (error) return res.status(400).json({ error });

    const caracteristica = await prisma.caracteristica.findFirst({
      where: { idCaracteristica },
    });

    if (!caracteristica) return res.status(404).json({ error: `Característica con id ${idCaracteristica} no encontrada` });

    const updatedCaracteristica = await prisma.caracteristica.update({
      where: { idCaracteristica },
      data: updateCaracteristicaDto!.values,
    });

    res.json(updatedCaracteristica);
  };

  public deleteCaracteristica = async (req: Request, res: Response) => {
    const idCaracteristica = +req.params.id;
    const caracteristica = await prisma.caracteristica.findFirst({
      where: { idCaracteristica },
    });

    if (!caracteristica) return res.status(404).json({ error: `Característica con id ${idCaracteristica} no encontrada` });

    const deleted = await prisma.caracteristica.delete({
      where: { idCaracteristica },
    });

    return deleted ? res.json(deleted) : res.status(400).json({ error: `Característica con id ${idCaracteristica} no encontrada` });
  };
}
