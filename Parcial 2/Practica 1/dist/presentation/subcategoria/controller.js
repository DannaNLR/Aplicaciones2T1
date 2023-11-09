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
exports.SubCategoriaController = void 0;
const postgres_1 = require("../../data/postgres");
const create_subCategoria_dto_1 = require("../../domain/dtos/subcategoria/create-subCategoria.dto");
const update_subCategoria_dto_1 = require("../../domain/dtos/subcategoria/update-subCategoria.dto");
class SubCategoriaController {
    constructor() {
        this.getSubCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const subCategorias = yield postgres_1.prisma.subCategoria.findMany();
            return res.json(subCategorias);
        });
        this.getSubCategoriaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idSubCategoria = +req.params.id;
            if (isNaN(idSubCategoria))
                return res.status(400).json({ error: 'El argumento idSubCategoria no es un número' });
            const subCategoria = yield postgres_1.prisma.subCategoria.findFirst({
                where: { idSubCategoria },
            });
            return subCategoria ? res.json(subCategoria) : res.status(404).json({ error: `SubCategoría con id ${idSubCategoria} no encontrada` });
        });
        this.createSubCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createSubCategoriaDto] = create_subCategoria_dto_1.CreateSubCategoriaDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const subCategoria = yield postgres_1.prisma.subCategoria.create({
                data: createSubCategoriaDto,
            });
            res.json(subCategoria);
        });
        this.updateSubCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idSubCategoria = +req.params.id;
            const [error, updateSubCategoriaDto] = update_subCategoria_dto_1.UpdateSubCategoriaDto.create(Object.assign(Object.assign({}, req.body), { idSubCategoria }));
            if (error)
                return res.status(400).json({ error });
            const subCategoria = yield postgres_1.prisma.subCategoria.findFirst({
                where: { idSubCategoria },
            });
            if (!subCategoria)
                return res.status(404).json({ error: `SubCategoría con id ${idSubCategoria} no encontrada` });
            const updatedSubCategoria = yield postgres_1.prisma.subCategoria.update({
                where: { idSubCategoria },
                data: updateSubCategoriaDto.values,
            });
            res.json(updatedSubCategoria);
        });
        this.deleteSubCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idSubCategoria = +req.params.id;
            const subCategoria = yield postgres_1.prisma.subCategoria.findFirst({
                where: { idSubCategoria },
            });
            if (!subCategoria)
                return res.status(404).json({ error: `SubCategoría con id ${idSubCategoria} no encontrada` });
            const deleted = yield postgres_1.prisma.subCategoria.delete({
                where: { idSubCategoria },
            });
            return deleted ? res.json(deleted) : res.status(400).json({ error: `SubCategoría con id ${idSubCategoria} no encontrada` });
        });
    }
}
exports.SubCategoriaController = SubCategoriaController;
