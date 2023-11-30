import { Router } from 'express';
import { comentariosController } from './controller';


export class comentarioRoutes {


  static get routes(): Router {

    const router = Router();

    const comentarioController = new comentariosController();

    router.get('/', comentarioController.getComentario );
    router.get('/:id', comentarioController.getComentarioById );
    
    router.post('/', comentarioController.createComentario );
    router.put('/:id', comentarioController.updateComentario );
    router.delete('/:id', comentarioController.deleteComentario );


    return router;
  }


}