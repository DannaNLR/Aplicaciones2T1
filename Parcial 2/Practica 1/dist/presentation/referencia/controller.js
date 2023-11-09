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
exports.ControllerReferencia = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ControllerReferencia {
    constructor() {
        this.getReferencias = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const referencias = yield postgres_1.prisma.referencia.findMany();
            return res.json(referencias);
        });
        this.getReferenciaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_referencia = +req.params.id;
            if (isNaN(id_referencia))
                return res.status(400).json({ error: 'El argumento de ID no es un número' });
            const referencia = yield postgres_1.prisma.referencia.findFirst({
                where: { id_referencia },
            });
            referencia
                ? res.json(referencia)
                : res.status(404).json({ error: `Referencia con ID ${id_referencia} no encontrada` });
        });
        this.createReferencia = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createReferenciaDto] = dtos_1.CreateReferenciaDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const referencia = yield postgres_1.prisma.referencia.create({
                data: createReferenciaDto,
            });
            res.json(referencia);
        });
        this.updateReferencia = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_referencia = +req.params.id;
            const [error, updateReferenciaDto] = dtos_1.UpdateReferenciaDto.create(Object.assign(Object.assign({}, req.body), { id_referencia }));
            if (error)
                return res.status(400).json({ error });
            const referencia = yield postgres_1.prisma.referencia.findFirst({
                where: { id_referencia },
            });
            if (!referencia)
                return res.status(404).json({ error: `Referencia con ID ${id_referencia} no encontrada` });
            const updatedReferencia = yield postgres_1.prisma.referencia.update({
                where: { id_referencia },
                data: updateReferenciaDto.values,
            });
            res.json(updatedReferencia);
        });
        this.deleteReferencia = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_referencia = +req.params.id;
            const referencia = yield postgres_1.prisma.referencia.findFirst({
                where: { id_referencia },
            });
            if (!referencia)
                return res.status(404).json({ error: `Referencia con ID ${id_referencia} no encontrada` });
            const deleted = yield postgres_1.prisma.referencia.delete({
                where: { id_referencia },
            });
            deleted
                ? res.json(deleted)
                : res.status(400).json({ error: `Referencia con ID ${id_referencia} no encontrada` });
        });
    }
}
exports.ControllerReferencia = ControllerReferencia;
