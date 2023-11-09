import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePedidoDto,UpdatePedidoDto } from '../../domain/dtos';

export class PedidosController {
  constructor() {}

  public getPedido = async (req: Request, res: Response) => {
    const pedido = await prisma.pedido.findMany();
    return res.json(pedido);
  };



  public getPedidoById = async (req: Request, res: Response) => {
    const idpedido = +req.params.id;

    if (isNaN(idpedido)) return res.status(400).json({ error: 'El argumento idpedido no es un número' });

    const pedido = await prisma.pedido.findFirst({
      where: { idpedido },
    });

    return pedido ? res.json(pedido) : res.status(404).json({ error: `Pedido con id ${idpedido} no encontrada` });
  };





  public createPedido = async (req: Request, res: Response) => {
    const [error, createPedidoDto] = CreatePedidoDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const pedido = await prisma.pedido.create({
      data: createPedidoDto!,
    });

    res.json(pedido);
  };




  public updatePedido = async (req: Request, res: Response) => {
    const idpedido = +req.params.id;
    const [error, updatePedidoDto] = UpdatePedidoDto.create({ ...req.body, idpedido });

    if (error) return res.status(400).json({ error });

    const pedido = await prisma.pedido.findFirst({
      where: { idpedido },
    });

    if (!pedido) return res.status(404).json({ error: `Pedido con id ${idpedido} no encontrada` });

    const updatedPedido = await prisma.pedido.update({
      where: { idpedido },
      data: updatePedidoDto!.values,
    });

    res.json(updatedPedido);
  };





  public deletePedido = async (req: Request, res: Response) => {
    const idpedido = +req.params.id;
    const pedido = await prisma.pedido.findFirst({
      where: { idpedido },
    });

    if (!pedido) return res.status(404).json({ error: `Pedido con id ${idpedido} no encontrada` });

    const deleted = await prisma.pedido.delete({
      where: { idpedido },
    });

    return deleted ? res.json(deleted) : res.status(400).json({ error: `Pedido con id ${idpedido} no encontrada` });
  };
}
