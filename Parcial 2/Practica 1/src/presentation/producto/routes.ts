import { Router } from 'express';
import { productosController } from './controller';


export class productoRoutes {


  static get routes(): Router {

    const router = Router();

    const productoController = new productosController();

    router.get('/', productoController.getProducto );
    router.get('/:id', productoController.getProductoById );
    
    router.post('/', productoController.createProducto );
    router.put('/:id', productoController.updateProducto );
    router.delete('/:id', productoController.deleteProducto );


    return router;
  }


}
