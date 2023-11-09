"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepartidorRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class RepartidorRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const repartidorController = new controller_1.RepartidoresController;
        router.get('/', repartidorController.getRepartidor);
        router.get('/:id', repartidorController.getRepartidorById);
        router.post('/', repartidorController.createRepartidor);
        router.put('/:id', repartidorController.updateRepartidor);
        router.delete('/:id', repartidorController.deleteRepartidor);
        return router;
    }
}
exports.RepartidorRoutes = RepartidorRoutes;
