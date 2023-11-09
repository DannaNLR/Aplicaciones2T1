import { Router } from 'express';
import { CaracteristicasController } from './controller';

export class CaracteristicaRoutes {
  static get routes(): Router {
    const router = Router();
    const caracteristicaController = new CaracteristicasController();

    router.get('/', caracteristicaController.getCaracteristica);
    router.get('/:id', caracteristicaController.getCaracteristicaById);

    router.post('/', caracteristicaController.createCaracteristica);
    router.put('/:id', caracteristicaController.updateCaracteristica);
    router.delete('/:id', caracteristicaController.deleteCaracteristica);

    return router;
  }
}
