"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class productoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const productoController = new controller_1.productosController();
        router.get('/', productoController.getProducto);
        router.get('/:id', productoController.getProductoById);
        router.post('/', productoController.createProducto);
        router.put('/:id', productoController.updateProducto);
        router.delete('/:id', productoController.deleteProducto);
        return router;
    }
}
exports.productoRoutes = productoRoutes;
