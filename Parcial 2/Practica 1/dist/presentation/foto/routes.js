"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fotoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class fotoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const fotoController = new controller_1.fotosController();
        router.get('/', fotoController.getFoto);
        router.get('/:id', fotoController.getFotoById);
        router.post('/', fotoController.createFoto);
        router.put('/:id', fotoController.updateFoto);
        router.delete('/:id', fotoController.deleteFoto);
        return router;
    }
}
exports.fotoRoutes = fotoRoutes;
