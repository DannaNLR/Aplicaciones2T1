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
exports.CategoriasController = void 0;
const postgres_1 = require("../../data/postgres");
const create_categoria_dto_1 = require("../../domain/dtos/categoria/create-categoria.dto");
const update_categoria_dto_1 = require("../../domain/dtos/categoria/update-categoria.dto");
class CategoriasController {
    constructor() {
        this.getCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const categorias = yield postgres_1.prisma.categoria.findMany();
            return res.json(categorias);
        });
        this.getCategoriaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idCategoria = +req.params.id;
            if (isNaN(idCategoria))
                return res.status(400).json({ error: 'El argumento idCategoria no es un número' });
            const categoria = yield postgres_1.prisma.categoria.findFirst({
                where: { idCategoria },
            });
            return categoria ? res.json(categoria) : res.status(404).json({ error: `Categoría con id ${idCategoria} no encontrada` });
        });
        this.createCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createCategoriaDto] = create_categoria_dto_1.CreateCategoriaDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const categoria = yield postgres_1.prisma.categoria.create({
                data: createCategoriaDto,
            });
            res.json(categoria);
        });
        this.updateCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idCategoria = +req.params.id;
            const [error, updateCategoriaDto] = update_categoria_dto_1.UpdateCategoriaDto.create(Object.assign(Object.assign({}, req.body), { idCategoria }));
            if (error)
                return res.status(400).json({ error });
            const categoria = yield postgres_1.prisma.categoria.findFirst({
                where: { idCategoria },
            });
            if (!categoria)
                return res.status(404).json({ error: `Categoría con id ${idCategoria} no encontrada` });
            const updatedCategoria = yield postgres_1.prisma.categoria.update({
                where: { idCategoria },
                data: updateCategoriaDto.values,
            });
            res.json(updatedCategoria);
        });
        this.deleteCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idCategoria = +req.params.id;
            const categoria = yield postgres_1.prisma.categoria.findFirst({
                where: { idCategoria },
            });
            if (!categoria)
                return res.status(404).json({ error: `Categoría con id ${idCategoria} no encontrada` });
            const deleted = yield postgres_1.prisma.categoria.delete({
                where: { idCategoria },
            });
            return deleted ? res.json(deleted) : res.status(400).json({ error: `Categoría con id ${idCategoria} no encontrada` });
        });
    }
}
exports.CategoriasController = CategoriasController;
