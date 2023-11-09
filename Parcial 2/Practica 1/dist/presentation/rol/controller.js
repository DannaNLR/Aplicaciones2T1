"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolesController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class rolesController {
    constructor() {
        this.getRol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const rol = yield postgres_1.prisma.rol.findMany();
            return res.json(rol);
        });
        this.getRolById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idrol = +req.params.id;
            if (isNaN(idrol))
                return res.status(400).json({ error: 'El argumento idrol no es un número' });
            const rol = yield postgres_1.prisma.rol.findFirst({
                where: { idrol },
            });
            return rol ? res.json(rol) : res.status(404).json({ error: `Rol con id ${idrol} no encontrado` });
        });
        this.createRol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, CreateRolDto] = dtos_1.createRolDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const rol = yield postgres_1.prisma.rol.create({
                data: CreateRolDto,
            });
            res.json(rol);
        });
        this.updateRol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idrol = +req.params.id;
            const [error, UpdateRolDto] = dtos_1.updateRolDto.create(Object.assign(Object.assign({}, req.body), { idrol }));
            if (error)
                return res.status(400).json({ error });
            const rol = yield postgres_1.prisma.rol.findFirst({
                where: { idrol },
            });
            if (!rol)
                return res.status(404).json({ error: `Rol con id ${idrol} no encontrado` });
            const updatedRol = yield postgres_1.prisma.rol.update({
                where: { idrol },
                data: UpdateRolDto.values,
            });
            res.json(updatedRol);
        });
        this.deleteRol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idrol = +req.params.id;
            const rol = yield postgres_1.prisma.rol.findFirst({
                where: { idrol },
            });
            if (!rol)
                return res.status(404).json({ error: `Rol con id ${idrol} no encontrado` });
            const deleted = yield postgres_1.prisma.rol.delete({
                where: { idrol },
            });
            return deleted ? res.json(deleted) : res.status(400).json({ error: `Rol con id ${idrol} no encontrado` });
        });
    }
}
exports.rolesController = rolesController;
