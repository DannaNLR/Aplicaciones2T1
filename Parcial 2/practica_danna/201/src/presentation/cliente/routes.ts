import { Router } from 'express';
import { clientesController } from './controller';


export class clienteRoutes {


  static get routes(): Router {

    const router = Router();

    const clienteController = new clientesController();

    router.get('/', clienteController.getCliente );
    router.get('/:id', clienteController.getClienteById );
    
    router.post('/', clienteController.createCliente );
    router.put('/:id', clienteController.updateCliente );
    router.delete('/:id', clienteController.deleteCliente );


    return router;
  }


}