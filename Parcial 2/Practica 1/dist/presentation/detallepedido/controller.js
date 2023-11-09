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
exports.DetallePedidoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class DetallePedidoController {
    constructor() {
        this.getDetallePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const detalle = yield postgres_1.prisma.detallePedido.findMany();
            return res.json(detalle);
        });
        this.getDetallePedidoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const iddetalle = +req.params.id;
            if (isNaN(iddetalle))
                return res.status(400).json({ error: 'El argumento iddetalle no es un número' });
            const detalle = yield postgres_1.prisma.detallePedido.findFirst({
                where: { iddetalle },
            });
            return detalle ? res.json(detalle) : res.status(404).json({ error: `Detalle con id ${iddetalle} no encontrada` });
        });
        this.createDetallePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createDetallePedidoDto] = dtos_1.CreateDetallePedidoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const detalle = yield postgres_1.prisma.detallePedido.create({
                data: createDetallePedidoDto,
            });
            res.json(detalle);
        });
        this.updateDetallePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const iddetalle = +req.params.id;
            const [error, updateDetallePedidoDto] = dtos_1.UpdateDetallePedidoDto.create(Object.assign(Object.assign({}, req.body), { iddetalle }));
            if (error)
                return res.status(400).json({ error });
            const detalle = yield postgres_1.prisma.detallePedido.findFirst({
                where: { iddetalle },
            });
            if (!detalle)
                return res.status(404).json({ error: `Detalle con id ${iddetalle} no encontrada` });
            const updatedDetallePedido = yield postgres_1.prisma.detallePedido.update({
                where: { iddetalle },
                data: updateDetallePedidoDto.values,
            });
            res.json(updatedDetallePedido);
        });
        this.deleteDetallePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const iddetalle = +req.params.id;
            const detalle = yield postgres_1.prisma.detallePedido.findFirst({
                where: { iddetalle },
            });
            if (!detalle)
                return res.status(404).json({ error: `Detalle con id ${iddetalle} no encontrada` });
            const deleted = yield postgres_1.prisma.detallePedido.delete({
                where: { iddetalle },
            });
            return deleted ? res.json(deleted) : res.status(400).json({ error: `Detalle con id ${iddetalle} no encontrada` });
        });
    }
}
exports.DetallePedidoController = DetallePedidoController;
