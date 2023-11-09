import { Request, Response } from 'express';
import { prisma } from "../../data/postgres";
import { createFotoDto, updateFotoDto } from "../../domain/dtos";

export class fotosController {
  constructor() {}

public getFoto = async(req: Request, res: Response) => {
  const foto = await prisma.foto.findMany();
  return res.json(foto);
};




 public getFotoById = async (req: Request, res: Response) => {
  const idfoto = +req.params.id;

  if (isNaN(idfoto)) return res.status(400).json({ error: 'El argumento idfoto no es un número' });

  const foto = await prisma.foto.findFirst({
    where: { idfoto },
  });

  return foto ? res.json(foto) : res.status(404).json({ error: `Foto con id ${idfoto} no encontrada` });
};





  public createFoto = async (req: Request, res: Response) => {
    const [error, CreateFotoDto] = createFotoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const foto = await prisma.foto.create({
      data: CreateFotoDto!,
    });

    res.json(foto);
  };





  public updateFoto = async (req: Request, res: Response) => {
    const idfoto = +req.params.id;
    const [error, UpdateFotoDto] = updateFotoDto.create({ ...req.body, idfoto });
    if (error) return res.status(400).json({ error });

    const foto = await prisma.foto.findFirst({
      where: { idfoto },
    });

    if (!foto) return res.status(404).json({ error: `Foto con id ${idfoto} no encontrada` });

    const updatedFoto = await prisma.foto.update({
      where: { idfoto },
      data: UpdateFotoDto!.values,
    });

    res.json(updatedFoto);
  };





  
  public deleteFoto = async (req: Request, res: Response) => {
    const idfoto = +req.params.id;
    const foto = await prisma.foto.findFirst({
      where: { idfoto },
    });

    if (!foto) return res.status(404).json({ error: `Foto con id ${idfoto} no encontrada` });

    const deleted = await prisma.foto.delete({
      where: { idfoto },
    });

    return deleted ? res.json(deleted) : res.status(400).json({ error: `Foto con id ${idfoto} no encontrada` });
  };
}


