"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class rolRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const rolController = new controller_1.rolesController();
        router.get('/', rolController.getRol);
        router.get('/:id', rolController.getRolById);
        router.post('/', rolController.createRol);
        router.put('/:id', rolController.updateRol);
        router.delete('/:id', rolController.deleteRol);
        return router;
    }
}
exports.rolRoutes = rolRoutes;
