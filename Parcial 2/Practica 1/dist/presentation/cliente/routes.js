"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class clienteRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const clienteController = new controller_1.clientesController();
        router.get('/', clienteController.getCliente);
        router.get('/:id', clienteController.getClienteById);
        router.post('/', clienteController.createCliente);
        router.put('/:id', clienteController.updateCliente);
        router.delete('/:id', clienteController.deleteCliente);
        return router;
    }
}
exports.clienteRoutes = clienteRoutes;
