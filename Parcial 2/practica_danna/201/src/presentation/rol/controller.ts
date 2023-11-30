import { Request, Response } from 'express';
import { prisma } from "../../data/postgres";
import { createRolDto, updateRolDto } from "../../domain/dtos";

export class rolesController {
  constructor() {}

public getRol = async(req: Request, res: Response) => {
  const rol = await prisma.rol.findMany();
  return res.json(rol);
};




 public getRolById = async (req: Request, res: Response) => {
  const idrol = +req.params.id;

  if (isNaN(idrol)) return res.status(400).json({ error: 'El argumento idrol no es un número' });

  const rol = await prisma.rol.findFirst({
    where: { idrol },
  });

  return rol ? res.json(rol) : res.status(404).json({ error: `Rol con id ${idrol} no encontrado` });
};





  public createRol = async (req: Request, res: Response) => {
    const [error, CreateRolDto] = createRolDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const rol = await prisma.rol.create({
      data: CreateRolDto!,
    });

    res.json(rol);
  };





  public updateRol = async (req: Request, res: Response) => {
    const idrol = +req.params.id;
    const [error, UpdateRolDto] = updateRolDto.create({ ...req.body, idrol });
    if (error) return res.status(400).json({ error });

    const rol = await prisma.rol.findFirst({
      where: { idrol },
    });

    if (!rol) return res.status(404).json({ error: `Rol con id ${idrol} no encontrado` });

    const updatedRol = await prisma.rol.update({
      where: { idrol },
      data: UpdateRolDto!.values,
    });

    res.json(updatedRol);
  };





  
  public deleteRol = async (req: Request, res: Response) => {
    const idrol = +req.params.id;
    const rol = await prisma.rol.findFirst({
      where: { idrol },
    });

    if (!rol) return res.status(404).json({ error: `Rol con id ${idrol} no encontrado` });

    const deleted = await prisma.rol.delete({
      where: { idrol },
    });

    return deleted ? res.json(deleted) : res.status(400).json({ error: `Rol con id ${idrol} no encontrado` });
  };
}