import { Router } from 'express';

import { clienteRoutes  } from './cliente/routes';
import {  rolRoutes  } from './rol/routes';
import {  comentarioRoutes  } from './comentarioProducto/routes';

export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/cliente', clienteRoutes.routes );
    router.use('/api/rol', rolRoutes.routes );
    router.use('/api/comentario', comentarioRoutes.routes );
    
    return router;
  }


}