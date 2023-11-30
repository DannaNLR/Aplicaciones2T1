import { Request, Response } from 'express';
import { prisma } from "../../data/postgres";
import { createComentarioProductoDto, updateComentarioProductoDto } from "../../domain/dtos";

export class comentariosController {
  constructor() {}

public getComentario = async(req: Request, res: Response) => {
  const comentario = await prisma.comentarioProducto.findMany();
  return res.json(comentario);
};




 public getComentarioById = async (req: Request, res: Response) => {
  const idcomentario = +req.params.id;

  if (isNaN(idcomentario)) return res.status(400).json({ error: 'El argumento idcomentario no es un número' });

  const comentario = await prisma.comentarioProducto.findFirst({
    where: { idcomentario },
  });

  return comentario ? res.json(comentario) : res.status(404).json({ error: `Comentario con id ${idcomentario} no encontrada` });
};





  public createComentario = async (req: Request, res: Response) => {
    const [error, CreateComentarioDto] = createComentarioProductoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const comentario = await prisma.comentarioProducto.create({
      data: CreateComentarioDto!,
    });

    res.json(comentario);
  };





  public updateComentario = async (req: Request, res: Response) => {
    const idcomentario = +req.params.id;
    const [error, UpdateComentarioDto] = updateComentarioProductoDto.create({ ...req.body, idcomentario });
    if (error) return res.status(400).json({ error });

    const comentario = await prisma.comentarioProducto.findFirst({
      where: { idcomentario },
    });

    if (!comentario) return res.status(404).json({ error: `Comentario con id ${idcomentario} no encontrada` });

    const updatedComentario = await prisma.comentarioProducto.update({
      where: { idcomentario },
      data: UpdateComentarioDto!.values,
    });

    res.json(updatedComentario);
  };





  
  public deleteComentario = async (req: Request, res: Response) => {
    const idcomentario = +req.params.id;
    const comentario = await prisma.comentarioProducto.findFirst({
      where: { idcomentario },
    });

    if (!comentario) return res.status(404).json({ error: `Comentario con id ${idcomentario} no encontrada` });

    const deleted = await prisma.comentarioProducto.delete({
      where: { idcomentario },
    });

    return deleted ? res.json(deleted) : res.status(400).json({ error: `Comentario con id ${idcomentario} no encontrada` });
  };
}