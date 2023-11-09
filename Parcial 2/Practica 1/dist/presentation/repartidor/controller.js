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
exports.RepartidoresController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class RepartidoresController {
    constructor() {
        this.getRepartidor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const repartidor = yield postgres_1.prisma.repartidor.findMany();
            return res.json(repartidor);
        });
        this.getRepartidorById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_repartidor = +req.params.id;
            if (isNaN(id_repartidor))
                return res.status(400).json({ error: 'El argumento idrepartidor no es un número' });
            const repartidor = yield postgres_1.prisma.repartidor.findFirst({
                where: { id_repartidor },
            });
            return repartidor ? res.json(repartidor) : res.status(404).json({ error: `Repartidor con id ${id_repartidor} no encontrada` });
        });
        this.createRepartidor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createRepartidorDto] = dtos_1.CreateRepartidorDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const repartidor = yield postgres_1.prisma.repartidor.create({
                data: createRepartidorDto,
            });
            res.json(repartidor);
        });
        this.updateRepartidor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_repartidor = +req.params.id;
            const [error, updateRepartidorDto] = dtos_1.UpdateRepartidorDto.create(Object.assign(Object.assign({}, req.body), { id_repartidor }));
            if (error)
                return res.status(400).json({ error });
            const repartidor = yield postgres_1.prisma.repartidor.findFirst({
                where: { id_repartidor },
            });
            if (!repartidor)
                return res.status(404).json({ error: `Repartidor con id ${id_repartidor} no encontrada` });
            const updatedRepartidor = yield postgres_1.prisma.repartidor.update({
                where: { id_repartidor },
                data: updateRepartidorDto.values,
            });
            res.json(updatedRepartidor);
        });
        this.deleteRepartidor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_repartidor = +req.params.id;
            const repartidor = yield postgres_1.prisma.repartidor.findFirst({
                where: { id_repartidor },
            });
            if (!repartidor)
                return res.status(404).json({ error: `Repartidor con id ${id_repartidor} no encontrada` });
            const deleted = yield postgres_1.prisma.repartidor.delete({
                where: { id_repartidor },
            });
            return deleted ? res.json(deleted) : res.status(400).json({ error: `Repartidor con id ${id_repartidor} no encontrada` });
        });
    }
}
exports.RepartidoresController = RepartidoresController;
