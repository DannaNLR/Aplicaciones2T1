"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./foto/routes");
const routes_2 = require("./marca/routes");
const routes_3 = require("./producto/routes");
const routes_4 = require("./ciudad/routes");
const routes_5 = require("./direccion/routes");
const routes_6 = require("./referencia/routes");
const routes_7 = require("./caracteristica/routes");
const routes_8 = require("./categoria/routes");
const routes_9 = require("./subcategoria/routes");
const routes_10 = require("./cliente/routes");
const routes_11 = require("./comentarioProducto/routes");
const routes_12 = require("./rol/routes");
const routes_13 = require("./pedido/routes");
const routes_14 = require("./repartidor/routes");
const routes_15 = require("./detallepedido/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/foto', routes_1.fotoRoutes.routes);
        router.use('/api/marca', routes_2.marcaRoutes.routes);
        router.use('/api/producto', routes_3.productoRoutes.routes);
        router.use('/api/ciudad', routes_4.CiudadRoutes.routes);
        router.use('/api/direccion', routes_5.DireccionRoutes.routes);
        router.use('/api/referencia', routes_6.ReferenciaRoutes.routes);
        router.use('/api/caracteristica', routes_7.CaracteristicaRoutes.routes);
        router.use('/api/categoria', routes_8.CategoriaRoutes.routes);
        router.use('/api/subcategoria', routes_9.SubCategoriaRoutes.routes);
        router.use('/api/cliente', routes_10.clienteRoutes.routes);
        router.use('/api/comentario', routes_11.comentarioRoutes.routes);
        router.use('/api/rol', routes_12.rolRoutes.routes);
        router.use('/api/pedido', routes_13.PedidoRoutes.routes);
        router.use('/api/repartidor', routes_14.RepartidorRoutes.routes);
        router.use('/api/detalle', routes_15.DetallePedidoRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
