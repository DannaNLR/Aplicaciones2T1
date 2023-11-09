import { Router } from 'express';
import { ControllerCiudad } from './controller';

export class CiudadRoutes {
  static get routes(): Router {
    const router = Router();
    const ciudadController = new ControllerCiudad();
    router.get('/', ciudadController.getCiudades);
    router.get('/:id', ciudadController.getCiudadById);
    router.post('/', ciudadController.createCiudad);
    router.put('/:id', ciudadController.updateCiudad);
    router.delete('/:id', ciudadController.deleteCiudad);
    return router;
  }
}
