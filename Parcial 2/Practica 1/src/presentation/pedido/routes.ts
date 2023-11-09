
import {Router } from 'express';
import { PedidosController } from './controller';

export class PedidoRoutes {
    static get routes(): Router {
      const router = Router();
      const pedidosController = new PedidosController();
  
      router.get('/', pedidosController.getPedido);
      router.get('/:id', pedidosController.getPedidoById);
      
      router.post('/', pedidosController.createPedido);
      router.put('/:id', pedidosController.updatePedido);
      router.delete('/:id', pedidosController.deletePedido);
  
      return router;
    }
  }

  