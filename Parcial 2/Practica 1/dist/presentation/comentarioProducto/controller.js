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
exports.comentariosController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class comentariosController {
    constructor() {
        this.getComentario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const comentario = yield postgres_1.prisma.comentarioProducto.findMany();
            return res.json(comentario);
        });
        this.getComentarioById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idcomentario = +req.params.id;
            if (isNaN(idcomentario))
                return res.status(400).json({ error: 'El argumento idcomentario no es un número' });
            const comentario = yield postgres_1.prisma.comentarioProducto.findFirst({
                where: { idcomentario },
            });
            return comentario ? res.json(comentario) : res.status(404).json({ error: `Comentario con id ${idcomentario} no encontrada` });
        });
        this.createComentario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, CreateComentarioDto] = dtos_1.createComentarioProductoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const comentario = yield postgres_1.prisma.comentarioProducto.create({
                data: CreateComentarioDto,
            });
            res.json(comentario);
        });
        this.updateComentario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idcomentario = +req.params.id;
            const [error, UpdateComentarioDto] = dtos_1.updateComentarioProductoDto.create(Object.assign(Object.assign({}, req.body), { idcomentario }));
            if (error)
                return res.status(400).json({ error });
            const comentario = yield postgres_1.prisma.comentarioProducto.findFirst({
                where: { idcomentario },
            });
            if (!comentario)
                return res.status(404).json({ error: `Comentario con id ${idcomentario} no encontrada` });
            const updatedComentario = yield postgres_1.prisma.comentarioProducto.update({
                where: { idcomentario },
                data: UpdateComentarioDto.values,
            });
            res.json(updatedComentario);
        });
        this.deleteComentario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idcomentario = +req.params.id;
            const comentario = yield postgres_1.prisma.comentarioProducto.findFirst({
                where: { idcomentario },
            });
            if (!comentario)
                return res.status(404).json({ error: `Comentario con id ${idcomentario} no encontrada` });
            const deleted = yield postgres_1.prisma.comentarioProducto.delete({
                where: { idcomentario },
            });
            return deleted ? res.json(deleted) : res.status(400).json({ error: `Comentario con id ${idcomentario} no encontrada` });
        });
    }
}
exports.comentariosController = comentariosController;
