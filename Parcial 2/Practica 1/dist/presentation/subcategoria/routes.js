"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoriaRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller"); // Importa el controlador de SubCategorias
class SubCategoriaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const subCategoriaController = new controller_1.SubCategoriaController(); // Usa el controlador de SubCategorias
        router.get('/', subCategoriaController.getSubCategoria);
        router.get('/:id', subCategoriaController.getSubCategoriaById);
        router.post('/', subCategoriaController.createSubCategoria);
        router.put('/:id', subCategoriaController.updateSubCategoria);
        router.delete('/:id', subCategoriaController.deleteSubCategoria);
        return router;
    }
}
exports.SubCategoriaRoutes = SubCategoriaRoutes;
