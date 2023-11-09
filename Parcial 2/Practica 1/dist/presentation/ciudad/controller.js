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
exports.ControllerCiudad = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ControllerCiudad {
    constructor() {
        this.getCiudades = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const ciudades = yield postgres_1.prisma.ciudad.findMany();
            return res.json(ciudades);
        });
        this.getCiudadById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_ciudad = +req.params.id;
            if (isNaN(id_ciudad))
                return res.status(400).json({ error: 'El argumento de ID no es un número' });
            const ciudad = yield postgres_1.prisma.ciudad.findFirst({
                where: { id_ciudad },
            });
            ciudad
                ? res.json(ciudad)
                : res.status(404).json({ error: `Ciudad con ID ${id_ciudad} no encontrada` });
        });
        this.createCiudad = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createCiudadDto] = dtos_1.CreateCiudadDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const ciudad = yield postgres_1.prisma.ciudad.create({
                data: createCiudadDto,
            });
            res.json(ciudad);
        });
        this.updateCiudad = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_ciudad = +req.params.id;
            const [error, updateCiudadDto] = dtos_1.UpdateCiudadDto.create(Object.assign(Object.assign({}, req.body), { id_ciudad }));
            if (error)
                return res.status(400).json({ error });
            const ciudad = yield postgres_1.prisma.ciudad.findFirst({
                where: { id_ciudad },
            });
            if (!ciudad)
                return res.status(404).json({ error: `Ciudad con ID ${id_ciudad} no encontrada` });
            const updatedCiudad = yield postgres_1.prisma.ciudad.update({
                where: { id_ciudad },
                data: updateCiudadDto.values,
            });
            res.json(updatedCiudad);
        });
        this.deleteCiudad = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_ciudad = +req.params.id;
            const ciudad = yield postgres_1.prisma.ciudad.findFirst({
                where: { id_ciudad },
            });
            if (!ciudad)
                return res.status(404).json({ error: `Ciudad con ID ${id_ciudad} no encontrada` });
            const deleted = yield postgres_1.prisma.ciudad.delete({
                where: { id_ciudad },
            });
            deleted
                ? res.json(deleted)
                : res.status(400).json({ error: `Ciudad con ID ${id_ciudad} no encontrada` });
        });
    }
}
exports.ControllerCiudad = ControllerCiudad;
