import { Router } from 'express';
import { DetallePedidoController } from './controller';

export class DetallePedidoRoutes {
  static get routes(): Router {
    const router = Router();
    const detallePedidoController = new DetallePedidoController();

    router.get('/', detallePedidoController.getDetallePedido);
    router.get('/:id', detallePedidoController.getDetallePedidoById);
    router.post('/', detallePedidoController.createDetallePedido);
    router.put('/:id', detallePedidoController.updateDetallePedido);
    router.delete('/:id', detallePedidoController.deleteDetallePedido);

    return router;
  }
}


