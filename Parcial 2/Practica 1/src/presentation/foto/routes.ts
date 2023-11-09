import { Router } from 'express';
import { fotosController } from './controller';


export class fotoRoutes {


  static get routes(): Router {

    const router = Router();

    const fotoController = new fotosController();

    router.get('/', fotoController.getFoto );
    router.get('/:id', fotoController.getFotoById );
    
    router.post('/', fotoController.createFoto );
    router.put('/:id', fotoController.updateFoto );
    router.delete('/:id', fotoController.deleteFoto );


    return router;
  }


}