"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CategoriaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const categoriaController = new controller_1.CategoriasController(); // Usa el controlador de Categorías
        router.get('/', categoriaController.getCategoria);
        router.get('/:id', categoriaController.getCategoriaById);
        router.post('/', categoriaController.createCategoria);
        router.put('/:id', categoriaController.updateCategoria);
        router.delete('/:id', categoriaController.deleteCategoria);
        return router;
    }
}
exports.CategoriaRoutes = CategoriaRoutes;
