"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CiudadRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const ciudadController = new controller_1.ControllerCiudad();
        router.get('/', ciudadController.getCiudades);
        router.get('/:id', ciudadController.getCiudadById);
        router.post('/', ciudadController.createCiudad);
        router.put('/:id', ciudadController.updateCiudad);
        router.delete('/:id', ciudadController.deleteCiudad);
        return router;
    }
}
exports.CiudadRoutes = CiudadRoutes;
