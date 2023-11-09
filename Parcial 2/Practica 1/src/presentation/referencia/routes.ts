import { Router } from 'express';
import { ControllerReferencia } from './controller';

export class ReferenciaRoutes {
  static get routes(): Router {
    const router = Router();
    const referenciaController = new ControllerReferencia();
    router.get('/', referenciaController.getReferencias);
    router.get('/:id', referenciaController.getReferenciaById);
    router.post('/', referenciaController.createReferencia);
    router.put('/:id', referenciaController.updateReferencia);
    router.delete('/:id', referenciaController.deleteReferencia);
    return router;
  }
}
