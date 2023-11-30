import { Router } from 'express';
import { rolesController } from './controller';


export class rolRoutes {


  static get routes(): Router {

    const router = Router();

    const rolController = new rolesController();

    router.get('/', rolController.getRol );
    router.get('/:id', rolController.getRolById );
    
    router.post('/', rolController.createRol );
    router.put('/:id', rolController.updateRol );
    router.delete('/:id', rolController.deleteRol );


    return router;
  }


}