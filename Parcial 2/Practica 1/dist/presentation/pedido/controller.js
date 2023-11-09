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
exports.PedidosController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class PedidosController {
    constructor() {
        this.getPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pedido = yield postgres_1.prisma.pedido.findMany();
            return res.json(pedido);
        });
        this.getPedidoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idpedido = +req.params.id;
            if (isNaN(idpedido))
                return res.status(400).json({ error: 'El argumento idpedido no es un número' });
            const pedido = yield postgres_1.prisma.pedido.findFirst({
                where: { idpedido },
            });
            return pedido ? res.json(pedido) : res.status(404).json({ error: `Pedido con id ${idpedido} no encontrada` });
        });
        this.createPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createPedidoDto] = dtos_1.CreatePedidoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const pedido = yield postgres_1.prisma.pedido.create({
                data: createPedidoDto,
            });
            res.json(pedido);
        });
        this.updatePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idpedido = +req.params.id;
            const [error, updatePedidoDto] = dtos_1.UpdatePedidoDto.create(Object.assign(Object.assign({}, req.body), { idpedido }));
            if (error)
                return res.status(400).json({ error });
            const pedido = yield postgres_1.prisma.pedido.findFirst({
                where: { idpedido },
            });
            if (!pedido)
                return res.status(404).json({ error: `Pedido con id ${idpedido} no encontrada` });
            const updatedPedido = yield postgres_1.prisma.pedido.update({
                where: { idpedido },
                data: updatePedidoDto.values,
            });
            res.json(updatedPedido);
        });
        this.deletePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idpedido = +req.params.id;
            const pedido = yield postgres_1.prisma.pedido.findFirst({
                where: { idpedido },
            });
            if (!pedido)
                return res.status(404).json({ error: `Pedido con id ${idpedido} no encontrada` });
            const deleted = yield postgres_1.prisma.pedido.delete({
                where: { idpedido },
            });
            return deleted ? res.json(deleted) : res.status(400).json({ error: `Pedido con id ${idpedido} no encontrada` });
        });
    }
}
exports.PedidosController = PedidosController;
