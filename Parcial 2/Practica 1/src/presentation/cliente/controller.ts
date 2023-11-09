import { Request, Response } from 'express';
import { prisma } from "../../data/postgres";
import { createClienteDto, updateClienteDto } from "../../domain/dtos";

export class clientesController {
  constructor() {}

public getCliente = async(req: Request, res: Response) => {
  const cliente = await prisma.cliente.findMany();
  return res.json(cliente);
};




 public getClienteById = async (req: Request, res: Response) => {
  const CI = +req.params.id;

  if (isNaN(CI)) return res.status(400).json({ error: 'El argumento CI no es un número' });

  const cliente = await prisma.cliente.findFirst({
    where: { CI },
  });

  return cliente ? res.json(cliente) : res.status(404).json({ error: `Cliente con cedula ${CI} no encontrada` });
};





  public createCliente = async (req: Request, res: Response) => {
    const [error, CreateClienteDto] = createClienteDto.create(req.body );
    if (error) return res.status(400).json({ error });

    const cliente = await prisma.cliente.create({
      data: CreateClienteDto!,
    });

    res.json(cliente);
  };





  public updateCliente = async (req: Request, res: Response) => {
    const CI = +req.params.id;
    const [error, UpdateClienteDto] = updateClienteDto.create({ ...req.body, CI });
    if (error) return res.status(400).json({ error });

    const cliente = await prisma.cliente.findFirst({
      where: { CI },
    });

    if (!cliente) return res.status(404).json({ error: `Cliente con cedula ${CI} no encontrada` });

    const updatedCliente = await prisma.cliente.update({
      where: { CI },
      data: UpdateClienteDto!.values,
    });

    res.json(updatedCliente);
  };





  
  public deleteCliente = async (req: Request, res: Response) => {
    const CI = +req.params.id;
    const cliente = await prisma.cliente.findFirst({
      where: { CI },
    });

    if (!cliente) return res.status(404).json({ error: `Cliente con cedula ${CI} no encontrada` });

    const deleted = await prisma.cliente.delete({
      where: { CI },
    });

    return deleted ? res.json(deleted) : res.status(400).json({ error: `Cliente con cedula ${CI} no encontrada` });
  };
}