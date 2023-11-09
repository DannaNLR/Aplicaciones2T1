"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comentarioRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class comentarioRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const comentarioController = new controller_1.comentariosController();
        router.get('/', comentarioController.getComentario);
        router.get('/:id', comentarioController.getComentarioById);
        router.post('/', comentarioController.createComentario);
        router.put('/:id', comentarioController.updateComentario);
        router.delete('/:id', comentarioController.deleteComentario);
        return router;
    }
}
exports.comentarioRoutes = comentarioRoutes;
