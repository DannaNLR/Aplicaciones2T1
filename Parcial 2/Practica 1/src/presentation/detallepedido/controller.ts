import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateDetallePedidoDto, UpdateDetallePedidoDto } from '../../domain/dtos';

export class DetallePedidoController {
  constructor() {}

  public getDetallePedido = async (req: Request, res: Response) => {
    const detalle = await prisma.detallePedido.findMany();
    return res.json(detalle);
  };



  public getDetallePedidoById = async (req: Request, res: Response) => {
    const iddetalle = +req.params.id;

    if (isNaN(iddetalle)) return res.status(400).json({ error: 'El argumento iddetalle no es un número' });

    const detalle = await prisma.detallePedido.findFirst({
      where: { iddetalle },
    });

    return detalle ? res.json(detalle) : res.status(404).json({ error: `Detalle con id ${iddetalle} no encontrada` });
  };





  public createDetallePedido = async (req: Request, res: Response) => {
    const [error, createDetallePedidoDto] = CreateDetallePedidoDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const detalle = await prisma.detallePedido.create({
      data: createDetallePedidoDto!,
    });

    res.json(detalle);
  };




  public updateDetallePedido = async (req: Request, res: Response) => {
    const iddetalle = +req.params.id;
    const [error, updateDetallePedidoDto] = UpdateDetallePedidoDto.create({ ...req.body, iddetalle });

    if (error) return res.status(400).json({ error });

    const detalle = await prisma.detallePedido.findFirst({
      where: { iddetalle },
    });

    if (!detalle) return res.status(404).json({ error: `Detalle con id ${iddetalle} no encontrada` });

    const updatedDetallePedido = await prisma.detallePedido.update({
      where: { iddetalle },
      data: updateDetallePedidoDto!.values,
    });

    res.json(updatedDetallePedido);
  };





  public deleteDetallePedido = async (req: Request, res: Response) => {
    const iddetalle = +req.params.id;
    const detalle = await prisma.detallePedido.findFirst({
      where: { iddetalle },
    });

    if (!detalle) return res.status(404).json({ error: `Detalle con id ${iddetalle} no encontrada` });

    const deleted = await prisma.detallePedido.delete({
      where: { iddetalle },
    });

    return deleted ? res.json(deleted) : res.status(400).json({ error: `Detalle con id ${iddetalle} no encontrada` });
  };
}
