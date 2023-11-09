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
exports.clientesController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class clientesController {
    constructor() {
        this.getCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const cliente = yield postgres_1.prisma.cliente.findMany();
            return res.json(cliente);
        });
        this.getClienteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const CI = +req.params.id;
            if (isNaN(CI))
                return res.status(400).json({ error: 'El argumento CI no es un número' });
            const cliente = yield postgres_1.prisma.cliente.findFirst({
                where: { CI },
            });
            return cliente ? res.json(cliente) : res.status(404).json({ error: `Cliente con cedula ${CI} no encontrada` });
        });
        this.createCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, CreateClienteDto] = dtos_1.createClienteDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const cliente = yield postgres_1.prisma.cliente.create({
                data: CreateClienteDto,
            });
            res.json(cliente);
        });
        this.updateCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const CI = +req.params.id;
            const [error, UpdateClienteDto] = dtos_1.updateClienteDto.create(Object.assign(Object.assign({}, req.body), { CI }));
            if (error)
                return res.status(400).json({ error });
            const cliente = yield postgres_1.prisma.cliente.findFirst({
                where: { CI },
            });
            if (!cliente)
                return res.status(404).json({ error: `Cliente con cedula ${CI} no encontrada` });
            const updatedCliente = yield postgres_1.prisma.cliente.update({
                where: { CI },
                data: UpdateClienteDto.values,
            });
            res.json(updatedCliente);
        });
        this.deleteCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const CI = +req.params.id;
            const cliente = yield postgres_1.prisma.cliente.findFirst({
                where: { CI },
            });
            if (!cliente)
                return res.status(404).json({ error: `Cliente con cedula ${CI} no encontrada` });
            const deleted = yield postgres_1.prisma.cliente.delete({
                where: { CI },
            });
            return deleted ? res.json(deleted) : res.status(400).json({ error: `Cliente con cedula ${CI} no encontrada` });
        });
    }
}
exports.clientesController = clientesController;
