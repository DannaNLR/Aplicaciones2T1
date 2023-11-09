"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DireccionRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class DireccionRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const direccionController = new controller_1.ControllerDireccion();
        router.get('/', direccionController.getDirecciones);
        router.get('/:id', direccionController.getDireccionById);
        router.post('/', direccionController.createDireccion);
        router.put('/:id', direccionController.updateDireccion);
        router.delete('/:id', direccionController.deleteDireccion);
        return router;
    }
}
exports.DireccionRoutes = DireccionRoutes;
