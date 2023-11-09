import { Router } from 'express';
import { ControllerDireccion } from './controller';

export class DireccionRoutes {
  static get routes(): Router {
    const router = Router();
    const direccionController = new ControllerDireccion();
    router.get('/', direccionController.getDirecciones);
    router.get('/:id', direccionController.getDireccionById);
    router.post('/', direccionController.createDireccion);
    router.put('/:id', direccionController.updateDireccion);
    router.delete('/:id', direccionController.deleteDireccion);
    return router;
  }
}
