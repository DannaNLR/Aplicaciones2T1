import { Router } from 'express';
import { marcasController } from './controller';


export class marcaRoutes {


  static get routes(): Router {

    const router = Router();

    const marcaController = new marcasController();

    router.get('/', marcaController.getMarcas );
    router.get('/:id', marcaController.getMarcaById );
    
    router.post('/', marcaController.createMarca );
    router.put('/:id', marcaController.updateMarca );
    router.delete('/:id', marcaController.deleteMarca );


    return router;
  }


}