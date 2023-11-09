"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenciaRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ReferenciaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const referenciaController = new controller_1.ControllerReferencia();
        router.get('/', referenciaController.getReferencias);
        router.get('/:id', referenciaController.getReferenciaById);
        router.post('/', referenciaController.createReferencia);
        router.put('/:id', referenciaController.updateReferencia);
        router.delete('/:id', referenciaController.deleteReferencia);
        return router;
    }
}
exports.ReferenciaRoutes = ReferenciaRoutes;
