"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetallePedidoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class DetallePedidoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const detallePedidoController = new controller_1.DetallePedidoController();
        router.get('/', detallePedidoController.getDetallePedido);
        router.get('/:id', detallePedidoController.getDetallePedidoById);
        router.post('/', detallePedidoController.createDetallePedido);
        router.put('/:id', detallePedidoController.updateDetallePedido);
        router.delete('/:id', detallePedidoController.deleteDetallePedido);
        return router;
    }
}
exports.DetallePedidoRoutes = DetallePedidoRoutes;
