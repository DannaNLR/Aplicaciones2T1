"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marcaRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class marcaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const marcaController = new controller_1.marcasController();
        router.get('/', marcaController.getMarcas);
        router.get('/:id', marcaController.getMarcaById);
        router.post('/', marcaController.createMarca);
        router.put('/:id', marcaController.updateMarca);
        router.delete('/:id', marcaController.deleteMarca);
        return router;
    }
}
exports.marcaRoutes = marcaRoutes;
