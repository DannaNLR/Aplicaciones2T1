import { Router } from 'express';
import { RepartidoresController } from './controller';

export class RepartidorRoutes {
    static get routes(): Router {
        const router = Router();
        const repartidorController = new RepartidoresController

        router.get('/', repartidorController.getRepartidor);
        router.get('/:id', repartidorController.getRepartidorById);
        router.post('/', repartidorController.createRepartidor);
        router.put('/:id', repartidorController.updateRepartidor);
        router.delete('/:id', repartidorController.deleteRepartidor);

        return router;
    }
}
