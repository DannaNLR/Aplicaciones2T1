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
exports.ControllerDireccion = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ControllerDireccion {
    constructor() {
        this.getDirecciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const direcciones = yield postgres_1.prisma.direccion.findMany();
            return res.json(direcciones);
        });
        this.getDireccionById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_direccion = +req.params.id;
            if (isNaN(id_direccion))
                return res.status(400).json({ error: 'El argumento de ID no es un número' });
            const direccion = yield postgres_1.prisma.direccion.findFirst({
                where: { id_direccion },
            });
            direccion
                ? res.json(direccion)
                : res.status(404).json({ error: `Dirección con ID ${id_direccion} no encontrada` });
        });
        this.createDireccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createDireccionDto] = dtos_1.CreateDireccionDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const direccion = yield postgres_1.prisma.direccion.create({
                data: createDireccionDto,
            });
            res.json(direccion);
        });
        this.updateDireccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_direccion = +req.params.id;
            const [error, updateDireccionDto] = dtos_1.UpdateDireccionDto.create(Object.assign(Object.assign({}, req.body), { CI: id_direccion }));
            if (error)
                return res.status(400).json({ error });
            const direccion = yield postgres_1.prisma.direccion.findFirst({
                where: { id_direccion },
            });
            if (!direccion)
                return res.status(404).json({ error: `Dirección con ID ${id_direccion} no encontrada` });
            const updatedDireccion = yield postgres_1.prisma.direccion.update({
                where: { id_direccion },
                data: updateDireccionDto.values,
            });
            res.json(updatedDireccion);
        });
        this.deleteDireccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_direccion = +req.params.id;
            const direccion = yield postgres_1.prisma.direccion.findFirst({
                where: { id_direccion },
            });
            if (!direccion)
                return res.status(404).json({ error: `Dirección con ID ${id_direccion} no encontrada` });
            const deleted = yield postgres_1.prisma.direccion.delete({
                where: { id_direccion },
            });
            deleted
                ? res.json(deleted)
                : res.status(400).json({ error: `Dirección con ID ${id_direccion} no encontrada` });
        });
    }
}
exports.ControllerDireccion = ControllerDireccion;
