"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class PedidoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const pedidosController = new controller_1.PedidosController();
        router.get('/', pedidosController.getPedido);
        router.get('/:id', pedidosController.getPedidoById);
        router.post('/', pedidosController.createPedido);
        router.put('/:id', pedidosController.updatePedido);
        router.delete('/:id', pedidosController.deletePedido);
        return router;
    }
}
exports.PedidoRoutes = PedidoRoutes;
