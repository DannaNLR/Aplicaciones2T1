import { Router } from 'express';
import { CategoriasController } from './controller';

export class CategoriaRoutes {
  static get routes(): Router {
    const router = Router();
    const categoriaController = new CategoriasController(); // Usa el controlador de Categorías

    router.get('/', categoriaController.getCategoria);
    router.get('/:id', categoriaController.getCategoriaById);

    router.post('/', categoriaController.createCategoria);
    router.put('/:id', categoriaController.updateCategoria);
    router.delete('/:id', categoriaController.deleteCategoria);

    return router;
  }
}
