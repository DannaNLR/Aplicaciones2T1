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
exports.productosController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class productosController {
    constructor() {
        this.getProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const productos = yield postgres_1.prisma.producto.findMany();
            return res.json(productos);
        });
        this.getProductoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idproducto = +req.params.id;
            if (isNaN(idproducto))
                return res.status(400).json({ error: 'El argumento idproducto no es un número' });
            const producto = yield postgres_1.prisma.producto.findFirst({
                where: { idproducto },
            });
            return producto ? res.json(producto) : res.status(404).json({ error: `Producto con id ${idproducto} no encontrado` });
        });
        this.createProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, CreateProductoDto] = dtos_1.createProductoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const producto = yield postgres_1.prisma.producto.create({
                data: CreateProductoDto,
            });
            res.json(producto);
        });
        this.updateProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idproducto = +req.params.id;
            const [error, UpdateProductoDto] = dtos_1.updateProductoDto.create(Object.assign(Object.assign({}, req.body), { idproducto }));
            if (error)
                return res.status(400).json({ error });
            const producto = yield postgres_1.prisma.producto.findFirst({
                where: { idproducto },
            });
            if (!producto)
                return res.status(404).json({ error: `Producto con id ${idproducto} no encontrado` });
            const updatedProducto = yield postgres_1.prisma.producto.update({
                where: { idproducto },
                data: UpdateProductoDto.values,
            });
            res.json(updatedProducto);
        });
        this.deleteProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idproducto = +req.params.id;
            const producto = yield postgres_1.prisma.producto.findFirst({
                where: { idproducto },
            });
            if (!producto)
                return res.status(404).json({ error: `Producto con id ${idproducto} no encontrado` });
            const deleted = yield postgres_1.prisma.producto.delete({
                where: { idproducto },
            });
            return deleted ? res.json(deleted) : res.status(400).json({ error: `Producto con id ${idproducto} no encontrado` });
        });
    }
}
exports.productosController = productosController;
