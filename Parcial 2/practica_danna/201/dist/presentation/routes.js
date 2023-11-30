"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./foto/routes");
const routes_2 = require("./marca/routes");
const routes_3 = require("./producto/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/foto', routes_1.fotoRoutes.routes);
        router.use('/api/marca', routes_2.marcaRoutes.routes);
        router.use('/api/producto', routes_3.productoRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
