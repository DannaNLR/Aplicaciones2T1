import { Router } from 'express';
import { fotoRoutes  } from './foto/routes';
import {  marcaRoutes  } from './marca/routes';
import {  productoRoutes  } from './producto/routes';
import { CiudadRoutes } from './ciudad/routes';
import { DireccionRoutes } from './direccion/routes';
import { ReferenciaRoutes } from './referencia/routes';
import { CaracteristicaRoutes } from './caracteristica/routes';
import { CategoriaRoutes } from './categoria/routes';
import { SubCategoriaRoutes } from './subcategoria/routes';
import { clienteRoutes } from './cliente/routes';
import { comentarioRoutes } from './comentarioProducto/routes';
import { rolRoutes } from './rol/routes';
import { PedidoRoutes } from "./pedido/routes";
import { RepartidorRoutes } from "./repartidor/routes";
import { DetallePedidoRoutes } from "./detallepedido/routes";

export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/foto', fotoRoutes.routes );
    router.use('/api/marca', marcaRoutes.routes );
    router.use('/api/producto', productoRoutes.routes );
    router.use('/api/ciudad', CiudadRoutes.routes );
    router.use('/api/direccion', DireccionRoutes.routes );
    router.use('/api/referencia', ReferenciaRoutes.routes );
    router.use('/api/caracteristica', CaracteristicaRoutes.routes );
    router.use('/api/categoria', CategoriaRoutes.routes );
    router.use('/api/subcategoria', SubCategoriaRoutes.routes );
    router.use('/api/cliente', clienteRoutes.routes );
    router.use('/api/comentario', comentarioRoutes.routes );
    router.use('/api/rol', rolRoutes.routes );
    router.use('/api/pedido', PedidoRoutes.routes );
    router.use('/api/repartidor', RepartidorRoutes.routes );
    router.use('/api/detalle', DetallePedidoRoutes.routes );



    
    return router;
  }


}
