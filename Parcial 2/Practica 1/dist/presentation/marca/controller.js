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
exports.marcasController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class marcasController {
    constructor() {
        this.getMarcas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const marca = yield postgres_1.prisma.marca.findMany();
            return res.json(marca);
        });
        this.getMarcaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idmarca = +req.params.id;
            if (isNaN(idmarca))
                return res.status(400).json({ error: 'El argumento idmarca no es un número' });
            const marca = yield postgres_1.prisma.marca.findFirst({
                where: { idmarca },
            });
            return marca ? res.json(marca) : res.status(404).json({ error: `Marca con id ${idmarca} no encontrada` });
        });
        this.createMarca = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, CreateMarcaDto] = dtos_1.createMarcaDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const marca = yield postgres_1.prisma.marca.create({
                data: CreateMarcaDto,
            });
            res.json(marca);
        });
        this.updateMarca = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idmarca = +req.params.id;
            const [error, UpdateMarcaDto] = dtos_1.updateMarcaDto.create(Object.assign(Object.assign({}, req.body), { idmarca }));
            if (error)
                return res.status(400).json({ error });
            const marca = yield postgres_1.prisma.marca.findFirst({
                where: { idmarca },
            });
            if (!marca)
                return res.status(404).json({ error: `Marca con id ${idmarca} no encontrada` });
            const updatedMarca = yield postgres_1.prisma.marca.update({
                where: { idmarca },
                data: UpdateMarcaDto.values,
            });
            res.json(updatedMarca);
        });
        this.deleteMarca = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idmarca = +req.params.id;
            const marca = yield postgres_1.prisma.marca.findFirst({
                where: { idmarca },
            });
            if (!marca)
                return res.status(404).json({ error: `Marca con id ${idmarca} no encontrada` });
            const deleted = yield postgres_1.prisma.marca.delete({
                where: { idmarca },
            });
            return deleted ? res.json(deleted) : res.status(400).json({ error: `Marca con id ${idmarca} no encontrada` });
        });
    }
}
exports.marcasController = marcasController;
