"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaracteristicaRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CaracteristicaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const caracteristicaController = new controller_1.CaracteristicasController();
        router.get('/', caracteristicaController.getCaracteristica);
        router.get('/:id', caracteristicaController.getCaracteristicaById);
        router.post('/', caracteristicaController.createCaracteristica);
        router.put('/:id', caracteristicaController.updateCaracteristica);
        router.delete('/:id', caracteristicaController.deleteCaracteristica);
        return router;
    }
}
exports.CaracteristicaRoutes = CaracteristicaRoutes;
